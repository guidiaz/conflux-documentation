"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1073],{4099:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=o(85893),t=o(11151);const l={sidebar_position:1,title:"Running a Node",description:"Quick guide for running a Conflux node.",toc_max_heading_level:4,displayed_sidebar:"generalSidebar"},s=void 0,a={id:"general/run-a-node/run-a-node",title:"Running a Node",description:"Quick guide for running a Conflux node.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/run-a-node/run-a-node.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/",permalink:"/es/docs/general/run-a-node/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Running a Node",description:"Quick guide for running a Conflux node.",toc_max_heading_level:4,displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Overview",permalink:"/es/docs/general/run-a-node/Overview"},next:{title:"Node Types",permalink:"/es/docs/general/run-a-node/node-types"}},r={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Steps",id:"steps",level:2},{value:"Step 1: Get the Conflux Client",id:"step-1-get-the-conflux-client",level:3},{value:"Option 1: Downloading the Conflux Client",id:"option-1-downloading-the-conflux-client",level:4},{value:"Option 2: Compiling the Conflux Client",id:"option-2-compiling-the-conflux-client",level:4},{value:"Step 2: Using Snapshot Tool (Optional)",id:"step-2-using-snapshot-tool-optional",level:3},{value:"Usage Example: (Linux &amp; Mac - Mainnet - full node)",id:"usage-example-linux--mac---mainnet---full-node",level:4},{value:"Step 3: Configure the Node",id:"step-3-configure-the-node",level:3},{value:"Step 4: Running the Node",id:"step-4-running-the-node",level:3},{value:"Step 5: Interacting with the Node",id:"step-5-interacting-with-the-node",level:3},{value:"Step 6: Keeping Your Node Updated",id:"step-6-keeping-your-node-updated",level:3},{value:"FAQs",id:"faqs",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Conflux Network is a scalable blockchain platform that aims to achieve high throughput and security. Running a Conflux node allows you to participate in the network, validate transactions, and interact with the Conflux blockchain."}),"\n",(0,i.jsx)(n.p,{children:"Running a Conflux node is a valuable way to participate in the Conflux network and contribute to its decentralization. Here's a step-by-step guide to setting up and running a Conflux node."}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.p,{children:["The hardware requirements depend on the type of node you want to run. For the specific requirements of each type of node, please visit the section ",(0,i.jsx)(n.a,{href:"./node-types",children:"Node Types"})]}),"\n",(0,i.jsx)(n.p,{children:"For a Full Node, requirements are the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"At least 16GB of RAM(32GB is recommended), 4 CPU cores."}),"\n",(0,i.jsx)(n.li,{children:"A minimum of 1.5TB free disk space (SSD is recommended)."}),"\n",(0,i.jsx)(n.li,{children:"A stable internet connection."}),"\n",(0,i.jsxs)(n.li,{children:["While the Linux XFS file system offers performance benefits, it is not as stable; therefore, ",(0,i.jsx)(n.strong,{children:"ext4 is recommended"})," for its reliability and stability."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-get-the-conflux-client",children:"Step 1: Get the Conflux Client"}),"\n",(0,i.jsx)(n.p,{children:"There are two options, downloading a pre-built Conflux Client, or compiling the Conflux Client from source."}),"\n",(0,i.jsx)(n.h4,{id:"option-1-downloading-the-conflux-client",children:"Option 1: Downloading the Conflux Client"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust/releases",children:"release"})," page on the conflux-rust GitHub repository providers pre-built binaries that you can download and run directly. For more detailed instructions, please visit ",(0,i.jsx)(n.a,{href:"/es/docs/general/run-a-node/advanced-topics/downloading-conflux-client",children:"this"})," page."]}),"\n",(0,i.jsx)(n.h4,{id:"option-2-compiling-the-conflux-client",children:"Option 2: Compiling the Conflux Client"}),"\n",(0,i.jsxs)(n.p,{children:["Compiling the Conflux Client is another option, before compiling the Conflux node software, you'll need to install ",(0,i.jsx)(n.code,{children:"openssl"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"On Linux (Ubuntu)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo apt-get update \nsudo apt upgrade \u2013y \nsudo apt install -y libssl-dev\n"})}),"\n",(0,i.jsx)(n.p,{children:"On macOS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"brew install openssl \n"})}),"\n",(0,i.jsx)(n.p,{children:"The building can be done in two steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Clone the Conflux repository:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/Conflux-Chain/conflux-rust.git \n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Build the Conflux Client:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd conflux-rust \ncargo build --release \n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more detailed instructions, please visit ",(0,i.jsx)(n.a,{href:"/es/docs/general/run-a-node/advanced-topics/compiling-conflux-client",children:"this"})," page."]}),"\n",(0,i.jsx)(n.h3,{id:"step-2-using-snapshot-tool-optional",children:"Step 2: Using Snapshot Tool (Optional)"}),"\n",(0,i.jsx)(n.p,{children:"The Conflux Snapshot Tool (aka Archive-Tool) is designed to help users quickly set up a Conflux node from a snapshot. This tool provides the download links, and by default, it downloads the DB snapshot data of the current day. The Snapshot tool can help save weeks of time required to download and sync all the blockchain data at the moment of running a node. Using this tool is optional, but highly recommended."}),"\n",(0,i.jsxs)(n.p,{children:["For more information about this tool, visit ",(0,i.jsx)(n.a,{href:"./snapshot-tool",children:"this"})," section or the ",(0,i.jsx)(n.a,{href:"https://github.com/conflux-fans/archive-tool",children:"github repository"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"usage-example-linux--mac---mainnet---full-node",children:"Usage Example: (Linux & Mac - Mainnet - full node)"}),"\n",(0,i.jsx)(n.p,{children:"First, download the snapshot downloading software:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"wget <https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/fullnode-db/M/download.sh> \n"})}),"\n",(0,i.jsx)(n.p,{children:'Second, run the "download" program:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bash download.sh \n"})}),"\n",(0,i.jsxs)(n.p,{children:["The compressed snapshot data is several hundred gigabytes. After completing the download, unzip its contents into the ",(0,i.jsx)(n.strong,{children:"run"})," folder of the node."]}),"\n",(0,i.jsx)(n.h3,{id:"step-3-configure-the-node",children:"Step 3: Configure the Node"}),"\n",(0,i.jsxs)(n.p,{children:["You may want to configure your Conflux node by editing the configuration file. You can find a sample configuration file in the Conflux repository, usually named ",(0,i.jsx)(n.strong,{children:"hydra.toml"})," or similar, depending on the network version."]}),"\n",(0,i.jsx)(n.p,{children:"Edit it as needed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"nano ./run/hydra.toml \n"})}),"\n",(0,i.jsx)(n.p,{children:"Make sure to review and modify the settings according to your preferences and system capabilities."}),"\n",(0,i.jsxs)(n.p,{children:["For more detailed instructions, please visit ",(0,i.jsx)(n.a,{href:"/es/docs/general/run-a-node/advanced-topics/node-configuration",children:"this"})," page."]}),"\n",(0,i.jsx)(n.h3,{id:"step-4-running-the-node",children:"Step 4: Running the Node"}),"\n",(0,i.jsx)(n.p,{children:"You can start the Conflux node by running the following command:"}),"\n",(0,i.jsx)(n.p,{children:"The maximum number of open files are advised to set to 10000. In Linux, the default value is 1024, which is insufficient. You can configure this using the following command on the Linux terminal"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ulimit -n 10000 \n"})}),"\n",(0,i.jsx)(n.p,{children:"Finally, to run the node, go to the conflux-rust folder and use the following command to launch the Conflux Client using the specified configuration file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"conflux --config ./run/hydra.toml \n"})}),"\n",(0,i.jsx)(n.p,{children:"Or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"./start.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will start the Conflux node using the configuration file you edited earlier."}),"\n",(0,i.jsx)(n.h3,{id:"step-5-interacting-with-the-node",children:"Step 5: Interacting with the Node"}),"\n",(0,i.jsx)(n.p,{children:"You can interact with your Conflux node using RPC calls. The Conflux node exposes an HTTP JSON-RPC service that you can use to send requests and interact with the blockchain."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'curl -H "Content-Type: application/json" -X POST \u2013data \'{"jsonrpc":"2.0","method":"cfx_clientVersion","params":[],"id":67}\' 127.0.0.1:12537\n'})}),"\n",(0,i.jsx)(n.h3,{id:"step-6-keeping-your-node-updated",children:"Step 6: Keeping Your Node Updated"}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to ",(0,i.jsx)(n.a,{href:"/es/docs/general/run-a-node/how-to-upgrad",children:"keep your Conflux node software updated"})," to the latest version to ensure compatibility with the network and to include the latest features and security patches."]}),"\n",(0,i.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,i.jsxs)(n.p,{children:["Check the ",(0,i.jsx)(n.a,{href:"/es/docs/general/run-a-node/nodes-faqs",children:"FAQs"})," and ",(0,i.jsx)(n.a,{href:"/es/docs/general/run-a-node/TroubleShooting",children:"troubleshooting"})," section if you encounter any problems during the setup of nodes."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var i=o(67294);const t={},l=i.createContext(t);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);