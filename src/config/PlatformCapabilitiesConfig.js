export const Pc_HEADER = {
  heading: "Platform Capabilities",
//   subheading:"Autonomous intelligence across the testing lifecycle.",
  headclass:"pt-[0px]",
  headingclass:"text-[#fff]",
  paragraph:
    "Autonomous intelligence across the testing lifecycle.",
//   backgroundImage: "/bg/gradient.png",
  buttons: [
    {
      text: "View Documentation",
      className:
        " text-[#015190] bg-white",
      // href: "",
      hoverIcon:false,
        icon: "Eye",
    },
    {
      text: "Explore Architecture",
      className: " text-white bg-primary-gradient ",
      href: "/platform-architecture",
        icon: "CircleArrowOutUpRight",
    },
  ],
};


export const pc_USP_CONFIG = {
  title: "System Architecture",
  subtitle: "Deep dive into HAMN’s layered attention mechanism",
  bodyclass: "pt-0",

  cards: [
    {
      id: 1,
      icon: "Bot",
      title: "Autonomous test generation",
      discColor: "#626161",
      textColor: "#000",
      description:
        "Automatically creates comprehensive test suites using AI-powered analysis of your application.",

          showLink: true,
      linkText: "Learn More ",
      href: "/architecture/agentic",
      linkicon:"CircleArrowOutUpRight"
    
    },
     {
      id: 2,
      icon: "Play",
      title: "Intelligent test execution",
      discColor: "#626161",
      textColor: "#000",
      description:
        "Smart test execution with dynamic prioritization and parallel execution capabilities.",

          showLink: true,
      linkText: "Learn More ",
      href: "/architecture/agentic",
      linkicon:"CircleArrowOutUpRight"
    
    },
     {
      id: 3,
      icon: "Brain",
      title: "LLM-based evaluation",
      discColor: "#626161",
      textColor: "#000",
      description:
        "Advanced language model evaluation for complex testing scenarios and edge cases.",

          showLink: true,
      linkText: "Learn More ",
      href: "/architecture/agentic",
      linkicon:"CircleArrowOutUpRight"
    
    },
     {
      id: 4,
      icon: "ShieldHalf",
      title: "Self-healing tests",
      discColor: "#626161",
      textColor: "#000",
      description:
        "Automatically adapt and repair test scripts when application changes are detected.",

          showLink: true,
      linkText: "Learn More ",
      href: "/architecture/agentic",
      linkicon:"CircleArrowOutUpRight"
    
    },
     {
      id: 5,
      icon: "GraduationCap",
      title: "Continuous learning engine",
      discColor: "#626161",
      textColor: "#000",
      description:
        "Machine learning algorithms that improve testing accuracy and efficiency over time.",

          showLink: true,
      linkText: "Learn More ",
      href: "/architecture/agentic",
      linkicon:"CircleArrowOutUpRight"
    
    },
     {
      id: 6,
      icon: "ChartSpline",
      title: "Test analytics & insights",
      discColor: "#626161",
      textColor: "#000",
      description:
        "Comprehensive reporting and analytics to optimize testing strategy and outcomes.",

          showLink: true,
      linkText: "Learn More ",
      href: "/architecture/agentic",
      linkicon:"CircleArrowOutUpRight"
    
    },
     {
      id: 7,
      icon: "GitBranch",
      title: "CI/CD & DevOps Integration",
      discColor: "#626161",
      textColor: "#000",
      description:
        "Seamless integration with your existing development and deployment pipelines.",

          showLink: true,
      linkText: "Learn More ",
      href: "/architecture/agentic",
      linkicon:"CircleArrowOutUpRight"
    
    },

   
  ],
};

export const TIMELINE_SECTION_CONFIG = {
   title: "How It Works",
 cards: [
   {
    id: 1,
    title: "Application analysis and mapping",
    align: "right",
  },
  {
    id: 2,
    title: "User journey identification",
    align: "left",
  },
  {
    id: 3,
    title: "Automated test  script generation",
    align: "right",
  },
  {
    id: 4,
    title: "Continuous optimization and updates",
    align: "left",
  },
  ]

}