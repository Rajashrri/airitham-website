import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export const features = [
  {
    title: "Autonomous Test Generation",
    desc: "Automatically creates comprehensive test suites using AI-powered analysis of your application.",
    icon: "Bot",
    iconSize: 24,
  },
  {
    title: "Intelligent Test Execution",
    desc: "Smart test orchestration with dynamic prioritization and parallel execution capabilities.",
    icon: "Play",
    iconSize: 24,
    col: "lg:col-span-2",
  },
  {
    title: "Llm-based Evaluation",
    desc: "Advanced language model evaluation for complex testing scenarios and edge cases.",
    icon: "Brain",
    iconSize: 24,
  },
  {
    title: "Self-healing Tests",
    desc: "Automatically adapt and repair test scripts when application changes are detected.",
    icon: "Shield",
    iconSize: 24,
  },
  {
    title: "Continuous Learning Engine",
    desc: "Machine learning algorithms that improve testing accuracy and efficiency over time.",
    icon: "GraduationCap",
    iconSize: 24,
  },
  {
    title: "Test Analytics & Insights",
    desc: "Comprehensive reporting and analytics to optimize your testing strategy and outcomes.",
    icon: "BarChart3",
    iconSize: 24,
    col: "lg:col-span-2",
  },
  {
    title: "CI/CD & DevOps Integration",
    desc: "Seamless integration with your existing development and deployment pipelines.",
    icon: "GitBranch",
    iconSize: 24,
  },
];

export default function FeatureGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      {/* GRID FIXED */}
      <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-flow-dense">
        {features.map((item, i) => {
          const Icon = LucideIcons[item.icon];

          return (
            <div
              key={i}
              className={`
                rounded-2xl border border-light-lg bg-white
                p-5 flex flex-col justify-between space-y-6
                transition-shadow duration-300
                hover:shadow-[0px_0px_40px_2px_#01519040]
                ${item.col ?? ""}
              `}
            >
              {/* ICON */}
              {Icon && (
                <Icon
                  size={item.iconSize}
                  strokeWidth={1.5}
                  className="text-[#015190]"
                />
              )}

              {/* CONTENT */}
              <div className="flex-1">
                <h3 className="font-primary mb-2 text-[24px] tracking-[0.02em] font-medium leading-[1.2] text-gray-900">
                  {item.title}
                </h3>

                <p className="font-secondary text-[14px] tracking-[0.02em] font-medium leading-[1.4] text-[#626161]">
                  {item.desc}
                </p>
              </div>

              {/* CTA */}
              <a
                href="#"
                className="group flex items-center gap-2.5 font-primary text-[#015190]
                           font-medium text-[16px] leading-[1.2]"
              >
                Learn More
                <LucideIcons.ArrowRight
                  size={16}
                  className="transition-transform  duration-300 "
                />
              </a>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
