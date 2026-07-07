export const LLM_BASED_EVALUATION_HEADER = {
  heading: "LLM Based Evaluation",
  headclass: "pt-[0px]",
  headingclass:"text-[#fff]",
  paragraph:
    "Automate and scale your AI model evaluation with intelligent, context-aware <br /> assessment frameworks.",
  buttons: [
    {
   text: "View Architecture", 
      className:
        "py-5 px-6 min-w-[253px]  w-full font-primary font-semibold text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
      icon: "Play",
      hoverIcon: false,
      iconSize: "20px",
      href: "/platform-architecture",
    },
    {
        text: "Request Demo",
      className:
        "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-semibold leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      href: "/demo",
      icon: "CircleArrowOutUpRight",
      iconSize: "20px",
    },
  ],
};
export const LLM_BASED_FEATURES_CONFIG_ONE = {
  title: "What it does",
  subtitle:
    "Our LLM-based evaluation system provides comprehensive, automated assessment of AI models and their outputs through advanced natural language understanding and contextual analysis.",

  cards: [
    {
      id: 1,
      icon: "Search",
      iconColor: "#015190", // icon white because hasBg is true
      title: "Intelligent analysis",
      description:
        "Automatically evaluates model outputs for accuracy, relevance, and quality using advanced language models.",
      cardClassName: "md:w-[320px] w-[100%] bg-white  border-[#D9D9D9]",
    },
    {
      id: 2,
      icon: "ChartSpline",
      iconColor: "#015190",
      title: "Performance metrics",
      description:
        "Generates detailed performance reports with actionable insights and improvement recommendations.",
      cardClassName: "md:w-[320px] w-[100%] bg-white  border-[#D9D9D9]",
    },
    {
      id: 3,
      icon: "Settings",
      iconColor: "#015190",

      title: "Continuous monitoring",
      description:
        "Real-time evaluation and monitoring of model performance across different scenarios and datasets.",
      cardClassName: "md:w-[320px] w-[100%] bg-white  border-[#D9D9D9]",
    },
  ],
};
export const LLM_BASED_WORKS_CONFIG = {
  heading: {
    title: "How It Works",
    subtitle:
      "A streamlined four-step process that transforms your evaluation workflow from manual to automated.",
  },
  steps: [
    {
      step: 1,
      title: "Data input",
      description:
        "Upload your model outputs and reference datasets through our secure API or dashboard.",
    },
    {
      step: 2,
      title: "LLM processing",
      description:
        "Our evaluation LLM analyzes content for accuracy, coherence, and task-specific criteria.",
    },
    {
      step: 3,
      title: "Score generation",
      description:
        "Generate comprehensive scores and detailed feedback for each evaluation dimension.",
    },
    {
      step: 4,
      title: "Report delivery",
      description:
        "Receive actionable insights and recommendations through detailed evaluation reports.",
    },
  ],
};
export const LLM_BASED_KEY_BENEFITS = [
  {
    id: "coverage",
    iconName: "ChartBar",
    iconSize: 40,
    value: "95%",
    percentage: 95,
    title: "Coverage",
    description: "Knowledge capture from all organizational sources",
    iconWrapperClass: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
  {
    id: "speed",
    iconName: "Zap",
    iconSize: 40,
    value: "10x",
    percentage: 10, // You can adjust this depending on how you want to represent "10x"
    title: "Speed",
    description: "Faster information retrieval and decision making",
    iconWrapperClass: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
  {
    id: "cost",
    iconName: "DollarSign",
    iconSize: 40,
    value: "60%",
    percentage: 60,
    title: "Cost Reduction",
    description: "Lower operational overhead and training costs",
    iconWrapperClass: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
  {
    id: "risk",
    iconName: "ShieldCheck",
    iconSize: 40,
    value: "99%",
    percentage: 99,
    title: "Risk Reduction",
    description: "Minimized knowledge loss and compliance gaps",
    iconWrapperClass: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
];



export const LLM_BASED_USP_CONFIG = {
  title: "System Architecture",
  subtitle: "Deep dive into HAMN’s layered attention mechanism",
  bodyclass: true,

  cards: [
    {
      id: 1,
      icon: "MessageCircle",
      title: "Customer support",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[364px] w-[100%]",
      description:
        "Evaluate chatbot responses for accuracy, helpfulness, and customer satisfaction across thousands of support interactions.",
      points: {
        labels: ["Accuracy +25%"],
        showDisc: false, // ✅ disc visible
        textGradientColor:
          "linear-gradient(#6AC0E6)",
        
      },
    },

    {
      id: 2,
      icon: "FileText",
      title: "Content generation",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[364px] w-[100%]",
      description:
        "Assess generated marketing copy, articles, and documentation for quality, brand alignment, and engagement potential.",
      points: {
        labels: ["Quality +40%"],
        showDisc: false, // ❌ text only, no disc
        textGradientColor:
          "linear-gradient(#6AC0E6)",
      },
    },

    {
      id: 3,
      icon: "CodeXml",
      title: "Code review",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[364px] w-[100%]",
      description:
        "Automatically evaluate AI-generated code for functionality, security, and best practices compliance.",
      points: {
        labels: ["Efficiency +60%"],
        showDisc: false,
        textGradientColor:
          "linear-gradient(#6AC0E6)",
        
      },
    },
  ],
};

export const LLM_BASED_CTA_CONFIG = {
  heading: "Ready to transform your evaluation process?",
  paragraph:
    "Join leading AI teams who trust our platform for comprehensive, <br /> automated model evaluation.",
  backgroundImage: "/bg/gradient.png",
  buttons: [
    {
  text: "View Architecture",
      className:
        "py-5 px-6 min-w-[253px]   font-primary font-semibold text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
      icon: "Play",
      hoverIcon: false,
      iconSize: "20px",
      href: "/platform-architecture",
    },
    {
    
      className:
        "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-semibold leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      href: "/demo",      text: "Request Demo",
      icon: "CircleArrowOutUpRight",
      iconSize: "20px",
    },
  ],
};
