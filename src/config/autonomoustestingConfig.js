export const at_HEADER = {
  heading: "Autonomous testing vs traditional testing",
   headclass:"pt-0 text-white max-w-[800px] m-auto",
   headingclass:"text-[#fff]",
  paragraph:
    "A clear, unbiased comparison to help engineering and QA leaders choose the right testing approach.",
//   backgroundImage: "/bg/gradient.png",
  buttons: [
   {
  text: "View Architecture",
  className:
    " text-[#015190] bg-white",

  hoverIcon:true,
  iconSize: "20px",
    icon: "CircleArrowOutUpRight",
  href: "/how-autonomous-testing-works",
},
{
  text: "Request a Demo",
  className:
    "bg-primary-gradient text-white",
  href: "/demo",
  
  icon: "CircleArrowOutUpRight",
  iconSize: "20px",
}

  ],
};
export const benifits_Config ={
   cards: [
   
  {
    id: 3,
        img:"/svg/braindark.svg",
    title: "Adaptive test generation",
    description:
      "AI creates and evolves tests automatically based on application behavior and user patterns.",
  },
  {
    id: 4,
        img:"/svg/wand-sparklesdark.svg",
    title: "Agentic execution",
    description:
      "Intelligent agents that understand context and adapt to changes in real-time.",
  },
  {
    id: 5,
        img:"/svg/graduation-cap.svg",
    title: "Continuous learning",
    description:
      "System improves over time, learning from failures and optimizing test coverage.",
  },
  {
    id: 1,
    img:"/svg/message-circle-more.svg",
    title: "Llm-based evaluation",
    cardClass:' w-full sm:w-[550px] ',
    description:
      "Natural language understanding for more intuitive and comprehensive test validation.",
  },{
    id: 2,
        img:"/svg/user-round.svg",
    title: "Reduced human effort",
        cardClass:' w-full sm:w-[550px] ',
    description:
      "Minimal manual intervention required, freeing teams to focus on strategic initiatives.",
  },
]
}
