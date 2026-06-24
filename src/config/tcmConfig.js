import { Database, MemoryStick } from "lucide-react";

export const statsCardConfig = [
  {
    title: "Short-Term Memory",
    iconPath: '/svg/memory-stick.svg',
    items: [
      { id: "1", label: "Recent Contexts", value: 12085 },
      { id: "2", label: "Active Sessions", value: 76 },
      { id: "3", label: "Retention", value: 5, suffix: "min" },
    ],
  },
  {
    title: "Promotion Engine (Center Panel)",
    iconPath: '/svg/grid/arrow-up-down.svg',
    relevanceScore: 87,
  },
  {
    title: "Long-Term Memory",
    iconPath: '/svg/database.svg',
    items: [
      { id: "1", label: "Stored Contexts", value: "2,468"},
      { id: "2", label: "Embeddings", value: 1,suffix:"M+" },
      { id: "3", label: "Retention", value: 1, suffix: "+ yr" },
    ],
  },
];


export const Query_TIME_CONFIG = {
   title: "Query-Time Composition",
   bodyclass:"bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] text-white",
  subtitle:
    "Intelligent merging and composition engine that combines short-term and long-term memory contexts for optimal, responsive generation.",
    cards: [
      {
      id: 1,
      icon: "Server",
      textColor:"#fff",
      discColor:'#C6C6C6 ',
      cardClassName: " h-[100%] lg:w-[375px] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
      iconColor: "",
      title: "Context Fusion",
      description:
        "Seamless integration of memory tiers",
    },
    {
      id: 2,
      icon: "ShieldCheck",
      iconColor: "",
        cardClassName: " h-[100%] lg:w-[375px] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
   textColor:"#fff",
      discColor:'#C6C6C6 ',
      title: "Smart Ranking",
      description:
        "Relevance-based prioritization",
    },
    {
      id: 3,
      icon: "Maximize2",
      iconColor: "",
        cardClassName: " h-[100%] lg:w-[375px] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
       textColor:"#fff",
      discColor:'#C6C6C6 ',
      title: "Real-time Processing",
      description:
        "Sub-millisecond response times",
    },
   
   
  ],
};


export const CAPSULE_CONFIG = {
   bodyclass:true,
    title:"Key Features",
    headcolor:"#fff",
  
    cards: [
      {
      id: 1,
      icon: "Server",
      textColor:"#fff",
      discColor:'#C6C6C6 ',
      cardClassName: " h-[100%] md:w-[385px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
      iconColor: "",
      title: "Agent Persona & Role Definition",
      description:
        "Outlines the AI agent’s identity, tone, and domain alignment (e.g., SupportBot, ResearchAgent).",
    },
    {
      id: 2,
      icon: "ShieldCheck",
      iconColor: "",
        cardClassName: " h-[100%] md:w-[385px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
   textColor:"#fff",
      discColor:'#C6C6C6 ',
      title: "Tools & Permissions",
      description:
        "Lists APIs, actions, and system privileges encapsulated for that agent. Example:/search, /fetch, /summarize.",
    },
    {
      id: 3,
      icon: "Maximize2",
      iconColor: "",
        cardClassName: " h-[100%] md:w-[385px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
       textColor:"#fff",
      discColor:'#C6C6C6 ',
      title: "Scoped Memory Window",
      description:
        "Shows how recent history (episodic) and long-term knowledge (semantic) are stored and time-bound within the capsule.",
    },
   
   
  ],
};