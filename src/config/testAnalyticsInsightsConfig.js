export const TEST_ANALYTICS_INSIGHTS_HEADER_CONFIG = {
  heading: "Test Analytics & Insights",
  headingclass:"text-[#fff]",
  paragraph:
    "Transform your testing data into actionable intelligence with real-time analytics and predictive insights..",
    headclass:false,
  buttons: [
    {
      text: "Request Demo",
      className:
        "py-5 px-6 min-w-[228px] font-primary font-[600] text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
      href: "/demo",
        icon: "Play",
        hoverIcon:false

        
    },
    {
      text: "View Architecture",
      useCommonSvg:true,
      className: "py-5 min-w-[228px] px-6 font-primary font-[600] text-[16px] leading-[120%] rounded-lg text-white bg-primary-gradient flex items-center gap-2",
      href: "/platform-architecture",
        icon: "CircleArrowOutUpRight",
    },
  ],
};



export  const ANALYTICS_TABS_CONFIG = [
  {
    id: "realtime-analytics",
    label: "Real-time Analytics",
    iconSrc: "/svg/chart-line.svg",
    iconSize: 22,
  },
  {
    id: "automated-reporting",
    label: "Automated reporting",
    iconSrc: "/svg/shield-check.svg",
    iconSize: 22,
  },
  {
    id: "ml-powered-insights",
    label: "Ml-powered insights",
    iconSrc: "/svg/braindark.svg",
    iconSize: 20,
  },
  {
    id: "risk-prediction",
    label: "Risk prediction",
    iconSrc: "/svg/repeat-2.svg",
    iconSize: 22,
  },
];



export const TEST_ANALYTICS_STEPS_CONFIG = [
  {
    step: "1",
    title: "Data Collection",
    description:
      "Automatically ingests test data from multiple sources including CI/CD pipelines, test frameworks, and monitoring tools.",
  },
  {
    step: "2",
    title: "Data Processing",
    description:
      "Processes and normalizes data using advanced algorithms to identify patterns, trends, and anomalies across test suites.",
  },
  {
    step: "3",
    title: "Insight Generation",
    description:
      "Applies machine learning models to generate actionable insights, predictions, and recommendations for optimization.",
  },
  {
    step: "4",
    title: "Reporting & Alerts",
    description:
      "Delivers real-time dashboards, automated reports, and intelligent alerts to keep teams informed and proactive.",
  },
];

export const TEST_ANALYTICS_INSIGHTS_CONFIG = {
  topRow: [
    {
      id: "testCoverage",
      iconName: "AlertCircle", 
      value: "95%", 
      description:
        "Test coverage visibility with gap identification and recommendations",
      cardClassName: "md:w-[293px] w-[100%]",
      iconWrapperClass: "text-[#015190]",
      flag: {
        text: "Coverage",
        className: "bg-[#42ABDF40] rounded-[100px] py-2 px-3 text-[#015190] font-inter font-medium text-[12px] leading-[140%] tracking-[0.04em]",
      },
    },
    {
      id: "fasterDeployments",
      iconName: "Rocket",
      value: "60%",
      description:
        "Faster test execution through intelligent optimization and parallelization",
      cardClassName: "md:w-[293px] w-[100%]",
      iconWrapperClass: "text-[#015190]",
      flag: {
        text: "Speed",
        className: "bg-[#42ABDF40] rounded-[100px] py-2 px-3 text-[#015190] font-inter font-medium text-[12px] leading-[140%] tracking-[0.04em]",
      }
    },
    {
      id: "costReduction",
      iconName: "DollarSign",
      value: "40%",
      description:
        "Reduction in testing costs through automation and resource optimization",
      cardClassName: "md:w-[293px] w-[100%]",
      iconWrapperClass: "text-[#015190]",
      flag: {
        text: "Cost",
        className: "bg-[#42ABDF40] rounded-[100px] py-2 px-3 text-[#015190] font-inter font-medium text-[12px] leading-[140%] tracking-[0.04em]",
      }
    },
    {
      id: "riskMitigation",
      iconName: "TriangleAlert",
      value: "85%",
      description:
        "Early risk detection preventing production issues and downtime",
      cardClassName: "md:w-[293px] w-[100%]",
      iconWrapperClass: "text-[#015190]",
      flag: {
        text:"Risk",
        className: "bg-[#42ABDF40] rounded-[100px] py-2 px-3 text-[#015190] font-inter font-medium text-[12px] leading-[140%] tracking-[0.04em]",
      }
    },
  ],
};

export const TEST_ANALYTICS_USP_CONFIG = {
  title: "System Architecture",
  subtitle: "Deep dive into HAMN’s layered attention mechanism",
  bodyclass: true,

  cards: [
    {
      id: 1,
      icon: "MessageCircle",
      title: "CI/CD pipeline optimization",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[364px] w-[100%]",
      description:
        "A fintech company reduced their deployment time by 50% by identifying bottlenecks in their test suite and optimizing test execution order based on failure probability.",
     
    },

    {
      id: 2,
      icon: "FileText",
      title: "Predictive quality assurance",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[364px] w-[100%]",
      description:
        "An e-commerce platform prevented 33 major outages by using predictive analytics to identify high-risk code changes before they reached production.",
     
    },

    {
      id: 3,
      icon: "CodeXml",
      title: "Resource allocation",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[364px] w-[100%]",
      description:
        "A healthcare software company optimized their testing resources by 35% using data-driven insights to allocate testing efforts based on risk and impact analysis.",
      
    },
  ],
};


export const TEST_ANALYTICS_CTA_CONFIG = {
  heading: "Ready to transform your enterprise",
  paragraph:
    "Join hundreds of engineering teams who trust our platform to deliver better software faster with data-driven insights.",
  backgroundImage: "/bg/gradient.png",
  buttons: [
    {
      text: "Request Demo",
      className:
        "py-5 px-6 min-w-[253px]   font-primary font-semibold text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
      icon: "Play",
      hoverIcon: false,
      iconSize: "20px",
      href: "/demo",
    },
    {
      text: "View Architecture",
      className:
        "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-semibold leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      href: "/platform-architecture",
      icon: "CircleArrowOutUpRight",
      iconSize: "20px",
    },
  ],
};