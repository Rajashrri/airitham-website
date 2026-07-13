export const AgenticArchitectureConfig = {
  heading: "Agentic architecture",
//   subheading:"AIRITHM’s Unified Evaluation Hub for AI Quality",
  headclass:"pt-[0px]",
  headingclass:"text-[#fff]",
  paragraph:
    "Coordinated AI agents driving intelligent testing decisions.",
//   backgroundImage: "/bg/gradient.png",
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


export const CORE_MODULE_CONFIG = {
   title: "Agent design",
   bodyclass:"bg-[#fff] text-[#00273A] relative z-10 ",
   headcolor:"#015190",
     paracolor:"#000",
  // subtitle:
  //   "",
    cards: [
    {
      id: 1,
      icon: "Route",
      textColor:"#000",
      iconColor: "#015190	",
        cardClassName: "md:w-[600px] w-[100%] bg-[#fff]",
      title: "Planning",
      discColor:'#626161',
      description:
        "Intelligent agents autonomously develop comprehensive test strategies, analyzing requirements and creating optimal execution plans with dynamic adaptation capabilities.",
    },
    {
      id: 2,
      icon: "Wrench",
      iconColor: "#015190	",
      cardClassName: "md:w-[600px] w-[100%] bg-[#fff]",
       textColor:"#000",
       discColor:'#626161',
      title: "Tool usage",
      description:
        "Agents leverage advanced testing tools and frameworks, intelligently selecting and orchestrating the most appropriate resources for specific testing scenarios.",
    },
    {
      id: 3,
      icon: "Lightbulb",
      iconColor: "#015190	",
       textColor:"#000",
       cardClassName: "md:w-[600px] w-[100%] bg-[#fff]",
       discColor:'#626161',
      title: "Decision autonomy",
      description:
        "Independent decision-making capabilities enable agents to adapt testing approaches in real time, prioritizing critical paths and optimizing coverage.",
    },
    {
      id: 4,
      icon: "MessageCircle",
      iconColor: "#015190	",
       textColor:"#000",
       cardClassName: "md:w-[600px] w-[100%] bg-[#fff]",
       discColor:'#626161',
      title: "Inter-agent communication",
      description:
        "Seamless communication protocols allow agents to share insights, coordinate activities, and collectively enhance testing effectiveness through collaborative intelligence.",
    },
    
  ],
};
export const CORE_MODULE_CONFIG2 = {
   title: "Orchestration & safety",
   bodyclass:true,
   headcolor:"#fff",
     paracolor:"#000",
  // subtitle:
  //   "",
    cards: [
    {
      id: 1,
      icon: "Route",
      textColor:"#fff",
      hasBg:false,
      bgColor:"linear-gradient(90deg, rgba(255, 166, 141, 0.15) 0.03%, rgba(253, 58, 132, 0.15) 100%)",
      iconColor: "",
        cardClassName: "md:w-[400px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
      title: "Task routing",
      discColor:'#D9D9D9',
      description:
        "Intelligent task distribution system that analyzes workload complexity, agent capabilities, and resource availability to optimize task allocation across the agent network. Dynamic load balancing ensures efficient utilization of system resources.",
    },
    {
      id: 2,
      icon: "Wrench",
      iconColor: "",
      cardClassName: "md:w-[400px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
       textColor:"#fff",
       discColor:'#D9D9D9',
      title: "Failure handling",
      description:
        "Robust error recovery mechanisms with automated rollback capabilities, graceful degradation strategies, and intelligent retry logic. Comprehensive logging and alerting systems ensure rapid issue identification and resolution.",
    },
    {
      id: 3,
      icon: "Lightbulb",
      iconColor: "",
       textColor:"#fff",
       cardClassName: "md:w-[400px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
       discColor:'#D9D9D9',
      title: "Guardrails & controls",
      description:
        "Multi-layered security framework with behavioral constraints, permission boundaries, and compliance monitoring. Real-time governance ensures agents operate within defined parameters while maintaining operational flexibility.",
    }
    
  ],
};


export const PLANING_CTA_CONFIG = {
  heading: "Need help?",
  paragraph:
    "Get assistance with agentic architecture implementation",
  backgroundImage: "/bg/gradient.png",
  wrapperClassName:"",
  buttons: [
  
    {
      text: "Contact Support",
      icon:"CircleArrowOutUpRight",
      className:
        "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      href: "",
    },
  ],
};