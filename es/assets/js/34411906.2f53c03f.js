"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2846],{78602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=n(85893),r=n(11151);const a={sidebar_position:7,title:"ParamsControl",displayed_sidebar:"coreSidebar"},s=void 0,c={id:"core/core-space-basics/internal-contracts/params-control",title:"ParamsControl",description:"ParamsControl at address 0x0888000000000000000000000000000000000007 with the following interfaces. Which can be used to participate chain parameter DAO vote.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/core/core-space-basics/internal-contracts/params-control.md",sourceDirName:"core/core-space-basics/internal-contracts",slug:"/core/core-space-basics/internal-contracts/params-control",permalink:"/es/docs/core/core-space-basics/internal-contracts/params-control",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"ParamsControl",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"CrossSpaceCall",permalink:"/es/docs/core/core-space-basics/internal-contracts/crossSpaceCall"},next:{title:"Tutorials",permalink:"/es/docs/category/tutorials"}},i={},d=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ParamsControl"})," at address ",(0,o.jsx)(t.code,{children:"0x0888000000000000000000000000000000000007"})," with the following interfaces. Which can be used to participate chain parameter DAO vote."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"// SPDX-License-Identifier: MIT\n\npragma solidity >=0.8.0;\n\ninterface ParamsControl {\n    struct Vote {\n        uint16 topic_index;\n        uint256[3] votes;\n    }\n\n    /*** Query Functions ***/\n    /**\n     * @dev cast vote for parameters\n     * @param vote_round The round to vote for\n     * @param vote_data The list of votes to cast\n     */\n    function castVote(uint64 vote_round, Vote[] calldata vote_data) external;\n\n    /**\n     * @dev read the vote data of an account\n     * @param addr The address of the account to read\n     */\n    function readVote(address addr) external view returns (Vote[] memory);\n\n    /**\n     * @dev Current vote round\n     */\n    function currentRound() external view returns (uint64);\n\n    /**\n     * @dev read the total votes of given round\n     * @param vote_round The vote number\n     */\n    function totalVotes(uint64 vote_round) external view returns (Vote[] memory);\n\n    /**\n     * @dev read the PoS stake for the round.\n     */\n    function posStakeForVotes(uint64) external view returns (uint256);\n\n    event CastVote(uint64 indexed vote_round, address indexed addr, uint16 indexed topic_index, uint256[3] votes);\n    event RevokeVote(uint64 indexed vote_round, address indexed addr, uint16 indexed topic_index, uint256[3] votes);\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var o=n(67294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);