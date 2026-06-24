
export const Neuro_Test_HEADER = {
  heading: "Neuro Test",
  subheading:"AIRITHM’s Unified Evaluation Hub for AI Quality",
  headclass:"pt-[0px]",
  headingclass:"text-[#fff]",
  paragraph:
    "Airithm test studio revolutionizes testing with two powerful capabilities <br class='hidden md:block' /> NeuroTest for AI/LLM And CoreTest for enterprise applications",
  buttons: [
   {
  text: "Explore Documentation",
  className:
    " text-[#015190] bg-white",
  icon: "Play",
  hoverIcon:false,
  iconSize: "20px",
  href: "",
},
{
  text: "Start Free Trial",
  className:
    " bg-primary-gradient text-white",
  href: "",
  icon: "CircleArrowOutUpRight",
  iconSize: "20px",
}

  ],
};

export const Core_capabiliti_CONFIG = {
   title: "Core Capabilities",
   bodyclass:"bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] text-white",
//   subtitle:
//     "The Reflective Memory Module represents a breakthrough in AI self- <br/>awareness and continuous learning.",
    cards: [
    {
      id: 1,
      icon: "Settings",
      // linkIconSrc:"/svg/grid/settings.svg",
      textColor:"#fff",
      gradent:true,
      iconColor: "",
        cardClassName: " w-full sm:w-[365px] border border-[#9d9d9d] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
      title: "Unified Evaluation Orchestrator",
      discColor:'#C6C6C6',
      description:
        "Runs multiple frameworks in parallel with intelligent load balancing and result aggregation.",
    },
    {
      id: 2,
      icon:"Search",
      // linkIconSrc:"/svg/grid/search.svg",
      gradent:true,
      iconColor: "",
      cardClassName: "w-full sm:w-[365px] border border-[#9d9d9d] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] ",
       textColor:"#fff",
       gradent:true,
       discColor:'#C6C6C6',
      title: "RAG Quality Engine",
      description:
        "Deep context validation via RAGAS & DeepEval with advanced retrieval scoring.",
    },
    {
      id: 3,
      icon:"Bot",
      //  linkIconSrc:"/svg/grid/bot.svg",
      iconColor: "",
       textColor:"#fff",
       gradent:true,
       cardClassName: "w-full sm:w-[365px] border border-[#9d9d9d] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] ",
       discColor:'#C6C6C6',
      title: "Agentic AI Testing",
      description:
        "End-to-end multi-agent validation via AgentBench and AgentBoard frameworks.",
    }
    ,
    {
      id: 4,
        icon:"ShieldCheck",
        // linkIconSrc:"./svg/shield-check.svg",
      iconColor: "",
      gradent:true,
       textColor:"#fff",
       cardClassName: "w-full sm:w-[365px] border border-[#9d9d9d] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]  ",
       discColor:'#C6C6C6',
      title: "Safety & Robustness Auditing",
      description:
        "Compliance checks via HELM & PromptBench with automated policy enforcement.",
    }
    ,
    {
      id: 5,
       icon:"GitBranch",
      //  linkIconSrc:"/svg/grid/git-branch.svg",
      iconColor: "",
      gradent:true,
       textColor:"#fff",
       cardClassName: "w-full sm:w-[365px] border border-[#9d9d9d] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
       discColor:'#C6C6C6',
      title: "Automated CI/CD Quality Gates",
      description:
        "Stops regressions before production with intelligent threshold management.",
    }
    ,
    {
      id: 6,
  icon:"ChartSpline",
  // linkIconSrc:"/svg/grid/chart-spline.svg",
      iconColor: "",
      gradent:true,
       textColor:"#fff",
       cardClassName: "w-full sm:w-[365px] border border-[#9d9d9d] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]  ",
       discColor:'#C6C6C6',
      title: "Enterprise Dashboard & Analytics",
      description:
        "Centralized performance tracking with real-time insights and reporting.",
    }
    
  ],
};

export const Key_feature_Config = {
  list:[
    "Multi-framework plugin runtime",
    "Cross-model comparison",
    "Drift detection",
    "Safety & policy compliance",
  ]
}
export const Key_feature2_Config = {
  list:[
    "Unified scoring & normalization",
    "Regression detection",
    "Ground truth alignment",
    "Scalable test execution",
  ]
}


export const TIMELINE_SECTION_CONFIG = {
   title: "How It Works",
  // subtitle:
  //   "Four key components work together to enable seamless context distribution",
 cards: [
   {
    id: 1,
    title: "Define Test Suite",
    description:
      "Configure your evaluation parameters in YAML or Python with custom metrics and thresholds.",
    align: "right",
  },
  {
    id: 2,
    title: "Load & Normalize Data",
    description:
      "Distributed agents receive and process context updates to maintain synchronized awareness ",
    align: "left",
  },
  {
    id: 3,
    title: "Parallel Framework Execution",
    description:
      "Orchestrator triggers multiple evaluation frameworks simultaneously for maximum efficiency.",
    align: "right",
  },
  {
    id: 4,
    title: "Generate Structured Scores",
    description:
      "Each plugin produces standardized, structured evaluation scores with detailed metrics.",
    align: "left",
  },
  ,
  {
    id: 5,
    title: "Unified Score Normalization",
    description:
      "Advanced algorithms merge and normalize results across different evaluation frameworks.",
    align: "right",
  },
  {
    id: 6,
    title: "Results & Integration",
    description:
      "Final scores stored in database and pushed to dashboard or CI/CD quality gates.",
    align: "left",
  },
  ]

}

export const benifits_Config ={
   cards: [
   {
    id: 1,
    title: "Production Safety",
    cardClass:' w-full sm:w-[550px] ',
    description:
      "Prevent model regressions before production with automated quality gates and comprehensive testing.",
  },{
    id: 2,
    title: "Hallucination Detection",
        cardClass:' w-full sm:w-[550px] ',
    description:
      "Catch and quantify hallucinations early in the development cycle with advanced validation techniques.",
  },
  {
    id: 3,
    title: "Multi-Agent Validation",
     cardClass:' w-full sm:w-[550px] ',
    description:
      "Ensure multi-agent tool correctness and planning success with specialized testing frameworks.",
  },
  {
    id: 4,
    title: "RAG Quality Assurance",
     cardClass:' w-full sm:w-[550px] ',
    description:
      "Validate RAG grounding and source attribution with deep context analysis and retrieval scoring.",
  },
  {
    id: 5,
    title: "Centralized Governance",
     cardClass:' w-full sm:w-[550px] ',
    description:
      "Centralize safety and robustness checks for enterprise governance and compliance requirements.",
  },
]
}

 export const AUTOMATION_CTA_CONFIG  = {
  heading: "Elevate your AI quality with NeuroTest",
  paragraph:
    "The gold standard for production-grade AI governance is here.",
  backgroundImage: "/bg/gradient.png",
  buttons: [
  
  {
    text: "Download Whitepaper",
    className: " text-[#015190] bg-white ",
    icon: "Download",
    iconSize: "20px",
    hoverIcon:false,
    href: "",
  },
    {
    text: "Contact Sales",
    className: " bg-primary-gradient   text-[#fff] ",
    icon: "CircleArrowOutUpRight",
    iconSize: "20px",
    href: "",
  },
    {
    text: "Start Free Trial",
    className: " bg-primary-gradient   text-[#fff] ",
    icon: "CircleArrowOutUpRight",
    iconSize: "20px",
    href: "",
  }
  
]
 }