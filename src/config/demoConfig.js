export const DEMO_HEADER_CONFIG = {
  heading: "See Autonomous Testing in Action",
  headclass: false,
  headingclass:"text-[#fff]",
  paragraph:
    "Experience how agentic AI transforms software and AI quality at enterprise scale.",
  buttons: [
    {
      text: "Schedule Architecture Review",
      className:
        "py-5 px-6 min-w-[228px] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
      href: "",
          icon: "CircleArrowOutUpRight",
    },
    {
      text: "Request Demo",
      className: "py-5 min-w-[228px] px-6 font-primary font-medium text-[16px] leading-[120%] rounded-lg text-white bg-primary-gradient flex items-center gap-2",
      href: "",
          icon: "CircleArrowOutUpRight",
    },
  ],
};

// useBg.js

export const PLATFORM_FEATURES_CONFIG = {
  title: "What You'll See in the Demo",
  subtitle:
    "Designed for leaders driving quality transformation at enterprise scale",

  cards: [
    {
      id: 1,
      icon: "WandSparkles",
      iconColor: "#FFFFFF", // icon white because hasBg is true
      bgColor: "#015190", // background color for icon
      title: "Autonomous Test Generation",
      description:
        "Watch AI Agents Analyze Your Systems And Generate Comprehensive Test Suites Automatically.",
      cardClassName: "sm:w-[300px] w-[100%]  border-[#D9D9D9]",
      hasBg: true,
    },
    {
      id: 2,
      icon: "Network",
      iconColor: "#FFFFFF",
        bgColor: "#015190", // background color for icon
      title: "Multi-Agent Execution",
      description:
        "See Coordinated Agents Execute Tests Across Multiple Environments Simultaneously.",
      cardClassName: "sm:w-[300px] w-[100%]  border-[#D9D9D9]",
      hasBg: true,
    },
    {
      id: 3,
      icon: "Brain",
      iconColor: "#FFFFFF",
      bgColor: "#015190",
      title: "LLM-Based Evaluation",
      description:
        "Experience Intelligent Test Result Analysis And Automated Quality Scoring.",
      cardClassName: "sm:w-[300px] w-[100%]  border-[#D9D9D9]",
      hasBg: true,
    },
    {
      id: 4,
      icon: "ChartPie",
      iconColor: "#FFFFFF",
        bgColor: "#015190", // background color for icon
      title: "Analytics & Insights",
      description:
        "Explore Enterprise Dashboards With Actionable Quality Intelligence.",
      cardClassName: "sm:w-[300px] w-[100%]  border-[#D9D9D9]",
      hasBg: false,
      hasBg: true,
    },
  ],
};

export const DEMO_TARGET_AUDIENCE_CONFIG = {
  title: "Who This Demo Is For",
  subtitle:
    "Designed For Leaders Driving Quality Transformation At Enterprise Scale",

  cards: [
    {
      id: 1,
      icon: "ShieldCheck", // Icon name, you can choose an appropriate one based on your icon library
      iconColor: "#FFFFFF", // White icon for contrast
      bgColor: "#015190", // Background color for the icon
      title: "QA & Quality Engineering Leaders",
      description: "Transform your testing strategy with autonomous agents",
      cardClassName: "sm:w-[300px] w-[100%] lg: border-[#D9D9D9] p-4",
      hasBg: true,
    },
    {
      id: 2,
      icon: "WandSparkles", // Choose another relevant icon
      iconColor: "#FFFFFF",
      title: "Engineering & Platform Leaders",
        bgColor: "#015190", // Maintain consistency with the red background
      description: "Scale quality across your development lifecycle",
      cardClassName: "sm:w-[300px] w-[100%] lg: border-[#D9D9D9] p-4",
      hasBg: true,
    },
    {
      id: 3,
      icon: "Bot", // Use a relevant icon for AI/ML teams
      iconColor: "#FFFFFF",
      bgColor: "#015190", // Maintain consistency with the red background
      title: "AI/ML Teams",
      description: "Ensure ai system reliability and performance",
      cardClassName: "sm:w-[300px] w-[100%] lg: border-[#D9D9D9] p-4",
      hasBg: true,
    },
    {
      id: 4,
      icon: "Rocket",
      iconColor: "#FFFFFF",
      bgColor: "#015190", // If no background for the icon
      title: "Product & Delivery Leaders",
      description: "Accelerate releases with confidence",
      cardClassName: "sm:w-[300px] w-[100%] lg: border-[#D9D9D9] p-4",
      hasBg: true,
    },
  ],
};

export const DEMO_CTA_CONFIG = {
  heading: "Not sure which path is right for you?",
  backgroundImage: "/bg/gradient.png",
  buttons: [
    {
      text: "Schedule Architecture Review",
      className:
        "px-9 py-5 min-w-[228px] mt-4 font-primary font-medium leading-[1.2] text-[16px] tracking-[0.02em] text-[#015190] bg-white rounded-lg flex items-center gap-2",
      icon: "CircleArrowOutUpRight",
      iconSize: "20px",
      useCommonSvg: true,
      href: "",
    },
    {
      text: "Request Demo",
      className:
        "text-[16px]  min-w-[228px] py-5 mt-4 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      icon: "CircleArrowOutUpRight",
      iconSize: "20px",
      href: "",
      
    },
  ],
};
