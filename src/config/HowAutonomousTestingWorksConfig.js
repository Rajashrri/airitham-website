    export const Memory_HEADER = {
    heading: "How Autonomous Testing Works",
    headclass:"",
    headingclass:"text-[#fff]",
    paragraph:
        "A closed-loop system powered by agents, AI, and continuous learning.",
    //   backgroundImage: "/bg/gradient.png",
   buttons: [
    {
      text: "View Documentation",
      className:
        "py-5 px-6 min-w-[228px] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
      icon: "Eye",
      hoverIcon: false,
      iconSize: "20px",
      href: "",
    },
    {
      text: "Explore Technology",
      className:
        "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      href: "",
      icon: "CircleArrowOutUpRight",
      iconSize: "20px",
    },
  ],
    };

    export const at_USP_CONFIG = {
    title: "System Architecture",
    subtitle: "Deep dive into HAMN’s layered attention mechanism",
    bodyclass: "py-[90px] text-center rounded-[100px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white",

    cards: [
        {
        id: 1,
        icon: "ListCheck",
        title: "Planner agent",
        discColor: "#D9D9D9",
        cardClassName:"md:w-[240px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-2",
        textColor: "#fff",
        description:
            "Strategically decides what to test based on system changes and risk.",

            
        
        },
        {
        id: 2,
        icon: "CodeXml",
        title: "Generator agent",
        discColor: "#D9D9D9",
        textColor: "#fff",
        cardClassName:"md:w-[240px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-2",
        description:
            "Creates intelligent test logic and scenarios automatically.",

            
        
        },
        {
        id: 3,
        icon: "Rocket",
        title: "Executor agent",
        discColor: "#D9D9D9",
        textColor: "#fff",
        cardClassName:"md:w-[240px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-2",
        description:
            "Runs tests across multiple environments and platforms.",

            
        
        },
        {
        id: 4,
        icon: "Star",
        title: "Evaluator agent",
        discColor: "#D9D9D9",
        textColor: "#fff",
        cardClassName:"md:w-[240px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-2",
        description:
            "Scores and analyzes test results with precision.",

            
        
        },
        {
        id: 5,
        icon: "Database",
        title: "Memory agent",
        discColor: "#D9D9D9",
        textColor: "#fff",
        cardClassName:"md:w-[240px] w-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-2",
        description:
            "Retains context and learns from historical patterns.",

            
        
        }

    
    ],
    };

     export const feedback_USP_CONFIG = {
    title: "Continuous feedback loop",
    subtitle: "Learn from every test run to continuously improve quality and coverage",
    // bodyclass: "py-[90px]",


    cards: [
        {
        id: 1,
        icon: "TriangleAlert",
        title: "Failure detection",
        iconColor:"#015190",
        discColor: "#626161",
        cardClassName:"md:w-[360px] w-[100%] bg-[#fff] p-2",
        textColor: "#1E1E1E",
        description:
            "When tests fail, the system analyzes root causes and adjusts test strategies to prevent similar issues.",

            
        
        },
        {
        id: 2,
        icon: "RefreshCcw",
        title: "Drift monitoring",
         iconColor:"#015190",
        discColor: "#626161",
        textColor: "#1E1E1E",
        cardClassName:"md:w-[360px] w-[100%] bg-[#fff] p-2",
        description:
            "Detects behavioral drift in your system and automatically generates new tests to cover edge cases.",

            
        
        },
        {
        id: 3,
        icon: "CircleAlert",
        title: "Feature learning",
         iconColor:"#015190",
        discColor: "#626161",
        textColor: "#1E1E1E",
        cardClassName:"md:w-[360px] w-[100%] bg-[#fff] p-2",
        description:
            "New features are automatically identified and integrated into the testing suite with minimal human input.",

            
        
        }

    
    ],
    };

    
export const PLANING_CTA_CONFIG = {
  heading: "Ready to experience autonomous testing?",
  paragraph:"Join teams that have reduced testing time by 80% with AI-powered automation.",
  backgroundImage: "/bg/gradient.png",
  wrapperClassName:"",
  buttons: [
    {
        text: "Schedule Demo",
        className:
            "py-5 px-6 min-w-[228px] font-primary font-[600] text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
        icon: "CircleArrowOutUpRight",
        hoverIcon:true,
        iconSize: "20px",
        href: "/demo",
        },
    {
      text: "Start Free Trial",
      icon:"CircleArrowOutUpRight",
      className:
        "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-[600] leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
    //   href: "#!",
    },
  ],
};