export const Context_HERO_CONFIG = {
  heading: "Context Intelligence Platform",
  paragraph:
    "Enterprise-grade AI orchestration that understands, adapts, and <br class='hidden sm:block' />evolves with you data context in real-time.",

  backgroundGradient: "linear-gradient(180deg,#00273A 0%,#1E1E1E 55.42%)",
  // imageSrc: "/automation/dashboard.webp",
  buttons: [
   {
  text: "Download Architecture Deck",
  className:
    "py-5 px-6 w-full md:w-fit flex flex-row-reverse font-primary font-medium text-[16px] leading-[120%] rounded-lg text-[#015190] bg-white",
  icon: "Download",
  hoverIcon:false,
  iconSize: "20",
  href:"",
  wrapperClass:
    "bg-[linear-gradient(86.66deg,#015190_10.85%,#FF7F7F_84.93%)] w-full sm:w-fit overflow-hidden rounded-lg p-px",
}
,
   {
  text: "Explore the Platform",
  className:
    "py-5 px-6 font-primary font-medium text-[16px] leading-[120%] rounded-lg text-white bg-primary-gradient flex items-center gap-2",
  icon: "CircleArrowOutUpRight",

  href:"/system-architecture-overview",
  iconSize: "20",
}

  ],
  badges: [
    {
      text: "Reliable Performance",
      className: "absolute left-[-16%] top-[10%]",
    },
    { text: "Fast Execution", className: "absolute right-[-10%] top-[40%]" },
    {
      text: "Simplified Insight",
      className: "absolute right-[10%] -translate-y-1/2",
    },
  ],
};

export const CONTEXT_ANALYTICS_CONFIG = {
  title: "",
  description: "",
  cards: [
    {
      id: 1,
      icon: "LineChart", // lucide-react icon
      iconColor: "#015190",
      title: "Predictive analytics",
      description:
        "Advanced forecasting with context-aware models that understands market dynamics and business cycles",
      state: "active",
      cardClassName :"border-[#D9D9D9] w-full sm:w-[340px]"
    },
    {
      id: 2,
      icon: "Users",
      iconColor: "#015190",
      title: "Personalization engine",
      description:
        "Real-time customer experience optimization based on behavioral context and preferences",
         cardClassName :"border-[#D9D9D9] w-full sm:w-[340px]"
    },
    {
      id: 3,
      icon: "Bot",
      iconColor: "#015190",
      title: "Process automation",
      description:
        "Intelligent workflow orchestration that adapts to changing business requirements automatically",
         cardClassName :"border-[#D9D9D9]  w-full sm:w-[340px]"
    },
  ],
};

export const CONTEXT_CTA_CONFIG = {
  heading: "Ready to transform your enterprise?",
  paragraph:
    "Join leading enterprises already leveraging context intelligence to drive unprecedented business outcomes",
  backgroundImage: "/bg/gradient.png",
  buttons: [
   {
  text: "Download Whitepaper",
  className:
    "px-6 flex-row-reverse min-w-[228px] leading-[1.2] font-primary font-medium rounded-lg border-2 py-5 text-[16px]",
  icon: "Download",
  hoverIcon:false,
  iconSize: "",
  href: "",
},
{
  text: "Request Demo",
  className:
    "px-6 text-[#015190] bg-white min-w-[228px] leading-[1.2] font-primary font-medium rounded-lg py-5 text-[16px]",
  href: "/demo",
  icon: "CircleArrowOutUpRight",
  iconSize: "20px",
}

  ],
};

export const WHY_CHOOSE_CIP_CONFIG = {
  title: "Why choose cip",

  cards: [
    {
      id: 1,
      icon: "FastForward", // change to your lucide icon
      iconColor: "#015190",
      title: "10x faster processing",
      description:
        "Revolutionary parallel processing architecture delivers results 10x faster than traditional AI platforms",
      borderHighlight: "#3B82F6", // optional if you want active border color
      cardClassName:" border-[#D9D9D9] w-full md:w-[46%]"

    },
    {
      id: 2,
      icon: "Brain", // change to your lucide icon
      iconColor: "#015190",
      title: "Context-aware intelligence",
      description:
        "First platform to truly understand multi-dimensional context relationships in real-time",
         cardClassName:"border-[#D9D9D9] w-full md:w-[46%]"
    },
    {
      id: 3,
      icon: "RefreshCw", // change to your lucide icon
      iconColor: "#015190",
      title: "Self-evolving models",
      description:
        "AI that learns and adapts automatically without manual retraining or intervention",
         cardClassName:"border-[#D9D9D9] w-full md:w-[46%]"
    },
    {
      id: 4,
      icon: "Globe", // change to your lucide icon
      iconColor: "#015190",
      title: "Enterprise ready",
      description:
        "Built for mission-critical applications with 99.99% uptime and enterprise-grade security",
         cardClassName:"border-[#D9D9D9] w-full md:w-[46%]"
    },
  ],
};

export const CONTEXT_CORE_PILLAR_CONFIG = {
  title: "Core platform pillars",
  description: "",
  cards: [
    {
      id: 1,
      icon: "Network",
      cardClassName:"bg-[#fff] w-full sm:w-[340px]",
      iconColor: "#015190",
      title: "Dynamic context mapping",
      description:
        "Real-time relationship discovery & contextual understanding across multi-dimensional data spaces",
    },
    {
      id: 2,
      icon: "Settings",
      iconColor: "#015190",
      title: "Adaptive intelligence",
       cardClassName:"bg-[#fff] w-full sm:w-[340px]",
      description:
        "Self-evolving algorithms that learn and adapt to changing business contexts automatically",
    },
    {
      id: 3,
      icon: "Rocket",
      iconColor: "#015190",
      title: "Quantum processing",
       cardClassName:"bg-[#fff] w-full sm:w-[340px]",
      description:
        "Parallel context analysis with quantum inspired computing for unprecedented speed",
    },
    {
      id: 4,
      icon: "ShieldCheck",
      iconColor: "#015190",
      title: "Enterprise security",
       cardClassName:"bg-[#fff] w-full sm:w-[340px]",
      description:
        "Zero trust architecture with end-to-end encryption and context aware access controls",
    },
    {
      id: 5,
      icon: "Expand",
      iconColor: "#015190",
       cardClassName:"bg-[#fff] w-full sm:w-[340px]",
      title: "Infinite scalability",
      description:
        "Cloud native architecture that scales seamlessly from startup to enterprise workloads",
    },
    {
      id: 6,
      icon: "Puzzle",
      iconColor: "#015190",
       cardClassName:"bg-[#fff] w-full sm:w-[340px]",
      title: "Universal integration",
      description:
        "Native connectors and APIs for seamless integration with existing enterprise systems",
    },
  ],
};
