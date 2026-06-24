import {
  Database,
  Bell,
  Sparkles,
  Box,
  ArrowDown,
  RotateCcw,
  Shuffle,
  GitBranch
} from "lucide-react";

const STEPS = [
  { label: "Ingest", icon: ArrowDown },
  { label: "Memory", icon: Database },
  { label: "Reflection", icon: RotateCcw },
  { label: "Events", icon: Bell },
  { label: "Routing", icon: Shuffle },
  { label: "LLM & Tools", icon: Sparkles },
  { label: "Orchestrator", icon: GitBranch },
  { label: "Capsules", icon: Box },
];

export default function ContextFlowDiagram() {
  return (
    <section className="w-full px-4 md:px-12 py-16">
      <div className="relative mx-auto max-w-7xl rounded-[48px] bg-gradient-to-br from-[#061826] via-[#071c2f] to-[#030d18] border border-white/10 px-8 md:px-16 py-20 overflow-hidden">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-20">
          Context Flow Diagram
        </h2>

        {/* Flow */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-14 md:gap-0">

          {STEPS.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">

              {/* Connector */}
              {index !== STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-36 h-[2px] bg-gradient-to-r from-pink-400 to-pink-300 opacity-70" />
              )}

              {/* Icon Bubble */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-lg">
                <step.icon className="w-6 h-6 text-white" />
              </div>

              {/* Label */}
              <p className="mt-4 text-sm md:text-base text-white/90 font-medium whitespace-nowrap">
                {step.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
