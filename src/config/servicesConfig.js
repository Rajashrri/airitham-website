
export const REAL_TIME_CONTEXT_HEADER = {
  heading: "Seamless context flow <br/> across federated systems",
   headclass:true,
  paragraph:
    "Enable seamless synchronization of distributed agents, devices and subsystems with secure, <br/> scalable event-driven AI behaviors It's across organizational boundaries.",
//   backgroundImage: "/bg/gradient.png",
  buttons: [
   {
  text: "View Demo",
  className:
    " text-[#015190] bg-white border-[#015190] border",
  icon: "Eye",
  hoverIcon:false,
  iconSize: "20px",
  href: "/demo",
},
{
  text: "Explore Module",
  className:
    " bg-primary-gradient text-white",
  href: "/contact-us",
  icon: "CircleArrowOutUpRight",
  iconSize: "20px",
}

  ],
};



export const CORE_MODULE_CONFIG = {
   title: "What is Context <br class='hidden md:block' />Broadcasting & Federation",
   bodyclass:true,
   headcolor:"#fff",
   titleClassName:"normal-case",
   
   
  subtitle:
    "A revolutionary approach to real-time context distribution that enables AI agents, devices, and subsystems to maintain synchronized awareness while preserving organizational autonomy and security",
    cards: [
    {
      id: 1,
      linkIconSrc: "./svg/network.svg",
      textColor:"#fff",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[340px]",
      iconColor: "",
      title: "Real-time synchronization",
      discColor:'#C6C6C6',
      description:
        "Ensure all distributed agents and device maintain accurate state awareness through continuous context updates",
    },
    {
      id: 2, 
      icon: "ShieldCheck",
      iconColor: "#6AC0E6",
       textColor:"#fff",
             cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[340px]",
       discColor:'#C6C6C6',
      title: "Secure federation",
      description:
        "Enable secure data sharing across organizational boundaries while maintaining privacy and control",
    },
    {
      id: 3,
      icon: "Zap",
      iconColor: "#6AC0E6",
       textColor:"#fff",
             cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[340px]",
       discColor:'#C6C6C6',
      title: "Event-driven AI",
      description:
        "Facilitate scalable intelligent behaviors across devices and systems through dynamic context awareness",
    }
  ],
};

export const TIMELINE_SECTION_CONFIG = {
   title: "How It Works",
  subtitle:
    "Four key components work together to enable seamless context distribution",
 cards: [
   {
    id: 1,
    title: "Signal generation",
    description:
      "Agents and devices generate context signals based on their current state and environmental changes",
    align: "right",
  },
    {
    id: 2,
    title: "Channel Broadcasting",
    description:
      "Context updates are broadcast through secure channels to relevant subscribers in the network",
    align: "left",
  },
  {
    id: 3,
    title: "Agent Coordination",
    description:
      "Distributed agents receive and process context updates to maintain synchronized awareness",
    align: "left",
  },
  {
    id: 4,
    title: "Federation Layer",
    description:
      "Secure federation protocols enable cross-organizational context sharing while preserving autonomy",
    align: "right",
  },

  ]

}
export const KEY_FEATURES_CONFIG = {
     title: "Key features",
     titleClassName:"text-[#015190]",
  subtitle:
    "Advanced capabilities for enterprise-grade context intelligence",
    bodyclass:"!lg:rounded-t-[100px] bg-[#E9F6FB] rounded-t-[50px] !rounded-b-[0px] border border-[1px] border-[#D9D9D9] mt-[90px]",
 
    cards: [
      {
      id: 1,
      icon: "Wifi",
      textColor:"#1E1E1E",
      discColor:'#626161 ',
      cardClassName: " md:w-[290px] w-[100%] bg-[#fff] ",
      iconColor: "#015190	",
      title: "Low-latency upadtes",
      description:
        "Sub-millisecond context propagation ensures real-time responsiveness across your entire network",
    },
    {
      id: 2,
      icon: "Expand",
      iconColor: "#015190	",
        cardClassName: " md:w-[290px] w-[100%]  bg-[#fff]",
   textColor:"#1E1E1E",
      discColor:'#626161 ',
      title: "Infinite scalability",
      description:
        "Handle millions of agents and devices with our distributed architecture and intelligent load balancing",
    },
    {
      id: 3,
      icon: "ShieldHalf",
      iconColor: "#015190	",
        cardClassName: "  md:w-[290px] w-[100%] bg-[#fff]",
       textColor:"#1E1E1E",
      discColor:'#626161 ',
      title: "End-to-end encryption",
      description:
        "Military-grade security protocals protect sensitive context data throughout the entire distribution chain",
    },
    {
      id: 4,
      icon: "Waypoints",
        cardClassName: "  md:w-[290px] w-[100%] bg-[#fff]",
      iconColor: "#015190	",
      textColor:"#1E1E1E",
      discColor:'#626161 ',
      title: "Intelligent rounting",
      description:
        "AI-powered context routing ensures optimal delivery paths and minimal resource consumption",
    },
   
  ],
};