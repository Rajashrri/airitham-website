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
      "Context-Aware Test Decisions",
      "Evidence-Backed Reasoning",
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
      "Multi-Agent Execution",
      "LLM-Based Evaluation",
      "Self-Healing Tests",
      "Continuous Optimization",
    ],
    description: "Validates how systems behave under real conditions.",
    iconSize: 32,
  },
];

export const TWO_AUTOMATION_LAYERS_CONFIG = [
  {
    level: "L1",
    title: "Interfaces Layer",
    headerIconSrc: "./svg/layersdark.svg",
    headerIconSize: 28,
    items: [
      { label: "Applications", icon: "Monitor", iconSize: 32 },
      { label: "APIs", icon: "Plug", iconSize: 32 },
      { label: "AI Systems", icon: "Bot", iconSize: 32 },
    ],
    showBottomIcons: true,
  },
  {
    level: "L2",
    title: "Context Intelligence Layer",
    headerIconSrc: "/svg/braindark.svg",
    headerIconSize: 28,
    items: [
      { label: "Graph-RAG" },
      { label: "Memory" },
      { label: "Semantic Reasoning" },
    ],
    showBottomIcons: false,
  },
  {
    level: "L3",
    title: "Autonomous Testing Layer",
    headerIconSrc: "/svg/test-tube-diagonaldark.svg",
    headerIconSize: 28,
    items: [
      { label: "Planner Agents" },
      { label: "Executor Agents" },
      { label: "Evaluator Agents" },
    ],
    showBottomIcons: false,
  },
  {
    level: "L4",
    title: "Shared Analytics & Trust Layer",
    headerIconSrc: "/svg/chart-line.svg",
    headerIconSize: 28,
    items: [
      { label: "Quality Scores" },
      { label: "Risk Indicators" },
      { label: "Audit Trails" },
    ],
    showBottomIcons: false,
  },
];