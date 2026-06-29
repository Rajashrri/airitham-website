
export const REFLECTIVE_MEMORY_HEADER = {
  heading: "Reflective Memory",
  headclass:"pt-[100px] ",
paragraph:
  "Self-learning AI that continuously evolves through meta-cognitive <br class='hidden sm:block' /> analysis, autonomous reflection, and intelligent adaptation.",

//   backgroundImage: "/bg/gradient.png",
  buttons: [
//    {
//   text: "Documentation",
//   className:
//     "py-5 px-6  font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
//   icon: "",
//   hoverIcon:true,
//   iconSize: "20px",
//   href: "",
//   hoverIcon:false,
//   icon:"Play"
// },
// {
//   text: "View Policy Recipe",
//   className:
//     "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
//   href: "",
//   icon: "CircleArrowOutUpRight",
//   iconSize: "20px",
// }

  ],
};

export const CORE_MODULE_CONFIG = {
   title: "Core Concept",
   bodyclass:"bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] text-[#fff]",
  subtitle:
    "The Reflective Memory Module represents a breakthrough in AI <br/>self-awareness and continuous learning.",
    cards: [
    {
      id: 1,
      icon: "AudioWaveform",
      textColor:"#fff",
      iconColor: "",
        cardClassName: "md:w-[500px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
      title: "AI self-awareness",
      discColor:'#C6C6C6',
      description:
        "AI systems demonstrate self-awareness and continuously learn to adapt, evolve, and improve performance.",
    },
    {
      id: 2,
      icon: "AudioLines",
      iconColor: "",
      cardClassName: "md:w-[500px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
       textColor:"#fff",
       discColor:'#C6C6C6',
      title: "Meta-cognitive analysis",
      description:
        "Through advanced meta-cognitive processes, the system evaluates reasoning strategies and behavioral patterns continuously.",
    },
    {
      id: 3,
      icon: "Lightbulb",
      iconColor: "",
       textColor:"#fff",
       cardClassName: "md:w-[500px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
       discColor:'#C6C6C6',
      title: "Improvement identification",
      description:
        "The platform identifies performance gaps, inefficiencies, and optimization opportunities across decision-making workflows.",
    },
    {
      id: 4,
      icon: "Bot",
      iconColor: "",
       textColor:"#fff",
       cardClassName: "md:w-[500px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
       discColor:'#C6C6C6',
      title: "Autonomous refinement",
      description:
        "Capabilities are autonomously refined over time, eliminating dependency on manual tuning or intervention.",
    },
    
  ],
};

export const LOOP_CARD_CONFIG = {
    cards: [
      {
      id: 1,
      icon: "Search",
      textColor:"#015190",
      discColor:'#626161 ',
      cardClassName: " !h-fit md:w-[375px] w-[100%]",
      iconColor: "#015190",
      title: "Continuous analysis",
      description:
        "Every decision and outcome is automatically captured and analyzed for patterns, effectiveness, and potential improvement",
    },
    {
      id: 2,
      icon: "SquareChartGantt",
      iconColor: "#015190",
        cardClassName: "  !h-fit md:w-[375px] w-[100%]",
   textColor:"#015190",
      discColor:'#626161 ',
      title: "Meta-cognitive processing",
      description:
        "Advanced algorithms evaluate thinking processes themselves, identifying cognitive biases and optimization opportunities.",
    },
    {
      id: 3,
      icon: "ChartSpline",
      iconColor: "#015190",
        cardClassName: "!h-fit  md:w-[375px] w-[100%]",
       textColor:"#015190",
      discColor:'#626161 ',
      title: "Autonomous refinement",
      description:
        "Self-directed improvements are implemented without human intervention, ensuring continuous evolution and adaptation.",
    }
   
  ],
};

export const Memory_CONFIG = {
   title: "Memory Distillation",
   bodyclass:"bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] text-white",
  subtitle:
    "The reflective memory module represents a breakthrough in AI <br/> self-awareness and continuous learning.",
    cards: [
    {
      id: 1,
      icon: "ChartArea",
      textColor:"#fff",
      iconColor: "",
        cardClassName: "lg:w-[365px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
      title: "Insight Extraction",
      discColor:'#C6C6C6',
      description:
        "Key learnings are identified and extracted from vast amounts of interaction data.",
    },
    {
      id: 2,
      icon: "Brain",
      iconColor: "",
      cardClassName: "lg:w-[365px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
       textColor:"#fff",
       discColor:'#C6C6C6',
      title: "Knowledge Compression",
      description:
        "Complex patterns are distilled into efficient, actionable knowledge representations.",
    },
    {
      id: 3,
      icon: "DatabaseZap",
      iconColor: "",
       textColor:"#fff",
       cardClassName: "lg:w-[365px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
       discColor:'#C6C6C6',
      title: "Memory Integration",
      description:
        "Refined insights are seamlessly integrated into the core knowledge base.",
    }
    
  ],
};

export const ATTENTION_FLOW_CONFIG = {

  steps: [
    {
      id: "signal",
      label: "Signal Generation",
      icon: {
        name: "Upload",
        size: "32",
      },
    },
    {
      id: "routing",
      label: "Attention Routing",
      icon: {
        name: "Network",
        size: "32",
      },
    },
    {
      id: "policy",
      label: "Policy Gating",
      icon: {
        name: "Funnel",
        size: "32",
      },
    },
    {
      id: "ranked",
      label: "Ranked Output",
      icon: {
        name: "Award",
        size: 32,
      },
    },
  ],
};