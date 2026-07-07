export const HAMN_HEADER = {
  heading: "Hybrid Attention Memory Network",
  headClass: "pt-[0]  ",
  headingclass:"text-[#015190]",
  paragraph:
    "Revolutionary AI routing engine with policy-gated multi-head attention mechanism. Explainable, enterprise-grade artificial intelligence for complex decision making.",
  buttons: [
    {
      text: "View Documentation",
      className:
        "py-5 px-6 min-w-[228px] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
      icon: "Eye",
      hoverIcon: false,
      iconSize: "20px",
      // href: "",
    },
    {
      text: "Explore Technology",
      className:
        "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      // href: "",
      icon: "CircleArrowOutUpRight",
      iconSize: "20px",
    },
  ],
};

export const HAMN_HEADER_CHIPS = [
  {
    id: 1,
    label: "Multi-source attention",
  },
  {
    id: 2,
    label: "Explainable AI",
  },
  {
    id: 3,
    label: "Enterprise ready",
  },
];

export const HAMN_SECTION_CONFIG = {
  imageSrc: "/core-module/hamn/hamn.webp",
  imageAlt: "Hybrid Attention Memory Network Architecture",
  wrapperClassName: "max-w-5xl px-5 lg:px-0",
  description:
    "Hybrid Attention Memory Network (HAMN) is a transformer-inspired routing engine that dynamically allocates attention across episodic, semantic, and capsule-local memories. Each query activates multi-head attention pathways, governed by policy constraints that restrict sensitive or domain-protected sources. HAMN adapts continuously through feedback loops informed by task-success, satisfaction, and reinforcement signals. The router outputs a ranked, relevance-scored context pack optimized for high-signal retrieval, personalization, and transparency.",
};

export const HAMN_USP_CONFIG = {
  title: "System architecture",
  subtitle: "Deep dive into HAMN’s layered attention mechanism",
  bodyclass: "bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] text-white",

  cards: [
    {
      id: 1,
      icon: "Layers",
      title: "Input layer",
      discColor: "rgba(198, 198, 198, 1)",
      textColor: "#fff",
      description:
        "Multi-source data ingestion with preprocessing and tokenization for diverse input types.",
      points: {
        labels: ["Text processing", "Structured data"],
        textGradientColor:
          "linear-gradient(#6AC0E6)",
        discGradientColor:
          "linear-gradient(#6AC0E6)",
      },
    },
    {
      id: 2,
      icon: "Brain",
      title: "Attention engine",
      textColor: "#fff",
      discColor: "rgba(198, 198, 198, 1)",
      description:
        "Policy-gated multi-head attention with dynamic routing and context prioritization.",
      points: {
        labels: ["Multi-head attention", "Policy gating"],
        textGradientColor:
          "linear-gradient(#6AC0E6)",
        discGradientColor:
          "linear-gradient(#6AC0E6)",
      },
    },
    {
      id: 3,
      icon: "BarChart3",
      textColor: "#fff",
      title: "Output layer",
      discColor: "rgba(198, 198, 198, 1)",
      description:
        "Ranked context snippets with relevance scoring and explainability metrics.",
      points: {
        labels: ["Relevance scoring", "Context ranking"],
        textGradientColor:
          "linear-gradient(#6AC0E6)",
        discGradientColor:
          "linear-gradient(#6AC0E6)",
      },
    },
  ],
};

export const ATTENTION_FLOW_CONFIG = {
  title: "Attention flow visualization",
  titleClassName: "text-[#015190]",
  bodyclass:false,
 titleClassName:" text-[#00273A]",


  steps: [
    {
      id: "Data",
      label: "Data ingestion",
      icon: {
        name: "Upload",
        size: "32",
      },
    },
    {
      id: "routing",
      label: "Attention routing",
      icon: {
        name: "Network",
        size: "32",
      },
    },
    {
      id: "policy",
      label: "Policy gating",
      icon: {
        name: "Funnel",
        size: "32",
      },
    },
    {
      id: "ranked",
      label: "Ranked output",
      icon: {
        name: "Award",
        size: 32,
      },
    },
  ],
};
