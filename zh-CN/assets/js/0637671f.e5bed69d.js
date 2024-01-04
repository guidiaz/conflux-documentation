"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return n?a.createElement(f,i(i({ref:t},h),{},{components:n})):a.createElement(f,i({ref:t},h))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"\u793e\u533a\u5e38\u89c1\u95ee\u9898",sidebar_position:2,displayed_sidebar:"generalSidebar"},i="\u793e\u533a\u5e38\u89c1\u95ee\u9898",s={unversionedId:"general/faq/community-faqs",id:"general/faq/community-faqs",title:"\u793e\u533a\u5e38\u89c1\u95ee\u9898",description:"Do we need to pay attention to the storageLimit and epochHeight fields in regular transactions?",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/faq/community-faqs.md",sourceDirName:"general/faq",slug:"/general/faq/community-faqs",permalink:"/zh-CN/docs/general/faq/community-faqs",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u793e\u533a\u5e38\u89c1\u95ee\u9898",sidebar_position:2,displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"FAQs Index",permalink:"/zh-CN/docs/general/faq/faq-index"},next:{title:"Core \u7a7a\u95f4\u4ea4\u6613\u5e38\u89c1\u95ee\u9898",permalink:"/zh-CN/docs/general/faq/core-space-transactions/core-transaction-faqs"}},l={},c=[{value:"<strong>Do we need to pay attention to the <code>storageLimit</code> and <code>epochHeight</code> fields in regular transactions?</strong>",id:"do-we-need-to-pay-attention-to-the-storagelimit-and-epochheight-fields-in-regular-transactions",level:3},{value:"<strong>I want to send multiple transactions at once, but there&#39;s no method to set nonce. How can I solve this?</strong>",id:"i-want-to-send-multiple-transactions-at-once-but-theres-no-method-to-set-nonce-how-can-i-solve-this",level:3},{value:"<strong>What does the error &quot;ExceedStorageLimit&quot; mean when sending a transaction?</strong>",id:"what-does-the-error-exceedstoragelimit-mean-when-sending-a-transaction",level:3},{value:"<strong>How do I convert a private key into keystore format?</strong>",id:"how-do-i-convert-a-private-key-into-keystore-format",level:3},{value:"<strong>Why do nodes need to re-sync data after changing configurations?</strong>",id:"why-do-nodes-need-to-re-sync-data-after-changing-configurations",level:3},{value:"<strong>Can the sponsor payment function be tested normally on the test chain?</strong>",id:"can-the-sponsor-payment-function-be-tested-normally-on-the-test-chain",level:3},{value:"<strong>Is CFX an ERC777 contract?</strong>",id:"is-cfx-an-erc777-contract",level:3},{value:"<strong>Does Conflux support the Ethereum library OpenZeppelin?</strong>",id:"does-conflux-support-the-ethereum-library-openzeppelin",level:3},{value:"<strong>Where is the testnet faucet?</strong>",id:"where-is-the-testnet-faucet",level:3},{value:"<strong>Why does the value sometimes appear smaller when I use <code>latest_confirmed</code> to get the epoch?</strong>",id:"why-does-the-value-sometimes-appear-smaller-when-i-use-latest_confirmed-to-get-the-epoch",level:3},{value:"<strong>What settings do developers need to make when starting a node?</strong>",id:"what-settings-do-developers-need-to-make-when-starting-a-node",level:3},{value:"<strong>Does CFX have an API to query computing power?</strong>",id:"does-cfx-have-an-api-to-query-computing-power",level:3},{value:"<strong>What is a pivot chain switch?</strong>",id:"what-is-a-pivot-chain-switch",level:3},{value:"<strong>How to determine if a pivot chain switch has occurred?</strong>",id:"how-to-determine-if-a-pivot-chain-switch-has-occurred",level:3},{value:"What is storage collateral, and how is it calculated? For example, how many drips are required for 1kb storage?",id:"what-is-storage-collateral-and-how-is-it-calculated-for-example-how-many-drips-are-required-for-1kb-storage",level:3},{value:"What fees are included in the GasFee returned by cfx_getTransactionReceipt? Does it include storage collateral fees?",id:"what-fees-are-included-in-the-gasfee-returned-by-cfx_gettransactionreceipt-does-it-include-storage-collateral-fees",level:3},{value:"In a block, if a transaction has both blockHash and status as null, does it mean it has been processed in another block?",id:"in-a-block-if-a-transaction-has-both-blockhash-and-status-as-null-does-it-mean-it-has-been-processed-in-another-block",level:3},{value:"Can an epoch have no blocks?",id:"can-an-epoch-have-no-blocks",level:3},{value:"How does js-conflux-sdk decode function data?",id:"how-does-js-conflux-sdk-decode-function-data",level:3},{value:"Can an already deployed contract be replaced? Without creating a new contract?",id:"can-an-already-deployed-contract-be-replaced-without-creating-a-new-contract",level:3},{value:"Is there any SDKs for Android?",id:"is-there-any-sdks-for-android",level:3},{value:"What versions of the conflux sdk are available?",id:"what-versions-of-the-conflux-sdk-are-available",level:3},{value:"Is the nonce in a block the same as the nonce in a transaction?",id:"is-the-nonce-in-a-block-the-same-as-the-nonce-in-a-transaction",level:3},{value:"What are the chainIds for the mainnet and testnet? How to query?",id:"what-are-the-chainids-for-the-mainnet-and-testnet-how-to-query",level:3},{value:"How to view the bootnode data of the node I&#39;m running?",id:"how-to-view-the-bootnode-data-of-the-node-im-running",level:3},{value:"What are the reasons for a transaction not being packaged?",id:"what-are-the-reasons-for-a-transaction-not-being-packaged",level:3},{value:"How to view the actual fee deducted for each transaction?",id:"how-to-view-the-actual-fee-deducted-for-each-transaction",level:3},{value:"Is the epochHeight in Transaction the same as the epochNumber in TransactionReceipt?",id:"is-the-epochheight-in-transaction-the-same-as-the-epochnumber-in-transactionreceipt",level:3},{value:"How to determine if a block was mined by a specific miner? Is the first transaction in a Conflux block also a coinbase transaction, like in Bitcoin?",id:"how-to-determine-if-a-block-was-mined-by-a-specific-miner-is-the-first-transaction-in-a-conflux-block-also-a-coinbase-transaction-like-in-bitcoin",level:3},{value:"<strong>What is the transaction <code>0x2952a64d3afa6d39310c4928860abcd6bc097342dcc1b271b52f7809fd63f228</code> on the mainnet showing as contract creation, but the returned field <code>contractCreated</code> is null? How do you get the address of this contract at this time?</strong>",id:"what-is-the-transaction-0x2952a64d3afa6d39310c4928860abcd6bc097342dcc1b271b52f7809fd63f228-on-the-mainnet-showing-as-contract-creation-but-the-returned-field-contractcreated-is-null-how-do-you-get-the-address-of-this-contract-at-this-time",level:3},{value:"<strong>What&#39;s the difference between a full node and an archive node?</strong>",id:"whats-the-difference-between-a-full-node-and-an-archive-node",level:3},{value:"<strong>How to check the reason for transaction failure?</strong>",id:"how-to-check-the-reason-for-transaction-failure",level:3},{value:"<strong>What are the situations for tx revert?</strong>",id:"what-are-the-situations-for-tx-revert",level:3},{value:"<strong>What does this error mean? <code>Failed imported to deferred pool: Tx with same nonce already inserted. To replace it, you need to specify a gas price &gt; 20000000000</code></strong>",id:"what-does-this-error-mean-failed-imported-to-deferred-pool-tx-with-same-nonce-already-inserted-to-replace-it-you-need-to-specify-a-gas-price--20000000000",level:3},{value:"<strong>Is there a method in js-conflux-sdk to parse the data in tx?</strong>",id:"is-there-a-method-in-js-conflux-sdk-to-parse-the-data-in-tx",level:3},{value:"<strong>Can the logger of the Conflux class in js-conflux-sdk use something other than console?</strong>",id:"can-the-logger-of-the-conflux-class-in-js-conflux-sdk-use-something-other-than-console",level:3},{value:"<strong>If you use a sponsorship contract, does it mean that all users operate the contract, regardless of which method of the contract is called, are they all paid according to a unified standard?</strong>",id:"if-you-use-a-sponsorship-contract-does-it-mean-that-all-users-operate-the-contract-regardless-of-which-method-of-the-contract-is-called-are-they-all-paid-according-to-a-unified-standard",level:3},{value:"<strong>Is there any information on the conflux sponsorship mode?</strong>",id:"is-there-any-information-on-the-conflux-sponsorship-mode",level:3},{value:"<strong>Are ERC20/ERC777 still called this way in the Conflux network?</strong>",id:"are-erc20erc777-still-called-this-way-in-the-conflux-network",level:3},{value:"<strong>What are the websocket service ports of the official nodes of the mainnet and testnet?</strong>",id:"what-are-the-websocket-service-ports-of-the-official-nodes-of-the-mainnet-and-testnet",level:3},{value:"<strong>When <code>docker pull confluxchain/conflux-rust</code> prompts &quot;no such file&quot;, how to solve it?</strong>",id:"when-docker-pull-confluxchainconflux-rust-prompts-no-such-file-how-to-solve-it",level:3},{value:"<strong>What is block height?</strong>",id:"what-is-block-height",level:3},{value:"<strong>What is transaction signing?</strong>",id:"what-is-transaction-signing",level:3},{value:"<strong>What are the measurement units in the conflux system and their conversion relationships?</strong>",id:"what-are-the-measurement-units-in-the-conflux-system-and-their-conversion-relationships",level:3},{value:"<strong>What does the error <code>estimateGasAndColletral</code> mean? &quot;Cannot estimate: transaction execution failed, all gas will be charged (execution error: VmError(BadInstruction { instruction: 169 }))&quot;</strong>",id:"what-does-the-error-estimategasandcolletral-mean-cannot-estimate-transaction-execution-failed-all-gas-will-be-charged-execution-error-vmerrorbadinstruction--instruction-169-",level:3},{value:"<strong>How do developers start a node?</strong>",id:"how-do-developers-start-a-node",level:3},{value:"<strong>What is the Transactions Lifecycle?</strong>",id:"what-is-the-transactions-lifecycle",level:3}],h={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u793e\u533a\u5e38\u89c1\u95ee\u9898"},"\u793e\u533a\u5e38\u89c1\u95ee\u9898"),(0,o.kt)("h3",{id:"do-we-need-to-pay-attention-to-the-storagelimit-and-epochheight-fields-in-regular-transactions"},(0,o.kt)("strong",{parentName:"h3"},"Do we need to pay attention to the ",(0,o.kt)("inlineCode",{parentName:"strong"},"storageLimit")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"epochHeight")," fields in regular transactions?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When calling a contract, the SDK will automatically set ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"storageLimit"))," based on ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"cfx_estmastGasAndCollateral"))," and ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"epochHeight"))," based on ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"cfx_getEpochNumber")),"."),(0,o.kt)("li",{parentName:"ul"},"When transferring CFX, ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"storageLimit"))," is automatically set to 0, and ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"epochHeight"))," is set to the current epoch number.")),(0,o.kt)("h3",{id:"i-want-to-send-multiple-transactions-at-once-but-theres-no-method-to-set-nonce-how-can-i-solve-this"},(0,o.kt)("strong",{parentName:"h3"},"I want to send multiple transactions at once, but there's no method to set nonce. How can I solve this?")),(0,o.kt)("p",null,"You need to maintain the nonce yourself, adding one for each transaction."),(0,o.kt)("h3",{id:"what-does-the-error-exceedstoragelimit-mean-when-sending-a-transaction"},(0,o.kt)("strong",{parentName:"h3"},'What does the error "ExceedStorageLimit" mean when sending a transaction?')),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"storagelimit"))," value is set lower than the actual required value."),(0,o.kt)("h3",{id:"how-do-i-convert-a-private-key-into-keystore-format"},(0,o.kt)("strong",{parentName:"h3"},"How do I convert a private key into keystore format?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"go-conflux-sdk")),", use ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"AccountManager.ImportKey"))," to import a private key into a keystore file."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"js-conflux-sdk")),", use ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"sign.encrypt"))," to generate a keystore object based on the private key.")),(0,o.kt)("h3",{id:"why-do-nodes-need-to-re-sync-data-after-changing-configurations"},(0,o.kt)("strong",{parentName:"h3"},"Why do nodes need to re-sync data after changing configurations?")),(0,o.kt)("p",null,"Restarting the node program doesn't start syncing data from scratch. Instead, it restores data from the database and starts syncing from the last checkpoint. This is because the data of the last checkpoint is stored in memory, and when the program is closed, the data in memory is lost, making it seem like data is being re-synced."),(0,o.kt)("h3",{id:"can-the-sponsor-payment-function-be-tested-normally-on-the-test-chain"},(0,o.kt)("strong",{parentName:"h3"},"Can the sponsor payment function be tested normally on the test chain?")),(0,o.kt)("p",null,"Yes, it can."),(0,o.kt)("h3",{id:"is-cfx-an-erc777-contract"},(0,o.kt)("strong",{parentName:"h3"},"Is CFX an ERC777 contract?")),(0,o.kt)("p",null,"No, CFX is not a contract token. CFX is equivalent to Ethereum's ETH."),(0,o.kt)("h3",{id:"does-conflux-support-the-ethereum-library-openzeppelin"},(0,o.kt)("strong",{parentName:"h3"},"Does Conflux support the Ethereum library OpenZeppelin?")),(0,o.kt)("p",null,"Yes, it's supported. You can directly reference it. However, note that the ERC1820 contract address on the Conflux chain is different from Ethereum. On Conflux, the ERC1820 contract address is: 0x88887ed889e776bcbe2f0f9932ecfabcdfcd1820."),(0,o.kt)("h3",{id:"where-is-the-testnet-faucet"},(0,o.kt)("strong",{parentName:"h3"},"Where is the testnet faucet?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To receive CFX test tokens, you can get them directly from the faucet portals.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Core Space Testnet Faucet: ",(0,o.kt)("a",{parentName:"li",href:"https://faucet.confluxnetwork.org/"},"https://faucet.confluxnetwork.org/")),(0,o.kt)("li",{parentName:"ul"},"eSpace Testnet Faucet: ",(0,o.kt)("a",{parentName:"li",href:"https://efaucet.confluxnetwork.org/"},"https://efaucet.confluxnetwork.org/")),(0,o.kt)("li",{parentName:"ul"},"Mainnet Faucets: ",(0,o.kt)("a",{parentName:"li",href:"https://conflux-faucets.com/"},"https://conflux-faucets.com/"))))),(0,o.kt)("h3",{id:"why-does-the-value-sometimes-appear-smaller-when-i-use-latest_confirmed-to-get-the-epoch"},(0,o.kt)("strong",{parentName:"h3"},"Why does the value sometimes appear smaller when I use ",(0,o.kt)("inlineCode",{parentName:"strong"},"latest_confirmed")," to get the epoch?")),(0,o.kt)("p",null,"This can happen in cases of poor network connectivity, primarily due to high block synchronization delays."),(0,o.kt)("h3",{id:"what-settings-do-developers-need-to-make-when-starting-a-node"},(0,o.kt)("strong",{parentName:"h3"},"What settings do developers need to make when starting a node?")),(0,o.kt)("p",null,"You can find all node related documentation on ",(0,o.kt)("a",{parentName:"p",href:"../run-a-node/"},"THIS")," section."),(0,o.kt)("h3",{id:"does-cfx-have-an-api-to-query-computing-power"},(0,o.kt)("strong",{parentName:"h3"},"Does CFX have an API to query computing power?")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.confluxscan.io/v1/plot?interval=514&limit=10"},"https://www.confluxscan.io/v1/plot?interval=514&limit=10")),(0,o.kt)("h3",{id:"what-is-a-pivot-chain-switch"},(0,o.kt)("strong",{parentName:"h3"},"What is a pivot chain switch?")),(0,o.kt)("p",null,"A pivot chain refers to a chain formed by connecting pivot blocks based on block hashes. When a non-pivot block B in a certain epoch has a subtree heavier than the previous pivot block A, B becomes the pivot block for that epoch. This is a pivot chain switch."),(0,o.kt)("h3",{id:"how-to-determine-if-a-pivot-chain-switch-has-occurred"},(0,o.kt)("strong",{parentName:"h3"},"How to determine if a pivot chain switch has occurred?")),(0,o.kt)("p",null,"When the old pivot chain switches to the new pivot chain, the latest mined epoch number will be a value not greater than the last obtained latest mined epoch number."),(0,o.kt)("p",null,"As shown below, the latest epoch at the previous moment was 10, and the latest epoch at this moment is 9, indicating that the pivot block for epoch 9 has changed from 9A to 9B, and a pivot chain switch has occurred."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"cssCopy code\n[1]\xb7\xb7\xb7[8]---[9A]---[10A] old pivot chain\n        \\\n          \\\n            [9B] new pivot chain\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How can developers monitor?")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start a full node (archive node) and enable the websocket RPC service."),(0,o.kt)("li",{parentName:"ol"},"Subscribe to the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"latest mined epoch"))," event using ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"rpc_subscribeEpoch")),"."),(0,o.kt)("li",{parentName:"ol"},"Wait for the latest mined epoch B and compare it with the previously obtained latest mined epoch A."),(0,o.kt)("li",{parentName:"ol"},"If B <= A, a pivot chain switch has occurred."),(0,o.kt)("li",{parentName:"ol"},"Go to step 3.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How can developers synchronize block and transaction status?")),(0,o.kt)("p",null,"If local data needs to be kept up-to-date and accurate for blocks and transactions, then when a pivot chain switch occurs (assuming the latest mined epoch number changes from A to B, and B <= A):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assume the latest state epoch number obtained when the latest mined epoch number was A is A'."),(0,o.kt)("li",{parentName:"ul"},"Assume the latest state epoch number obtained when the latest mined epoch number was B is B'.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If B > A', update (A', B'] (i.e., this situation will not affect the executed blocks and transactions, process normally).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"\n-----A'------A\n--------B'-B\n\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If B <= A', delete the data between ","[B, A']",".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"\n-----A'------A\n----B\n\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update ","[B', B]","."),(0,o.kt)("li",{parentName:"ol"},"Go to step 1.")),(0,o.kt)("p",null,"I hope this translation helps you understand the content better! If you have any further questions or need clarification on any points, please let me know."),(0,o.kt)("h3",{id:"what-is-storage-collateral-and-how-is-it-calculated-for-example-how-many-drips-are-required-for-1kb-storage"},"What is storage collateral, and how is it calculated? For example, how many drips are required for 1kb storage?"),(0,o.kt)("p",null,"Storage collateral refers to the need to collateralize a corresponding amount of cfx when adding new storage usage in a contract. For each storage entry, the last account that writes to this entry is called the owner of this storage entry. The storage collateral fee will be returned to the owner after the storage is released. Every 1kb of storage requires a collateral of 1cfx."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"../../core/core-space-basics/storage"},"THIS")," section.")),(0,o.kt)("h3",{id:"what-fees-are-included-in-the-gasfee-returned-by-cfx_gettransactionreceipt-does-it-include-storage-collateral-fees"},"What fees are included in the GasFee returned by cfx_getTransactionReceipt? Does it include storage collateral fees?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gasfee does not include storage fees. Gasfee = gasUsed * gasPrice, and the gasfee is spent after the transaction is executed."),(0,o.kt)("li",{parentName:"ul"},"storageCollateralized represents the actual storage collateral fee used. The storage collateral fee will be returned when the storage is released.")),(0,o.kt)("h3",{id:"in-a-block-if-a-transaction-has-both-blockhash-and-status-as-null-does-it-mean-it-has-been-processed-in-another-block"},"In a block, if a transaction has both blockHash and status as null, does it mean it has been processed in another block?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generally, yes. This is because the tx was not executed in this block. If a tx is packaged repeatedly, the tx will be executed in the block of the earliest epoch."),(0,o.kt)("li",{parentName:"ul"},"Another situation is that the block containing the transaction has been packaged but not yet executed. Every block is executed 5 seconds after being packaged.")),(0,o.kt)("h3",{id:"can-an-epoch-have-no-blocks"},"Can an epoch have no blocks?"),(0,o.kt)("p",null,"No, there will be at least one."),(0,o.kt)("h3",{id:"how-does-js-conflux-sdk-decode-function-data"},"How does js-conflux-sdk decode function data?"),(0,o.kt)("p",null,"Refer to the API documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/js-conflux-sdk/blob/master/docs/api.md"},"link")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"transaction = await conflux.getTransactionByHash('0x2055f3287f1a6ce77d91f5dfdf7517a531b3a560fee1265f27dc1ff92314530b');\ncontract.abi.decodeData(transaction.data)\n\n")),(0,o.kt)("h3",{id:"can-an-already-deployed-contract-be-replaced-without-creating-a-new-contract"},"Can an already deployed contract be replaced? Without creating a new contract?"),(0,o.kt)("p",null,"Contracts cannot be replaced or upgraded; you can only deploy a new one."),(0,o.kt)("h3",{id:"is-there-any-sdks-for-android"},"Is there any SDKs for Android?"),(0,o.kt)("p",null,"Android can use java-conflux-sdk."),(0,o.kt)("h3",{id:"what-versions-of-the-conflux-sdk-are-available"},"What versions of the conflux sdk are available?"),(0,o.kt)("p",null,"You can find all the Conflux SDKs in ",(0,o.kt)("a",{parentName:"p",href:"../../core/build/sdks-and-tools/sdks"},"THIS")," section"),(0,o.kt)("h3",{id:"is-the-nonce-in-a-block-the-same-as-the-nonce-in-a-transaction"},"Is the nonce in a block the same as the nonce in a transaction?"),(0,o.kt)("p",null,"The nonce of a transaction indicates the number of transactions from a specific address, while the nonce of a block refers to the random number used in PoW calculations."),(0,o.kt)("h3",{id:"what-are-the-chainids-for-the-mainnet-and-testnet-how-to-query"},"What are the chainIds for the mainnet and testnet? How to query?"),(0,o.kt)("p",null,'The mainnet is 1029, and the testnet is 1. You can obtain them using the rpc "cfx_getStatus" or the SDK\'s getStatus method.'),(0,o.kt)("h3",{id:"how-to-view-the-bootnode-data-of-the-node-im-running"},"How to view the bootnode data of the node I'm running?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If it's a testnet or mainnet node, the bootnode list is the bootnodes configuration in the toml configuration file."),(0,o.kt)("li",{parentName:"ul"},"For a local node, it itself is the bootnode (or it doesn't have a bootnode).")),(0,o.kt)("h3",{id:"what-are-the-reasons-for-a-transaction-not-being-packaged"},"What are the reasons for a transaction not being packaged?"),(0,o.kt)("p",null,"The following conditions can lead to a transaction not being packaged:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The balance must satisfy: balance >= value + gas * gasprice + storagelimit/1024"),(0,o.kt)("li",{parentName:"ol"},"The nonce must be consecutive. Only when a transaction with a lower nonce is packaged will a transaction with a higher nonce be packaged.")),(0,o.kt)("h3",{id:"how-to-view-the-actual-fee-deducted-for-each-transaction"},"How to view the actual fee deducted for each transaction?"),(0,o.kt)("p",null,"Check the gasFee in the transaction receipt."),(0,o.kt)("h3",{id:"is-the-epochheight-in-transaction-the-same-as-the-epochnumber-in-transactionreceipt"},"Is the epochHeight in Transaction the same as the epochNumber in TransactionReceipt?"),(0,o.kt)("p",null,"The epochHeight in a Transaction is used to specify the epoch range for tx execution as (epochHeight, epochHeight + 10000). The epochNumber in TransactionReceipt indicates the epoch number at which the transaction was executed."),(0,o.kt)("h3",{id:"how-to-determine-if-a-block-was-mined-by-a-specific-miner-is-the-first-transaction-in-a-conflux-block-also-a-coinbase-transaction-like-in-bitcoin"},"How to determine if a block was mined by a specific miner? Is the first transaction in a Conflux block also a coinbase transaction, like in Bitcoin?"),(0,o.kt)("p",null,"Conflux doesn't have a coinbase transaction. You can determine the miner using block.miner."),(0,o.kt)("h3",{id:"what-is-the-transaction-0x2952a64d3afa6d39310c4928860abcd6bc097342dcc1b271b52f7809fd63f228-on-the-mainnet-showing-as-contract-creation-but-the-returned-field-contractcreated-is-null-how-do-you-get-the-address-of-this-contract-at-this-time"},(0,o.kt)("strong",{parentName:"h3"},"What is the transaction ",(0,o.kt)("inlineCode",{parentName:"strong"},"0x2952a64d3afa6d39310c4928860abcd6bc097342dcc1b271b52f7809fd63f228")," on the mainnet showing as contract creation, but the returned field ",(0,o.kt)("inlineCode",{parentName:"strong"},"contractCreated")," is null? How do you get the address of this contract at this time?")),(0,o.kt)("p",null,"This is a transaction from the genesis block. The transaction here is quite special. In the future, as long as it is a contract creation, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"contractCreated"))," will have the contract's address."),(0,o.kt)("h3",{id:"whats-the-difference-between-a-full-node-and-an-archive-node"},(0,o.kt)("strong",{parentName:"h3"},"What's the difference between a full node and an archive node?")),(0,o.kt)("p",null,"A full node only saves all block headers and transactions from the most recent era. An archive node will save all block headers and transactions."),(0,o.kt)("h3",{id:"how-to-check-the-reason-for-transaction-failure"},(0,o.kt)("strong",{parentName:"h3"},"How to check the reason for transaction failure?")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"txExecErrorMsg"))," in the transaction receipt provides the error information for the transaction."),(0,o.kt)("h3",{id:"what-are-the-situations-for-tx-revert"},(0,o.kt)("strong",{parentName:"h3"},"What are the situations for tx revert?")),(0,o.kt)("p",null,"Tx revert means the contract execution failed. Contract developers should use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"require"))," with an error message where an exception might occur. This way, the contract execution error will be seen in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"txExecErrorMsg"))," of the transaction receipt."),(0,o.kt)("h3",{id:"what-does-this-error-mean-failed-imported-to-deferred-pool-tx-with-same-nonce-already-inserted-to-replace-it-you-need-to-specify-a-gas-price--20000000000"},(0,o.kt)("strong",{parentName:"h3"},"What does this error mean? ",(0,o.kt)("inlineCode",{parentName:"strong"},"Failed imported to deferred pool: Tx with same nonce already inserted. To replace it, you need to specify a gas price > 20000000000"))),(0,o.kt)("p",null,"There is already a transaction with the same nonce. Either wait for it to be packaged or send a new one with the same nonce, but you need to raise the gasPrice."),(0,o.kt)("h3",{id:"is-there-a-method-in-js-conflux-sdk-to-parse-the-data-in-tx"},(0,o.kt)("strong",{parentName:"h3"},"Is there a method in js-conflux-sdk to parse the data in tx?")),(0,o.kt)("p",null,"First, initialize the contract using abi, then use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"contract.abi.decodeData()")),"."),(0,o.kt)("h3",{id:"can-the-logger-of-the-conflux-class-in-js-conflux-sdk-use-something-other-than-console"},(0,o.kt)("strong",{parentName:"h3"},"Can the logger of the Conflux class in js-conflux-sdk use something other than console?")),(0,o.kt)("p",null,"Any object that has implemented the methods error, info, and log can be used."),(0,o.kt)("h3",{id:"if-you-use-a-sponsorship-contract-does-it-mean-that-all-users-operate-the-contract-regardless-of-which-method-of-the-contract-is-called-are-they-all-paid-according-to-a-unified-standard"},(0,o.kt)("strong",{parentName:"h3"},"If you use a sponsorship contract, does it mean that all users operate the contract, regardless of which method of the contract is called, are they all paid according to a unified standard?")),(0,o.kt)("p",null,"Yes."),(0,o.kt)("h3",{id:"is-there-any-information-on-the-conflux-sponsorship-mode"},(0,o.kt)("strong",{parentName:"h3"},"Is there any information on the conflux sponsorship mode?")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../core/core-space-basics/sponsor-mechanism"},"Here's the link"),"."),(0,o.kt)("h3",{id:"are-erc20erc777-still-called-this-way-in-the-conflux-network"},(0,o.kt)("strong",{parentName:"h3"},"Are ERC20/ERC777 still called this way in the Conflux network?")),(0,o.kt)("p",null,"Both can be used. They are still referred to as ERC20/ERC777, but in some contexts you can find them reffered as CRC20/CRC777."),(0,o.kt)("h3",{id:"what-are-the-websocket-service-ports-of-the-official-nodes-of-the-mainnet-and-testnet"},(0,o.kt)("strong",{parentName:"h3"},"What are the websocket service ports of the official nodes of the mainnet and testnet?")),(0,o.kt)("p",null,"You can find all the Network Endpoints in the following pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../core/conflux_rpcs"},"Core Space Network Endpoints")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/network-endpoints"},"eSpace Network Endpoints"))),(0,o.kt)("h3",{id:"when-docker-pull-confluxchainconflux-rust-prompts-no-such-file-how-to-solve-it"},(0,o.kt)("strong",{parentName:"h3"},"When ",(0,o.kt)("inlineCode",{parentName:"strong"},"docker pull confluxchain/conflux-rust"),' prompts "no such file", how to solve it?')),(0,o.kt)("p",null,"It might be a network issue. You can try setting a registry for docker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "registry-mirrors": [\n    "https://at8ak49f.mirror.aliyuncs.com"\n  ],\n  "experimental": false,\n  "debug": true}\n\n')),(0,o.kt)("h3",{id:"what-is-block-height"},(0,o.kt)("strong",{parentName:"h3"},"What is block height?")),(0,o.kt)("p",null,"A blockchain is a block followed by another block, continuously growing. Block height refers to the distance from this block to the genesis block."),(0,o.kt)("h3",{id:"what-is-transaction-signing"},(0,o.kt)("strong",{parentName:"h3"},"What is transaction signing?")),(0,o.kt)("p",null,"Transaction signing refers to a signature obtained from a transaction through a signing algorithm using a private key. The verifier can obtain the address corresponding to the private key through this signature and transaction information, thereby proving that the transaction was indeed initiated by this account address."),(0,o.kt)("h3",{id:"what-are-the-measurement-units-in-the-conflux-system-and-their-conversion-relationships"},(0,o.kt)("strong",{parentName:"h3"},"What are the measurement units in the conflux system and their conversion relationships?")),(0,o.kt)("p",null,"The smallest unit in conflux is drip."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1cfx = 10^18 drip"),(0,o.kt)("li",{parentName:"ul"},"1gdrip = 10^9 drip")),(0,o.kt)("h3",{id:"what-does-the-error-estimategasandcolletral-mean-cannot-estimate-transaction-execution-failed-all-gas-will-be-charged-execution-error-vmerrorbadinstruction--instruction-169-"},(0,o.kt)("strong",{parentName:"h3"},"What does the error ",(0,o.kt)("inlineCode",{parentName:"strong"},"estimateGasAndColletral"),' mean? "Cannot estimate: transaction execution failed, all gas will be charged (execution error: VmError(BadInstruction { instruction: 169 }))"')),(0,o.kt)("p",null,"Reason: The constructor was invalid when deploying the contract; it is usually caused by forgetting to write the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"to"))," address when calling the contract."),(0,o.kt)("h3",{id:"how-do-developers-start-a-node"},(0,o.kt)("strong",{parentName:"h3"},"How do developers start a node?")),(0,o.kt)("p",null,"You can find all node related documentation on ",(0,o.kt)("a",{parentName:"p",href:"../run-a-node/"},"THIS")," section."),(0,o.kt)("h3",{id:"what-is-the-transactions-lifecycle"},(0,o.kt)("strong",{parentName:"h3"},"What is the Transactions Lifecycle?")),(0,o.kt)("p",null,"You can find allthe details on the Transaction Lifecycle in ",(0,o.kt)("a",{parentName:"p",href:"../../general/conflux-basics/transactions/#transaction-lifecycle"},"THIS")," section."))}u.isMDXComponent=!0}}]);