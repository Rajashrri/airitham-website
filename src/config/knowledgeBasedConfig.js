export const KNOWLEDGE_EVALUATION_HEADER = {
  heading: "Knowledge Base Creation <br class='hidden md:block' /> from Self-Learning",
  headingclass:"text-[#fff]",
  headclass: "pt-[0px]",
  paragraph:
    "Transform your organization's scattered information into intelligent, searchable <br class='hidden md:block' />  knowledge bases that learn and evolve automatically.",
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
export const KNOWLEDGE_FEATURES_CONFIG_ONE = {
  title: "What it does",
  subtitle:
    "Our AI-powered platform automatically ingests, processes, and organizes your organizational knowledge into intelligent, searchable databases that continuously improve through machine learning.",

  cards: [
    {
      id: 1,
      icon: "Bot",
      iconColor: "#015190", // icon white because hasBg is true
      title: "Automated ingestion",
      description:
        "Seamlessly captures data from documents, emails, databases, and conversations across your organization.",
      cardClassName: "md:w-[320px] w-[100%] bg-white border-[#D9D9D9]",
    },
    {
      id: 2,
      icon: "Search",
      iconColor: "#015190",
      title: "Intelligent search",
      description:
        "Natural language queries return contextually relevant answers with source citations and confidence scores.",
      cardClassName: "md:w-[320px] w-[100%] bg-white border-[#D9D9D9]",
    },
    {
      id: 3,
      icon: "ChartSpline",
      iconColor: "#015190",

      title: "Continuous learning",
      description:
        "Adapts and improves knowledge accuracy through user feedback and new information patterns.",
      cardClassName: "md:w-[320px] w-[100%] bg-white border-[#D9D9D9]",
    },
  ],
};
export const KNOWLEDGE_WORKS_CONFIG = {
  steps: [
    {
      step: 1,
      title: "Data collection",
      description:
        "Connect your data sources, including documents, databases, and communication platforms.",
    },
    {
      step: 2,
      title: "AI processing",
      description:
        "Advanced NLP algorithms extract, classify, and structure information automatically.",
    },
    {
      step: 3,
      title: "Knowledge graph",
      description:
        "Creates interconnected knowledge networks with semantic relationships and context.",
    },
    {
      step: 4,
      title: "Intelligent access",
      description:
        "Deploy searchable interfaces with natural language querying and contextual answers.",
    },
  ],
};
export const KNOWLEDGE_BASED_KEY_BENEFITS = [
  {
    id: "coverage",
    iconName: "Divide",
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
    percentage: 20, // You can adjust this depending on how you want to represent "10x"
    title: "Speed",
    description: "Faster information retrieval and decision making",
    iconWrapperClass: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
  {
    id: "cost",
    iconName: "DollarSign",
    iconSize: 40,
    value: "60%",
    percentage: 70,
    title: "Cost Reduction",
    description: "Lower operational overhead and training costs",
    iconWrapperClass: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
  {
    id: "risk",
    iconName: "ShieldCheck",
    iconSize: 40,
    value: "90%",
    percentage: 99,
    title: "Risk Reduction",
    description: "Minimized knowledge loss and compliance gaps",
    iconWrapperClass: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
];



export const KNOWLEDGE_USP_CONFIG = {
  
  cards: [
    {
      id: 1,
      icon: "Hospital",
      title: "Healthcare systems",
      textColor: "#fff",
      discColor: "#D9D9D9",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[400px] w-[100%]",
      description:
        "Consolidate medical protocols, research findings, and patient care guidelines into searchable databases for instant clinical decision support.",
     
    },

    {
      id: 2,
      icon: "GraduationCap",
      title: "Educational institutions",
      textColor: "#fff",
     discColor: "#D9D9D9",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[400px] w-[100%]",
      description:
        "Transform curriculum materials, research papers, and administrative procedures into intelligent learning resources accessible to faculty and students.",
      
    },

    {
      id: 3,
      icon: "Building",
      title: "Enterprise organizations",
      textColor: "#fff",
      discColor: "#D9D9D9",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[400px] w-[100%]",
      description:
        "Capture tribal knowledge from retiring employees, process documentation, and best practices into permanent organizational memory.",
      
    },
  ],
};

export const KNOWLEDGE_CTA_CONFIG = {
  heading: "Ready to transform your knowledge management?",
  paragraph:
    "Join hundreds of organizations already leveraging AI-powered knowledge bases to accelerate decision-making and preserve institutional knowledge.",
  backgroundImage: "/bg/gradient.png",
  buttons: [
    {
     text: "View Architecture",
      className:
        "py-5 px-6 min-w-[253px]   font-primary font-semibold text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
      icon: "Play",
      hoverIcon: false,
      iconSize: "20px",
      href: "",
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
