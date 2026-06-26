import { Database, MemoryStick } from "lucide-react";

export const statsCardConfig = [
  {
    title: "Short-term memory",
    iconPath: '/svg/memory-stick.svg',
    items: [
      { id: "1", label: "Recent contexts", value: 12085 },
      { id: "2", label: "Active sessions", value: 76 },
      { id: "3", label: "Retention", value: 5, suffix: "min" },
    ],
  },
  {
    title: "Promotion engine (center panel)",
    iconPath: '/svg/grid/arrow-up-down.svg',
    relevanceScore: 87,
  },
  {
    title: "Long-term memory",
    iconPath: '/svg/database.svg',
    items: [
      { id: "1", label: "Stored contexts", value: "2,468"},
      { id: "2", label: "Embeddings", value: 1,suffix:"M+" },
      { id: "3", label: "Retention", value: 1, suffix: "+ yr" },
    ],
  },
];


export const Query_TIME_CONFIG = {
   title: "Query-time composition",
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
      title: "Context fusion",
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
      title: "Smart ranking",
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
      title: "Real-time processing",
      description:
        "Sub-millisecond response times",
    },
   
   
  ],
};


export const CAPSULE_CONFIG = {
   bodyclass:true,
    title:"Key features",
    headcolor:"#fff",
  
    cards: [
      {
      id: 1,
      icon: "Server",
      textColor:"#fff",
      discColor:'#C6C6C6 ',
      cardClassName: " h-[100%] md:w-[385px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
      iconColor: "",
      title: "Agent persona & role definition",
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
      title: "Tools & permissions",
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
      title: "Scoped memory window",
      description:
        "Shows how recent history (episodic) and long-term knowledge (semantic) are stored and time-bound within the capsule.",
    },
   
   
  ],
};