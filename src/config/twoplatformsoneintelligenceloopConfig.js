export const tpil_HEADER = {
  heading: "Two Platforms.<br/> One Intelligence Loop.",
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
    title: "Context Intelligence Platform",
    src:"/topics/cip.webp",
    items: [
      "Context Graphs",
      "Semantic Memory",
      "Temporal Reasoning",
      "Relationship Mapping",
      "Knowledge Grounding",
    ],
    description: "Understands what things mean and how they relate.",
    iconSize: 32,
  },
  {
    iconSrc: "/svg/share-2.svg",
    title: "Shared Intelligence Core",
    src:"/topics/sic.webp",
    items: [
      "Context-aware Test Decisions",
      "Evidence-backed Reasoning",
      "Continuous Learning Loop",
      "Trust & Quality Scoring",
    ],
    description: "",
    iconSize: 28,
  },
  {
    iconSrc: "/svg/test-tube-diagonal.svg",
    title: "Autonomous Testing Platform",
    src:"/topics/atp.webp",
    items: [
      "Test Generation",
      "Multi-agent Execution",
      "Llm-based Evaluation",
      "Self-healing Tests",
      "Continuous Optimization",
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