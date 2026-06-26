export const QA_TESTING_USP_CONFIG = {
     title: "Ai-driven workflows",
   bodyclass:false,
  cards: [
    {
      id: 1,
      icon: "Settings",
      title: "Functional & regression testing",
      textColor: "#1E1E1E",
      iconColor: "#015190",
      discColor: "#626161",
      cardClassName: "border-[#D9D9D9] coretext lg:w-[23%] md:w-[40%] w-[100%]",
      description:
        "Ensure flawless performance across all user journeys with intelligent, automated, and repeatable testing.",
      points: {
        icon: {
          path: "M7.20156 9.59961L8.80156 11.1996L12.0016 7.99961M17.6016 9.59961C17.6016 14.0179 14.0198 17.5996 9.60156 17.5996C5.18328 17.5996 1.60156 14.0179 1.60156 9.59961C1.60156 5.18133 5.18328 1.59961 9.60156 1.59961C14.0198 1.59961 17.6016 5.18133 17.6016 9.59961Z",
          gradient: ["#FFA68D", "#FD3A84"],
        },
        labels: [
          "Unit, integration & end-to-end testing",
          "Automated regression coverage",
          "CI/CD validation",
          "Real-time error detection",
        ],
        textGradientColor: "#015190",
        discGradientColor:
          "radial-gradient(66.19% 497.1% at 50% 50%, #015190 0%, #015190 50.32%, #6AC0E6 100%)",
      },
    },

    {
      id: 2,
      icon: "Lock",
      iconColor: "#015190",
      title: "Security & compliance testing",
      textColor: "#1E1E1E",
      discColor: "#626161",
      cardClassName: "border-[#D9D9D9] coretext lg:w-[23%] md:w-[40%] w-[100%]",
      description:
        "Validate application safety, protect sensitive data, and meet industry-grade standards.",
      points: {
        icon: {
          path: "M7.20156 9.59961L8.80156 11.1996L12.0016 7.99961M17.6016 9.59961C17.6016 14.0179 14.0198 17.5996 9.60156 17.5996C5.18328 17.5996 1.60156 14.0179 1.60156 9.59961C1.60156 5.18133 5.18328 1.59961 9.60156 1.59961C14.0198 1.59961 17.6016 5.18133 17.6016 9.59961Z",
          gradient: ["#FFA68D", "#FD3A84"],
        },
        labels: [
          "Vulnerability scanning & pen testing",
          "API security validation",
          "Data privacy enforcement",
          "Encryption & access control",
        ],
        textGradientColor: "#015190",
        discGradientColor:
          "radial-gradient(66.19% 497.1% at 50% 50%, #015190 0%, #015190 50.32%, #6AC0E6 100%)",
          // "background: radial-gradient(66.19% 497.1% at 50% 50%, #015190 0%, #015190 50.32%, #6AC0E6 100%);

      },
    },

    {
      id: 3,
      icon: "Smartphone",
      iconColor: "#015190",
      title: "Usability & accessibility testing",
      textColor: "#1E1E1E",
      discColor: "#626161",
      cardClassName: "border-[#D9D9D9] coretext lg:w-[23%] md:w-[40%] w-[100%]",
      description:
        "Deliver outstanding user experiences across devices with automated UX validation.",
      points: {
        icon: {
          path: "M7.20156 9.59961L8.80156 11.1996L12.0016 7.99961M17.6016 9.59961C17.6016 14.0179 14.0198 17.5996 9.60156 17.5996C5.18328 17.5996 1.60156 14.0179 1.60156 9.59961C1.60156 5.18133 5.18328 1.59961 9.60156 1.59961C14.0198 1.59961 17.6016 5.18133 17.6016 9.59961Z",
          gradient: ["#FFA68D", "#FD3A84"],
        },
        labels: [
          "UI/UX consistency checks",
          "Cross-browser compatibility",
          "WCAG & ADA validation",
          "UX heatmap insights",
        ],
        textGradientColor: "#015190",
        discGradientColor:
          "radial-gradient(66.19% 497.1% at 50% 50%, #015190 0%, #015190 50.32%, #6AC0E6 100%)",
      },
    },

    {
      id: 4,
      icon: "Shuffle",
      iconColor: "#015190",
      title: "Data & integration testing",
      textColor: "#1E1E1E",
      discColor: "#626161",
      cardClassName: "border-[#D9D9D9] coretext lg:w-[23%] md:w-[40%] w-[100%]",
      description:
        "Ensure every integration point is accurate, reliable, and fully synchronized.",
      points: {
        icon: {
          path: "M7.20156 9.59961L8.80156 11.1996L12.0016 7.99961M17.6016 9.59961C17.6016 14.0179 14.0198 17.5996 9.60156 17.5996C5.18328 17.5996 1.60156 14.0179 1.60156 9.59961C1.60156 5.18133 5.18328 1.59961 9.60156 1.59961C14.0198 1.59961 17.6016 5.18133 17.6016 9.59961Z",
          gradient: ["#FFA68D", "#FD3A84"],
        },
        labels: [
          "Database validation",
          "API contract testing",
          "ERP, CRM & payment gateway",
          "Data flow consistency",
        ],
        textGradientColor: "#015190",
        discGradientColor:
          "radial-gradient(66.19% 497.1% at 50% 50%, #015190 0%, #015190 50.32%, #6AC0E6 100%)",
      },
    },
  ],
};


