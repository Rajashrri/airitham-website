export const PLATFORM_ARCHITECTURE_HEADER_CONFIG = {
  heading: "Platform Architecture",
  paragraph:
    "Build for scale, safety and enterprise-grade autonomy",
    headclass:false,
    headingclass:"text-[#fff]",
  buttons: [
    {
      text: "View Documentation",
      className:
        " text-[#015190] bg-white",
      href: "",
      hoverIcon:false,
        icon: "Eye",
    },
    {
      text: "Explore Architecture",
      className: " text-white bg-primary-gradient ",
      href: "",
        icon: "CircleArrowOutUpRight",
    },
  ],
};

export const PLATFORM_HL_ARCHITECTURE_CONFIG = [
  {
    id: "interfaces",
    title: "Interfaces Layer",
    subtitle: "API, CLI, SDKs, Web UI",
    layerIcon: {
      src: "/svg/tv-minimal.svg",
      size: 28,
      color: "#FFFFFF",
    },
    items: [
      { id: "rest", title: "REST API", icon: "CodeXml", size: 32, color: "#015190" },
      { id: "cli", title: "CLI", icon: "Terminal", size: 32, color: "#015190" },
      { id: "sdk", title: "SDK", icon: "Form", size: 32, color: "#015190" },
      { id: "web", title: "Web UI", icon: "Monitor", size: 32, color: "#015190" },
    ],
  },

  {
    id: "agent",
    title: "Agent Layer",
    subtitle: "Multi-agent orchestration system",
    layerIcon: {
      src: "/svg/braindark.svg",
      size: 32,
      color: "#FFFFFF",
    },
    items: [
      { id: "planner", title: "Planner", icon: "NotebookPen", size: 32, color: "#015190" },
      { id: "generator", title: "Generator", icon: "Sparkles", size: 32, color: "#015190" },
      { id: "executor", title: "Executor", icon: "Play", size: 32, color: "#015190" },
      { id: "evaluator", title: "Evaluator", icon: "CheckCircle", size: 32, color: "#015190" },
      { id: "memory", title: "Memory", icon: "Database", size: 32, color: "#015190" },
    ],
  },

  {
    id: "memory-knowledge",
    title: "Memory & Knowledge Layer",
    subtitle: "Graph-RAG, Vector Store, Context Management",
    layerIcon: {
      src: "/svg/networkdark.svg",
      size: 20,
      color: "#FFFFFF",
    },
    items: [
      { id: "vector", title: "Vector Memory", icon: "MemoryStick", size: 32, color: "#015190" },
      { id: "graph", title: "Graph Memory", icon: "VectorSquare", size: 32, color: "#015190" },
      { id: "temporal", title: "Temporal Memory", icon: "CircleDotDashed", size: 32, color: "#015190" },
    ],
  },

  {
    id: "execution",
    title: "Execution Layer",
    subtitle: "Test runners, browsers, device farms",
    layerIcon: {
      src: "/svg/functionaldark.svg",
      size: 32,
      color: "#FFFFFF",
    },
    items: [
      { id: "browser-grid", title: "Browser Grid", icon: "Presentation", size: 32, color: "#015190" },
      { id: "device-farm", title: "Device Farm", icon: "Smartphone", size: 32, color: "#015190" },
      { id: "api-runners", title: "API Runners", icon: "LayoutTemplate", size: 32, color: "#015190" },
      { id: "cloud", title: "Cloud Infra", icon: "Cloud", size: 32, color: "#015190" },
    ],
  },

  {
    id: "evaluation",
    title: "Evaluation & Analytics",
    subtitle: "LLM evaluation, metrics, insights",
    layerIcon: {
      src: "/svg/module/chart-area.svg",
      size: 32,
      color: "#FFFFFF",
    },
    items: [
      { id: "llm-eval", title: "LLM Evaluator", icon: "Bot", size: 32, color: "#015190" },
      { id: "analytics", title: "Analytics Engine", icon: "PieChart", size: 32, color: "#015190" },
      { id: "insights", title: "Insights", icon: "Lightbulb", size: 32, color: "#015190" },
    ],
  },
];



export const PLATFORM_ARCHITECTURE_CONFIG = {
  title: "Deep Dive into Architecture",
  subtitle: "Explore each architectural component in detail",
  bodyclass:"bg-[#E9F6FB] ",


  cards: [
    {
      id: 1,
      icon: "Brain",
      title: "Agentic Architecture",
      description:
        "Multi-agent orchestration for intelligent tasking workflows, precise planning, decision-making, and coordination.",
      hasBg: true,
 cardClassName:" w-full sm:w-[350px] bg-[#fff] border-light-sm",
      showLink: true,
      linkText: "Learn More",
      href: "/agentic-architecture",
    },
    {
      id: 2,
      icon: "Network",
      title: "Memory & Graph-RAG",
      description:
        "Persistent context for intelligent testing, decision, vector, graph, and temporal memory systems.",
      hasBg: true,
 cardClassName:"w-full sm:w-[350px] bg-[#fff] border-light-sm",
      showLink: true,
      linkText: "Learn More",
      href: "/memory-and-graph-rag",
    },
    {
      id: 3,
      icon: "ShieldCheck",
      title: "Security Design",
      description:
        "Enterprise security built into every layer.Tenant isolation, encryption, and compliance readiness.",
      hasBg: true,
      cardClassName:" w-full bg-[#fff] sm:w-[350px] border-light-sm",
      href: "/arhitecture-security",
      showLink: true, 
    },
  ],
};


export const PLATFORM_ARCHITECTURAL_PRINCIPLES_CONFIG = {
  title: "Architectural Principles",
  subtitle: "Core design principles guiding our platform architecture",

  cards: [
    {
      id: 1,
      icon: "/svg/expand.svg",
      title: "Horizontal Scalability",
      description:
        "Microservices architecture with Kubernetes orchestration enables seamless scaling across thousands of concurrent test executions.",
      tags: ["Containers", "Auto-scaling"],
    },
    {
      id: 2,
      icon: "/svg/repeatdark.svg",
      title: "Fault Tolerance",
      description:
        "Circuit breakers, retry mechanisms, and graceful degradation ensure continuous operation even during partial system failures.",
      tags: ["Circuit Breakers", "Self-healing"],
    },
    {
      id: 3,
      icon: "/svg/unplug.svg",
      title: "Pluggable Components",
      description:
        "Modular design allows seamless integration of new AI models, execution engines, and evaluation frameworks without system-wide changes.",
      tags: ["Microservices", "APIs"],
    },
    {
      id: 4,
      icon: "/svg/eye.svg",
      title: "Full Observability",
      description:
        "Comprehensive logging, metrics, and distributed tracing provide complete visibility into system behavior and agent decision-making.",
      tags: ["Tracing", "Metrics"],
    },
  ],
};



