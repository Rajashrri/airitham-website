export const ABOUT_HEADER_CONFIG = {
  heading: "About us",
  paragraph:
    "Building intelligent systems that understand context and validate <br class='md:block hidden' /> behavior—autonomously.",
    headclass:false,
    headingclass:"text-[#fff]",
  buttons:[]
};


export const HOW_THEY_WORK_TOGETHER_CONFIG = {
  title: "How they work together",
  titleClassName:"text-[#015190]",

  center: {
    title: "Shared Intelligence",
    subtitle: "& Feedback Loop",
    icon: "Settings",
    useGradientBg: true,
    roundPill: true,
    iconSize: 28,
  },

  cards: [
    {
      id: "sectionA",
      title: "Context Intelligence",
      icon: "Settings",
      iconSize:"32",
      points: [
        { label: "Context graphs", iconSrc: "/svg/circle-check.svg" },
        { label: "Memory systems" , iconSrc: "/svg/circle-check.svg"}, 
        { label: "Reasoning engines", iconSrc: "/svg/circle-check.svg" },
      ],
    },
    {
      id: "sectionB",
      title: "Autonomous Testing",
      icon: "Settings",
      iconSize:"32",
      points: [
        { label: "Autonomous agents" , iconSrc: "/svg/circle-check.svg"}, 
        { label: "Execution engines", iconSrc: "/svg/circle-check.svg"},
        { label: "Evaluation systems" , iconSrc: "/svg/circle-check.svg" }, 
      ],
    },
  ],
};




export const ABOUT_CTA_CONFIG  = {
  heading: "Ready to explore our platforms?",
  paragraph:
    "Discover how our dual-platform approach can transform your systems",
  backgroundImage: "/bg/gradient.png",
  buttons: [
  
  {
    text: "Explore Our Platforms",
    className: " tracking-[0.02em] text-[#015190] bg-green-900 bg-white rounded-lg flex items-center ",
    icon: "CircleArrowOutUpRight",
    iconSize: "20px",
    href: "",
     useCommonSvg:true
  },
]
 }



 export const DUAL_PLATFORM_CONFIG = {
  title: "A dual-platform intelligence company",
  subtitle:
    "We build enterprise platforms that address two foundational challenges of modern systems",

  cards: [
    {
      id: 1,
      icon: "TestTubes",
      iconColor: "#015190",
      title: "Autonomous testing platform",
      description: "Ensuring software and AI systems behave correctly",
      cardClassName: " w-full sm:w-[400px] border-[#D9D9D9]",
    },
    {
      id: 2,
      icon: "Network",
      iconColor: "#015190",
      title: "Context intelligence platform",
      description:
        "Enabling systems to understand, reason, and retain context over time",
      cardClassName: " w-full sm:w-[400px] border-[#D9D9D9]",
    },
  ],

  dualPlatforms: [
    {
      id: 1,
      icon: "Settings",
      label: "Testing\nPlatform",
      bgGradient: "linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)",
      iconColor: "#fff",
    },
    {
      id: 2,
      icon: "Brain",
      label: "Intelligence\nPlatform",
      bgGradient: "linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)",
      iconColor: "#fff",
    },
  ],
};

export const WHY_TWO_PLATFORMS_CONFIG = {
  title: "Why two platforms",
  cards: [
    {
      id: 1,
      icon: "Rocket",
      iconSize: 32,
      title: "Software systems are becoming autonomous",
      useGradientBg: true,
      roundPill: true,
    },
    {
      id: 2,
      icon: "Brain",
      iconSize: 32,
      title: "Ai systems are context dependent",
      useGradientBg: true,
      roundPill: true,
    },
    {
      id: 3,
      icon: "ShieldCheck",
      iconSize: 32,
      title: "Quality without context is incomplete",
      useGradientBg: true,
      roundPill: true,
    },
    {
      id: 4,
      icon: "ShieldAlert",
      iconSize: 32,
      title: "Context without validation is risky",
      useGradientBg: true,
      roundPill: true,
    },
  ],
};
