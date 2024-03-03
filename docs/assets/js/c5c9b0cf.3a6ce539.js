"use strict";(self.webpackChunkcookbooknitro=self.webpackChunkcookbooknitro||[]).push([[5310],{3775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(4848),s=n(8453);const r={},i="Module 7: Explaining the CodeBase of Router Nitro - Part 1",a={id:"Module7",title:"Module 7: Explaining the CodeBase of Router Nitro - Part 1",description:"Welcome to Module 7 Of Router Nitro CookBook. In this module, we'll be looking at a dApp and understanding its CodeBase. This is the Part 1 of understanding the CodeBase. Let's Begin...",source:"@site/docs/Module7.md",sourceDirName:".",slug:"/Module7",permalink:"/https://github.com/router-resources/nitrocourse.git/docs/Module7",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module7.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Module 6: Understanding Forwarders and How They Work?",permalink:"/https://github.com/router-resources/nitrocourse.git/docs/Module6"},next:{title:"Module 8: Explaining the CodeBase of Router Nitro - Part 2",permalink:"/https://github.com/router-resources/nitrocourse.git/docs/Module8"}},d={},c=[{value:"Understanding the CodeBase Part- 1",id:"understanding-the-codebase-part--1",level:3},{value:"Step1: Get the Quote",id:"step1-get-the-quote",level:3},{value:"Response",id:"response",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"module-7-explaining-the-codebase-of-router-nitro---part-1",children:(0,o.jsx)(t.code,{children:"Module 7: Explaining the CodeBase of Router Nitro - Part 1"})}),"\n",(0,o.jsx)(t.p,{children:"Welcome to Module 7 Of Router Nitro CookBook. In this module, we'll be looking at a dApp and understanding its CodeBase. This is the Part 1 of understanding the CodeBase. Let's Begin..."}),"\n",(0,o.jsx)(t.h3,{id:"understanding-the-codebase-part--1",children:"Understanding the CodeBase Part- 1"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/router-resources/Voyager-2-Cookbook/assets/124175970/7add0a31-99d0-4d16-9e7d-9f8a3390bfb7",alt:"gif"})}),"\n",(0,o.jsxs)(t.p,{children:["It's very easy to integrate Nitro in your dApp. All you need is a 20 lines of copy paste code ! ",(0,o.jsx)(t.strong,{children:"Clone this repository"}),",hit ",(0,o.jsx)(t.strong,{children:"npm install"})," to install all the neccessary package and libraries and hit ",(0,o.jsx)(t.strong,{children:"npm run dev"})," to start the demo dapp. All you need to do is change some parameters based on the dapp that you are building. You find all the suppoted chains and assets ",(0,o.jsx)(t.a,{href:"https://docs.routerprotocol.com/develop/voyager/voyager-v2.0/supported-chains-tokens",children:" here"})]}),"\n",(0,o.jsx)(t.p,{children:"This Demo app demonstrate how to use Nitro to transsfer USDT from Polygon Mumbai to Avalanche Fuji. Note, this dApp is just made for demonstration purpose. After having this dapp code on your local system, you can modify it (change thee parameters) based on the dapp you want to build."}),"\n",(0,o.jsx)(t.p,{children:"After you have run the dApp on your localhost, it's time to undertand how does the dApp works."}),"\n",(0,o.jsx)(t.p,{children:"All you need is just 3 easy steps to integrate Voyager into any dapp :-"}),"\n",(0,o.jsx)(t.p,{children:"Step1: Get the Quote"}),"\n",(0,o.jsx)(t.p,{children:"Step2: Check and set allowance"}),"\n",(0,o.jsx)(t.p,{children:"Step3: Execute the transaction"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/router-resources/Voyager-2-Cookbook/assets/124175970/0e7775f5-cf4f-41b1-a57d-bfc57e2fc44f",alt:"Untitled Workspace"})}),"\n",(0,o.jsx)(t.h3,{id:"step1-get-the-quote",children:"Step1: Get the Quote"}),"\n",(0,o.jsx)(t.p,{children:"Router Nitro enables you to interact with the nitro contract and initiate CrossChain token transfers. The first step in this process is to request a quote, which provides you with essential details about the proposed token transfer."}),"\n",(0,o.jsx)(t.p,{children:"To request a quote, follow these steps:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Define the PATH_FINDER_API_URL:"})," Set the PATH_FINDER_API_URL variable to the URL of the Pathfinder API for the Voyager testnet. This is where you will send your quote request."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'const PATH_FINDER_API_URL = "https://api.pf.testnet.routerprotocol.com/api";\n'})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsxs)(t.strong,{children:["Create the ",(0,o.jsx)(t.code,{children:"getQuote"})," Function:"]})," This function handles the quote request. It uses the ",(0,o.jsx)(t.code,{children:"axios"})," library to make an HTTP GET request to the Voyager Pathfinder API."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'const getQuote = async (params) => {\n  const endpoint = "v2/quote";\n  const quoteUrl = `${PATH_FINDER_API_URL}/${endpoint}`;\n  try {\n    const res = await axios.get(quoteUrl, { params });\n    return res.data;\n  } catch (e) {\n    console.error(`Fetching quote data from pathfinder: ${e}`);\n  }\n};\n'})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsxs)(t.strong,{children:["Call the ",(0,o.jsx)(t.code,{children:"getQuote"})," Function:"]})," Use this function to request a quote by passing appropriate parameters.In this repository , this function is called using a a button."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'// Example usage:\nconst quoteParams = {\n  fromTokenAddress: from,\n  toTokenAddress: to,\n  amount: amount,\n  fromTokenChainId: "80001",\n  toTokenChainId: "43113", // Fuji\n\n  widgetId: 0, // get your unique wdiget id by contacting us on Telegram\n};\n\nconst quoteData = await getQuote(quoteParams);\nconsole.log("Quote Data:", quoteData);\n'})}),"\n",(0,o.jsx)(t.p,{children:"These parameters define the details of the token transfer you wish to execute. Let's break down what each parameter represents:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"'fromTokenAddress'"}),": This should specify the address of the token you want to transfer from (the source token)."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"'toTokenAddress'"}),": Provide the address of the token you want to transfer to (the destination token)."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"'amount'"}),": Set the amount of the token you wish to transfer."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"'fromTokenChainId'"}),': This parameter represents the chain ID of the source blockchain. In this case, it\'s set to "80001."']}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"'toTokenChainId'"}),': Similarly, this parameter specifies the chain ID of the destination blockchain, which, in this example, is "43113" (Fuji).']}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"'widgetId'"}),": This parameter is used to identify the widget responsible for the transfer. You'll typically need to obtain a unique widget ID through contact with the Voyager team, often via Telegram or other means. For now, let's keep it as 0."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["With these parameters, you can now call the ",(0,o.jsx)(t.code,{children:"getQuote"})," function with this ",(0,o.jsx)(t.code,{children:"params"})," object to initiate a quote request for your specific token transfer."]}),"\n",(0,o.jsx)("img",{width:"197",alt:"image",src:"https://github.com/router-resources/Voyager-2-Cookbook/assets/124175970/5867052e-301e-46c6-b206-24094c19298e"}),"\n",(0,o.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"getQuote"})," function returns the quote data, which typically includes details about the token transfer, such as source and destination chains, token amount, fees, and other relevant information.Click the ",(0,o.jsx)(t.strong,{children:"Get Quote"})," button and go to console to see the quote data printed on console."]}),"\n",(0,o.jsx)(t.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(t.p,{children:"In conclusion, Module 7 of Understanding the CodeBase introduced users to the seamless integration of Nitro into their decentralized applications (dApps). By following a straightforward process outlined in just 20 lines of code, developers can effectively incorporate Nitro into their projects, facilitating cross-chain token transfers."}),"\n",(0,o.jsx)(t.p,{children:"The module demonstrated a practical example using a demo dApp to transfer USDT from Polygon Mumbai to Avalanche Fuji. After setting up the dApp locally and modifying parameters as per individual project requirements, users embarked on understanding the three fundamental steps to integrate Voyager into any dApp:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 1: Get the Quote:"})," Users initiated the token transfer process by requesting a quote from the Nitro contract through the Pathfinder API. The quote provided essential details about the proposed token transfer, including source and destination chains, token amounts, and associated fees."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 2: Check and Set Allowance:"})," Once users obtained the quote, they were prompted to check and set the necessary allowances for the token transfer to proceed smoothly."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 3: Execute the Transaction:"})," With all prerequisites met, users executed the transaction, initiating the cross-chain token transfer from the source to the destination chain."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The module provided detailed insights into each step, including code snippets and explanations, to guide developers through the integration process effectively. By following the outlined steps, developers can seamlessly incorporate Nitro into their dApps, enabling efficient and secure cross-chain token transfers."}),"\n",(0,o.jsx)(t.h1,{id:"share-your-learnings",children:"Share Your Learnings!"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/router-resources/Router-Nitro-CookBook/assets/124175970/23258532-0dfa-407e-b695-2ed2eb39d1bc",alt:"img"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["Share your learnings on Twitter. Click ",(0,o.jsx)(t.a,{href:"https://clicktotweet.com/5p7ub",children:"here"})]})}),"\n",(0,o.jsx)(t.h1,{id:"-next-module-8-explaining-the-codebase-of-router-nitro---part-2",children:(0,o.jsx)(t.a,{href:"/https://github.com/router-resources/nitrocourse.git/docs/Module8",children:" Next: Module 8: Explaining the CodeBase of Router Nitro - Part 2"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(6540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);