export const AUTOMATION_Testing_CONFIG  = {
  title: "Two powerful testing capabilities",
  subtitle:
    "Comprehensive testing solutions for both AI and traditional enterprise <br class='lg:block hidden' /> applications with advanced automation",

  neuroTest: {
    name: "NeuroTest",
    imgSrc: "/automation/creative.png",
    link:"/neuro-test",
    tagline:
      "Advanced testing for AI/LLM systems <br> with specialized validation capabilities",
    cards: [
      {
        id: 1,
        bgImgSrc: "/automation/testing-cap/n1.webp",
        title: "Robustness & Reliability",
        // description:
          list:["Adversarial & Robustness Testing","CI/CD & Model Regression","Model Evaluation & Validation"]
      },
        {
        id: 3,
        bgImgSrc: "/automation/testing-cap/n2.webp",
        title: "Fairness & Ethics",
        // description: ", ",
        list:["Fairness & Bias Testing","Explainability & Transparency"]
      },
        {
        id: 4,
        bgImgSrc: "/automation/testing-cap/n3.webp",
        title: "Data & Context Quality",
        // description:
        //   ", ",
          list:["Data-Centric Testing","LLM-Specific Eval & Prompt Testing"]
      },
      {
        id: 2,
        bgImgSrc: "/automation/testing-cap/n4.webp",
        title: "Security & Safety",
        // description:"",
          list:["Security & Safety Testing for AI applications",]
      },
    
    
    ],
  },

  coreTest: {
    name: "CoreTest",
    imgSrc: "/automation/invoation.png",
     link:"/core-test",
    tagline: "Comprehensive testing for <br> enterprise and non-AI Applications",
    cards: [
       {
        id: 2,
        bgImgSrc: "/automation/testing-cap/c1.webp",
        title: "Functional & Regression Testing",
        // description:", , ,  ",
          list:["Unit testing","Integration testing","End-to-End Workflow Testing","Regression Automation & CI/CD Validation"]
          
        // bgImgSrc: "https://media.istockphoto.com/id/2157176253/photo/quality-assurance-and-document-control-with-checklist-icons-businessman-mark-off-items-on.jpg?s=1024x1024&w=is&k=20&c=VwlgvhCM-AI870yM-fMHCYcF89FpWaFb5Q1_R4msq4w=",
      },
      {
        id: 1,
        bgImgSrc: "/automation/testing-cap/c2.webp",
        title: "Security & Compliance Testing",
        // description:",, ",
        list:["Vulnerability & Penetration Testing"," API Security","Data Privacy & Compliance (GDPR, HIPAA, SOX, PCI)"]
        // bgImgSrc: "/automation/testing-cap/c-security.jpg",
      },
     
      {
        id: 3,
        bgImgSrc: "/automation/testing-cap/c3.webp",
        title: "Usability & Accessibility Testing",
        // description: ", , ",
        list:["UI/UX Validation","Cross-Browser & Cross-Device Testing","Accessibility (WCAG/ADA)"]
      },
      {
        id: 4,
        bgImgSrc: "/automation/testing-cap/c4.webp",
        title: "Data & Integrating Testing",
        // description: ", ",
        list:["Database Validation, Data Accuracy & Integrity","System Integration (ERP, CRM, Payment Gateways, APIs)"]
      },
    ],
  },
};




export const AUTOMATION_LIFECYCLE_CONFIG  = {
  title: "Automation <br class=' sm:hidden' /> lifecycle stages",
  subtitle:
    "Complete testing workflow from learning to evaluation with intelligent automation",

  cards: [
    {
      id: 1,
      icon: "GraduationCap",
      iconpath:"./svg/grid/graduation-cap.svg",
      title: "Learn",
      description: "Analyze and understand system behavior patterns",
    },
    {
      id: 2,
      icon: "Plus",
                iconpath:"./svg/grid/circle-plus.svg",
      title: "Create",
      description: "Generate intelligent automated test cases",
    },
    {
      id: 3,
      icon: "Play",
         iconpath:"./svg/grid/circle-play.svg",
      title: "Execute",
      description: "Run comprehensive suites efficiently",
    },
    {
      id: 4,
      icon: "LineChart",
        iconpath:"./svg/grid/chart-spline.svg",
      title: "Report",
      description: "Generate detailed insights and analytics",
    },
    {
      id: 5,
      icon: "Search",
           iconpath:"./svg/grid/search.svg",
      title: "Evaluate",
      description: "Assess results and optimize performance",
    },
  ],
};



export const AUTOMATION_HERO_CONFIG  = {
  heading: "AI Enabled intelligent <br class='hidden md:block' /> test automation platform",
  paragraph:
    "Airithm test studio revolutionizes testing with two powerful capabilities- Neuro test for AI/<br class='hidden md:block' /> LLM and Core test for enterprise applications.",
  backgroundGradient: "linear-gradient(180deg,#00273A 0%,#1E1E1E 55.42%)",
  imageSrc: "/automation/dashboard.png",
  buttons: [
   {
  text: "Watch Demo",
  className: "py-5 min-w-[228px] px-6 w-full md:w-fit flex flex-row-reverse font-primary font-medium text-[16px] leading-[120%] rounded-lg text-[#015190] bg-white",
  icon: "Play",
  iconSize: "20",
  hoverIcon:false,
  wrapperClass: "bg-[linear-gradient(86.66deg,#015190_10.85%,#FF7F7F_84.93%)] w-full sm:w-fit overflow-hidden rounded-lg p-px",
}
,
    {
  text: "Start Free Trial",
  className: "py-5 min-w-[228px] px-6 font-primary font-medium text-[16px] leading-[120%] rounded-lg text-white bg-primary-gradient flex items-center gap-2",
  icon: "CircleArrowOutUpRight",
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


 export const AUTOMATION_CTA_CONFIG  = {
  heading: "Ready to transform your testing?",
  paragraph:
    "Experience the power of ai-enabled intelligent test automation and <br className='lg:block hidden'/>revolutionize your development workflow",
  backgroundImage: "/bg/gradient.png",
  buttons: [
  {
    text: "Schedule Demo",
    className: "border-2",
     icon: "CircleArrowOutUpRight",
    iconSize: "20px",
    href: "/demo",
    // hoverIcon:false
  },
  {
    text: "Start Free Trial",
    className: " text-[#015190] bg-white ",
    icon: "CircleArrowOutUpRight",
    iconSize: "20px",
    href: "",
  },
]
 }