export const tpil_HEADER = {
  heading: "Two platforms.<br/> One intelligence loop.",
   headclass:"",
   headingclass:"text-[#fff]",
  paragraph:
    "Independently powerful.  Exponentially stronger together.",
//   backgroundImage: "/bg/gradient.png",
  buttons: [  ],
};


export const TWO_AUTOMATION_FEATURES_CONFIG = [
  {
    iconSrc: "/svg/brain.svg",
    title: "Context intelligence platform",
    src:"/topics/cip.webp",
    items: [
      "Context graphs",
      "Semantic memory",
      "Temporal reasoning",
      "Relationship mapping",
      "Knowledge grounding",
    ],
    description: "Understands what things mean and how they relate.",
    iconSize: 32,
  },
  {
    iconSrc: "/svg/share-2.svg",
    title: "Shared intelligence core",
    src:"/topics/sic.webp",
    items: [
      "Context-aware test decisions",
      "Evidence-backed reasoning",
      "Continuous learning loop",
      "Trust & quality scoring",
    ],
    description: "",
    iconSize: 28,
  },
  {
    iconSrc: "/svg/test-tube-diagonal.svg",
    title: "Autonomous testing platform",
    src:"/topics/atp.webp",
    items: [
      "Test generation",
      "Multi-agent execution",
      "Llm-based evaluation",
      "Self-healing tests",
      "Continuous optimization",
    ],
    description: "Validates how systems behave under real conditions.",
    iconSize: 32,
  },
];

export const TWO_AUTOMATION_LAYERS_CONFIG = [
  {
    level: "L1",
    title: "Interfaces layer",
    headerIconSrc: "./svg/layersdark.svg",
    headerIconSize: 28,
    items: [
      { label: "Applications", icon: "Monitor", iconSize: 32 },
      { label: "APIs", icon: "Plug", iconSize: 32 },
      { label: "AI systems", icon: "Bot", iconSize: 32 },
    ],
    showBottomIcons: true,
  },
  {
    level: "L2",
    title: "Context intelligence layer",
    headerIconSrc: "/svg/braindark.svg",
    headerIconSize: 28,
    items: [
      { label: "Graph-RAG" },
      { label: "Memory" },
      { label: "Semantic reasoning" },
    ],
    showBottomIcons: false,
  },
  {
    level: "L3",
    title: "Autonomous testing layer",
    headerIconSrc: "/svg/test-tube-diagonaldark.svg",
    headerIconSize: 28,
    items: [
      { label: "Planner agents" },
      { label: "Executor agents" },
      { label: "Evaluator agents" },
    ],
    showBottomIcons: false,
  },
  {
    level: "L4",
    title: "Shared analytics & trust layer",
    headerIconSrc: "/svg/chart-line.svg",
    headerIconSize: 28,
    items: [
      { label: "Quality scores" },
      { label: "Risk indicators" },
      { label: "Audit trails" },
    ],
    showBottomIcons: false,
  },
];