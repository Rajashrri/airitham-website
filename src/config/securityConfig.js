export const Security_HEADER = {
  heading: "Enterprise-grade Security & <br/> Compliance by Design",
   headclass:"pt-0  text-white",
   headingclass:"text-[#fff]",
  paragraph:
    "Security, privacy, and governance embedded across every layer of the autonomous testing platform.",
//   backgroundImage: "/bg/gradient.png",
  buttons: [
   {
  text: "Request Documentation",
  className:
    " text-[#015190] bg-white",
  icon: "",
  hoverIcon:true,
  iconSize: "20px",
  // href: "",
      icon: "CircleArrowOutUpRight",
},
{
  text: "Talk to Security Team",
  className:
    " bg-primary-gradient text-white",
  href: "/contact-us",
  icon: "",
  iconSize: "20px",
      icon: "CircleArrowOutUpRight",
}

  ],
};



export const CORE_MODULE_CONFIG = {
   title: "Enterprise security capabilities",
   bodyclass:"bg-[#fff] text-[#00273A] mt-[-100px] relative z-10 ",
   headcolor:"#015190",
   paracolor:"",
   
  // subtitle:
    // "A revolutionary approach to real-time context distribution that enables AI agents, devices, and subsystems to maintain synchronized awareness while preserving organizational autonomy and security",
    cards: [
    {
      id: 1,
      icon: "CircleQuestionMark",
      textColor:"#1E1E1E",
      iconColor: "#015190",
      title: "Zero-trust architecture",
      discColor:'#626161',
      description:
        "Never trust, always verify. Comprehensive identity and device verification for all access.",
    },
    {
      id: 2,
      icon: "CircleOff",
      iconColor: "#015190",
       textColor:"#1E1E1E",
       discColor:'#626161',
      title: "Tenant isolation",
      description:
        "Complete data separation between customers with cryptographic boundaries.",
    },
    {
      id: 3,
      icon: "Bot",
      iconColor: "#015190",
       textColor:"#1E1E1E",
       discColor:'#626161',
      title: "Secure agent execution",
      description:
        "Sandboxed AI agents with controlled access and monitored execution environments.",
    },
    {
      id: 4,
      icon: "KeyRound",
      iconColor: "#015190",
       textColor:"#1E1E1E",
       discColor:'#626161',
      title: "Encrypted memory & logs",
      description:
        "End-to-end encryption for all data processing, storage, and audit trails.",
    },
    {
      id: 5,
      icon: "Search",
      iconColor: "#015190",
       textColor:"#1E1E1E",
       discColor:'#626161',
      title: "Auditability & traceability",
      description:
        "Comprehensive logging and monitoring for compliance and security investigations.",
    },
    {
      id: 6,
      icon: "Brain",
       textColor:"#1E1E1E",
      iconColor: "#015190",
      title: "Governance-first AI",
      discColor:'#626161',
      description:
        "Responsible AI practices with explainability, bias detection, and human oversight.",
    },
  ],
};


export const SECURITY_FAQ_CONFIG = [
  {
    id: 1,
    question: "Is customer data used to train models?",
    answer:
      "Autonomous Testing is an AI-driven approach that automatically generates, executes, and maintains test cases without human intervention. Unlike traditional test automation that requires manual script creation, autonomous systems use machine learning to understand application behavior and dynamically create comprehensive test coverage.",
  },
  {
    id: 2,
    question: "How are AI agents sandboxed?",
    answer:
      "Traditional automation relies on manually written scripts, whereas autonomous testing adapts automatically to changes using AI and self-healing mechanisms.",
  },
  {
    id: 3,
    question: "Can this run fully on-premises?",
    answer:
      "AI systems are evaluated using benchmarks, validation pipelines, accuracy metrics, and real-world performance testing.",
  },
  {
    id: 4,
    question: "How are audit logs handled?",
    answer:
      "We support cloud, on-premise, and hybrid deployment models.",
  },
];


export const SECURITY_CTA_CONFIG = {
  heading: "Security you can trust. <br class=' hidden sm:block' /> Autonomy you can scale.",
   paragraph:
    "Ready to implement enterprise-grade <br class=' hidden sm:block' /> autonomous testing with confidence?",
  backgroundImage: "/bg/gradient.png",
  buttons: [
  {
    text: "Request Enterprise Demo",
    className: " text-[#015190] bg-white ",
    icon: "CircleArrowOutUpRight",
    href: "/demo",
    
    
  },
  {
    text: "Talk to Security Team",
    icon: "CircleArrowOutUpRight",
          className:
        " bg-primary-gradient text-white",
    href: "/contact-us",
  },
  ],
};