export const CORE_TEST_MODULE_CONFIG = {
   title: "Automation lifecycle stages",
   bodyclass:"text-white bg-[linear-gradient(180deg,#042539_0%,#000000_100%)]",
  subtitle:
    "Complete testing workflow from learning to evaluation",
    // :"An intelligent automation pipeline that dynamically improves with each cycle."
    cards: [
    {
      id: 1,
      icon: "BookCheck",
      // linkIconSrc:"./svg/grid/book-check.svg",
      textColor:"#fff",
      gradient:true,
      cardClassName:" w-full md:w-[23%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(131,131,131,0.1)_100%)]",
      iconColor: "",
      title: "Learn",
      discColor:'#A1A1A1',
      description:
        "Analyze system behavior patterns, understand dependencies, identify high-risk areas, and map user flows automatically.",
    },
    {
      id: 2,
      icon: "PencilRuler",
      // linkIconSrc:"./svg/grid/pencil-ruler.svg",
      cardClassName:"w-full md:w-[23%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(131,131,131,0.1)_100%)]",
      iconColor: "",
       textColor:"#fff",
       discColor:'#A1A1A1',
      title: "Create",
      description:
        "Generate intelligent automated test cases using systems understanding, code insights, and historical behavior.",
    },
    {
      id: 3,
      icon: "CirclePlay",
      // linkIconSrc:"./svg/grid/circle-plus.svg",
      cardClassName:"w-full md:w-[23%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(131,131,131,0.1)_100%)]",
      iconColor: "",
       textColor:"#fff",
       discColor:'#A1A1A1',
      title: "Execute",
      description:
        "Run end-to-end test suites with optimized scheduling, parallel execution, and real-time monitoring dashboards.",
    },
    {
      id: 4,
      icon: "ChartBarBig",
      // linkIconSrc:"./svg/grid/chart-bar-big.svg",
      iconColor: "",
      cardClassName:"w-full md:w-[23%] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(131,131,131,0.1)_100%)]",

       textColor:"#fff",
       discColor:'#A1A1A1',
      title: "Report",
      description:
        "Produce advanced analytics, defect heatmaps, coverage summaries, and continuous improvement recommendations.",
    },
    
   
  ],
};


export const CORE_TEST_FEATURES_CONFIG = {
  items: [
    {
      id: 1,
      label: "Functional",
      iconType: "image",
      iconSrc: "/svg/functional.svg",
    },
    {
      id: 2,
      label: "Usability",
      iconType: "image",
      iconSrc: "/svg/puzzle.svg",
    },
    {
      id: 3,
      label: "Security",
      iconType: "image",
      iconSrc: "/svg/shield-check.svg",
    },
    {
      id: 4,
      label: "Data Testing",
      iconType: "image",
      iconSrc: "/svg/database.svg",
    },
  ],
};


export const ARCHITECTURE_LAYER_CONFIG = {
  layer1: {
    id: "layer-1",
    title: "Core Systems",
    items: [
      {
        id: 1,
        label: "Learning system",
        iconSrc: "/svg/module/graduation-cap.svg",
      },
      {
        id: 2,
        label: "Knowledge base generation system",
        iconSrc: "/svg/module/book-open-text.svg",
      },
      {
        id: 3,
        label: "Test generation subsystem",
        iconSrc: "/svg/module/book-open-check.svg",
      },
      {
        id: 4,
        label: "Test execution system",
        iconSrc: "/svg/module/layout-dashboard.svg",
      },
      {
        id: 5,
        label: "LLM based evaluation system",
        iconSrc: "/svg/module/chart-area.svg",
      },
    ],
  },

  layer2: {
    id: "layer-2",
    title: "Human feedback and pattern learning subsystem",
    points: {
      labels: [
        "Aggregates results",
        "Finds patterns & anomalies",
        "Planning, reasoning, tool use",
      ],
      textColor: "#015190",
    },
    iconSrc: "/svg/circle-check.svg",
  },

  layer3: {
    id: "layer-3",
    title: "Agentic network",
    points: {
      labels: [
        "Multi-agent orchestration",
        "Planning, reasoning, tool use",
        "Improves test strategies",
        "Self-optimizing test cycles",
      ],
      textColor: "#015190",
    },
    iconSrc: "/svg/circle-check.svg",
  },
};


export  const CORE_TEST_HEADER_CONFIG = {
  heading: "CoreTest",
  headingclass:"text-[#fff]",
  subheading:
    "Comprehensive intelligent testing for enterprise & non-ai applications",
  headclass: "",
  paragraph:
    "A unified automation platform that accelerates quality, <br class='hidden sm:block' /> ensures reliability, and delivers continuous validation across mission-critical systems.",
  buttons: [
    {
      text: "View Architecture",
      className:
        "py-5 px-6  font-primary font-[600] text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
           icon: "CircleArrowOutUpRight",
      hoverIcon: true,
      iconSize: "20px",
      href: "/platform-architecture",
    },
    {
      text: "Start Free Trial",
      className:
        "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-[600] leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      href: "",
      icon: "CircleArrowOutUpRight",
      iconSize: "20px",
    },
  ],
};

 export const CORE_TEST_CTA_CONFIG  = {
  heading: "Build better. Test smarter. <br /> Accelerate quality with coretest",
  paragraph:
    "Empower your teams with intelligent, end-to-end test automation across every layer of your enterprise stack.",
  backgroundImage: "/bg/gradient.png",
  buttons: [
  {
    text: "Request Demo",
    className: " text-[#015190] bg-white ",
    icon: "Play",
    iconSize: "20px",
    href: "",
    hoverIcon:false
  },
  {
    text: "Get Started",
          className:
        " bg-primary-gradient text-white",
    icon: "CircleArrowOutUpRight",
    iconSize: "20px",
    href: "",
  },
]
 }

