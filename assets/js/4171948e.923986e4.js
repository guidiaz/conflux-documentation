"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),h=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),d=h(n),f=o,p=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(p,s(s({ref:t},l),{},{components:n})):a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:o,s[1]=r;for(var h=2;h<i;h++)s[h]=n[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4,title:"FAQs"},s=void 0,r={unversionedId:"core/learn/core-space-basics/transactions/FAQ",id:"core/learn/core-space-basics/transactions/FAQ",title:"FAQs",description:"How to send a transaction?",source:"@site/docs/core/learn/core-space-basics/transactions/FAQ.md",sourceDirName:"core/learn/core-space-basics/transactions",slug:"/core/learn/core-space-basics/transactions/FAQ",permalink:"/docs/core/learn/core-space-basics/transactions/FAQ",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/learn/core-space-basics/transactions/FAQ.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"FAQs"},sidebar:"tutorialSidebar",previous:{title:"Why Transaction is Pending?",permalink:"/docs/core/learn/core-space-basics/transactions/why-transaction-is-pending"},next:{title:"Storage",permalink:"/docs/core/learn/core-space-basics/storage"}},c={},h=[{value:"How to send a transaction?",id:"how-to-send-a-transaction",level:2},{value:"What are the gas and storage fees when sending a transaction?",id:"what-are-the-gas-and-storage-fees-when-sending-a-transaction",level:2},{value:"What information (parameters) need to be specified when using the SDK to send transactions\uff1f",id:"what-information-parameters-need-to-be-specified-when-using-the-sdk-to-send-transactions",level:2},{value:"In addition to <code>from</code>, <code>to</code>, <code>value</code>, what information does a TX contain?",id:"in-addition-to-from-to-value-what-information-does-a-tx-contain",level:2},{value:"How to get the correct nonce?",id:"how-to-get-the-correct-nonce",level:2},{value:"When will the nonce increase by 1? Will the nonce increase by 1 if the transaction fails? Why has the nonce not changed when the transaction has been sent?",id:"when-will-the-nonce-increase-by-1-will-the-nonce-increase-by-1-if-the-transaction-fails-why-has-the-nonce-not-changed-when-the-transaction-has-been-sent",level:2},{value:"How to calculate the gas fee actually used in the transaction?",id:"how-to-calculate-the-gas-fee-actually-used-in-the-transaction",level:2},{value:"How to release the storage deposit?",id:"how-to-release-the-storage-deposit",level:2},{value:"Why has the balance not changed after interacting with a contract and the gas fee is paid for this transaction?",id:"why-has-the-balance-not-changed-after-interacting-with-a-contract-and-the-gas-fee-is-paid-for-this-transaction",level:2},{value:"If you want to send transactions in batches, how to manage nonce?",id:"if-you-want-to-send-transactions-in-batches-how-to-manage-nonce",level:2},{value:"How to know the amount of gas and storage used by a transaction?",id:"how-to-know-the-amount-of-gas-and-storage-used-by-a-transaction",level:2},{value:"How do I know that a transaction has been successfully executed?",id:"how-do-i-know-that-a-transaction-has-been-successfully-executed",level:2},{value:"How to determine whether a transaction is safe and confirmed?",id:"how-to-determine-whether-a-transaction-is-safe-and-confirmed",level:2},{value:"What is a receipt, and what information does it contain?",id:"what-is-a-receipt-and-what-information-does-it-contain",level:2},{value:"How does the status of the transaction change?",id:"how-does-the-status-of-the-transaction-change",level:2},{value:"Why does a transaction fail?",id:"why-does-a-transaction-fail",level:2},{value:"Why does a transaction keep on waiting to be packaged?",id:"why-does-a-transaction-keep-on-waiting-to-be-packaged",level:2},{value:"Why would a transaction execution fail?",id:"why-would-a-transaction-execution-fail",level:2}],l={toc:h},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-send-a-transaction"},"How to send a transaction?"),(0,o.kt)("p",null,"The easiest way to send a transaction is to use a wallet such as Conflux Fluent, and click \u201csend\u201d to directly set the amount. If you are a developer, you can use the Conflux SDK (JS, Java, Go) to construct the transaction yourself, and then send it to the chain via the node RPC."),(0,o.kt)("h2",{id:"what-are-the-gas-and-storage-fees-when-sending-a-transaction"},"What are the gas and storage fees when sending a transaction?"),(0,o.kt)("p",null,"The gas fee is a fee required for transaction execution. Miners need to charge a certain amount of fee for packaging and executing the transaction. The way to calculate the gas fee is gasFee = gasPrice * gasUsed.\nAdditionally, the execution of the transaction may occupy new storage space. Even though you don't need to pay for the occupation of this space, a certain amount of CFX needs to be staked for the use of this storage. As the storage is released, the staked CFX will be returned.\nThe storage fee refers to the amount of staked CFX for the storage used, and 1 CFX is required per 1024 bytes used."),(0,o.kt)("h2",{id:"what-information-parameters-need-to-be-specified-when-using-the-sdk-to-send-transactions"},"What information (parameters) need to be specified when using the SDK to send transactions\uff1f"),(0,o.kt)("p",null,"If you make simple CFX transfers using JS-SDK, you only need to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," (transfer from which account), ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," (send to which account), ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," (quantity to send, unit: Drip)."),(0,o.kt)("h2",{id:"in-addition-to-from-to-value-what-information-does-a-tx-contain"},"In addition to ",(0,o.kt)("inlineCode",{parentName:"h2"},"from"),", ",(0,o.kt)("inlineCode",{parentName:"h2"},"to"),", ",(0,o.kt)("inlineCode",{parentName:"h2"},"value"),", what information does a TX contain?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"from"),": the address of the transaction sender. It cannot be empty, and can only be an externally owned account, not a smart contract\u2019s address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"to"),": the recipient of the transaction, which can be empty. If it is empty, the information in ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," will be used to create a smart contract. The address of the newly created contract can be found in the transaction receipt."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),": transaction amount (unit: Drip)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nonce"),": the serial number of the transaction execution. Usually, the counting of the number starts from 0 and increases by 1 when every transaction is sent. The execution of the transaction will also be processed in an increasing order without skipping. You can get the next nonce of an address using ",(0,o.kt)("inlineCode",{parentName:"li"},"cfx_getNextNonce"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gas"),": the upper limit of the amount of gas fee that can be consumed for transaction execution."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gasPrice"),": the price of the transaction gas (unit: Drip)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storageLimit"),": the maximum storage limit that can be paid for transaction execution."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chainId"),": the ID of the chain. It\u2019s used to distinguish transactions between different chains. Mainnet\u2019s is 1029, and testnet\u2019s is 1."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"epochHeight"),": it\u2019s used to specify the epoch range to execute the transaction (epochHeight, epochHeight + 10000). Transactions beyond this range will not be packaged."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data"),": transaction data, which can be remarks, creation ByteCode of a contract, or interaction data of a contract.")),(0,o.kt)("h2",{id:"how-to-get-the-correct-nonce"},"How to get the correct nonce?"),(0,o.kt)("p",null,"\\\nThrough the  ",(0,o.kt)("inlineCode",{parentName:"p"},"cfx_getNextNonce")," RPC, the next available nonce of an account can be obtained. The used nonce cannot be used again. The transaction will not be packaged if using a nonce with a value greater than the current nonce."),(0,o.kt)("h2",{id:"when-will-the-nonce-increase-by-1-will-the-nonce-increase-by-1-if-the-transaction-fails-why-has-the-nonce-not-changed-when-the-transaction-has-been-sent"},"When will the nonce increase by 1? Will the nonce increase by 1 if the transaction fails? Why has the nonce not changed when the transaction has been sent?"),(0,o.kt)("p",null,"The nonce increases once the transaction is executed, whether it succeeds or fails.\nAfter the transaction is sent, the nonce queried through ",(0,o.kt)("inlineCode",{parentName:"p"},"cfx_getNextNonce")," stays unchanged because the transaction has not been executed. At this time, the transaction may be in the transaction pool and has not been packed, or it may have just been packed and be in the ",(0,o.kt)("inlineCode",{parentName:"p"},"defer")," state, waiting to be executed."),(0,o.kt)("h2",{id:"how-to-calculate-the-gas-fee-actually-used-in-the-transaction"},"How to calculate the gas fee actually used in the transaction?"),(0,o.kt)("p",null,"On ConfluxScan, users can view gas usage, gas price, gas fee, and other relevant information of a transaction, which is obtained through ",(0,o.kt)("inlineCode",{parentName:"p"},"cfx_getTransactionReceipt"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"gasFee = gasCharged * gasPrice"),", but the gasCharged is not necessarily equal to gasUsed.\nThere is a rule in Conflux: ",(0,o.kt)("inlineCode",{parentName:"p"},"gas")," is used to set the upper limit of gas that can be used in a transaction. It must be greater than the actual gas used value (gasUsed).\nFor the excessive part, at most, only 1/4 will be refunded: if the excessive part is less than 1/4 of the gasLimit, all will be refunded, but if it is greater than 1/4, only 1/4 will be returned. Hence, try to give an accurate gas value when sending a transaction."),(0,o.kt)("h2",{id:"how-to-release-the-storage-deposit"},"How to release the storage deposit?"),(0,o.kt)("p",null,"When the storage is released, the deposit is automatically refunded. For example, if the balance of the ERC20 token changes from non-zero to 0, the deposit will be refunded. If a contract is destroyed, the deposit generated by the interaction between all addresses and the contract will be refunded as well."),(0,o.kt)("h2",{id:"why-has-the-balance-not-changed-after-interacting-with-a-contract-and-the-gas-fee-is-paid-for-this-transaction"},"Why has the balance not changed after interacting with a contract and the gas fee is paid for this transaction?"),(0,o.kt)("p",null,"The Conflux network has a sponsor mechanism. If a contract has a sponsor, the gas and storage fees for this contract\u2019s interactions will be paid by the sponsor."),(0,o.kt)("h2",{id:"if-you-want-to-send-transactions-in-batches-how-to-manage-nonce"},"If you want to send transactions in batches, how to manage nonce?"),(0,o.kt)("p",null,"When sending transactions in batches, you need to manually manage the nonce. Every time you send a transaction, the nonce is manually incremented by one.\nIn this case, for a failed transaction of which nonce is not used, you need to manually adjust the transaction parameters to resend it.\nTherefore, you need to keep all transaction hashes and monitor the status of the transactions when sending in batches. "),(0,o.kt)("h2",{id:"how-to-know-the-amount-of-gas-and-storage-used-by-a-transaction"},"How to know the amount of gas and storage used by a transaction?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," RPC can be used to estimate the amount of gas and storage that a transaction needs to use, but the estimation is not 100% accurate.\nHence, the returned gas can be adjusted manually, such as multiplying by ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3"),"."),(0,o.kt)("h2",{id:"how-do-i-know-that-a-transaction-has-been-successfully-executed"},"How do I know that a transaction has been successfully executed?"),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," field of the transaction or the ",(0,o.kt)("inlineCode",{parentName:"p"},"outcomeStatus")," field of the receipt to determine whether the transaction is successful, 0 means success and 1 means failure."),(0,o.kt)("h2",{id:"how-to-determine-whether-a-transaction-is-safe-and-confirmed"},"How to determine whether a transaction is safe and confirmed?"),(0,o.kt)("p",null,"If the epochNumber of the epoch that the transaction belongs to is less than the currently confirmed epochNumber, it is considered safe.\nYou can also get the confirmationRisk of the block that the transaction belongs to through the ",(0,o.kt)("inlineCode",{parentName:"p"},"cfx_getConfirmationRiskByHash")," RPC.\nIf the obtained value is less than 1e-8, it is considered safe."),(0,o.kt)("h2",{id:"what-is-a-receipt-and-what-information-does-it-contain"},"What is a receipt, and what information does it contain?"),(0,o.kt)("p",null,"A receipt is the receipt information of a transaction. Through a receipt, you can know some results of the transaction execution, such as whether the transaction is successful, whether a contract is created, gas fee usage, eventLog generated by a transaction execution, etc."),(0,o.kt)("h2",{id:"how-does-the-status-of-the-transaction-change"},"How does the status of the transaction change?"),(0,o.kt)("p",null,"After the transaction is submitted through RPC, it will go through several states: Waiting for packaging -> packaging -> execution -> confirmation."),(0,o.kt)("h2",{id:"why-does-a-transaction-fail"},"Why does a transaction fail?"),(0,o.kt)("p",null,"There are several reasons for a failure of a transaction:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Reuse an old nonce."),(0,o.kt)("li",{parentName:"ol"},"Used a new nonce, but there is a transaction with the same nonce in the transaction pool. ")),(0,o.kt)("h2",{id:"why-does-a-transaction-keep-on-waiting-to-be-packaged"},"Why does a transaction keep on waiting to be packaged?"),(0,o.kt)("p",null,"If a transaction has not been packaged for a long time, it\u2019s likely that either the nonce is set incorrectly or the balance is not sufficient."),(0,o.kt)("h2",{id:"why-would-a-transaction-execution-fail"},"Why would a transaction execution fail?"),(0,o.kt)("p",null,"Transaction execution failures are roughly divided into the following situations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vm reverted, Reason provided by the contract: \u2019xxxxx\u2019: the contract execution failed, and the contract returned detailed information"),(0,o.kt)("li",{parentName:"ul"},"VmError(ExceedStorageLimit): the specified storage limit is not enough"),(0,o.kt)("li",{parentName:"ul"},"NotEnoughCash {required: 22625000000010862646, got: 22062499999972687418, actual_gas_cost: 10862646, max_storage_limit_cost: 22625000000000000000}: insufficient balance"),(0,o.kt)("li",{parentName:"ul"},"VmError(OutOfGas): the specified gas fee is not enough"),(0,o.kt)("li",{parentName:"ul"},"VmError(BadInstruction {instruction: 238 }): contract deployment failed"),(0,o.kt)("li",{parentName:"ul"},"Vm reverted: the contract execution failed, but the contract did not return detailed information.")))}u.isMDXComponent=!0}}]);