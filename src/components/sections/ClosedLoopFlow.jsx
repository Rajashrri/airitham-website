import React from "react";
import SectionHeading from "../common/SectionHeading";
import { RotateCcw } from "lucide-react";

const FLOW_STEPS = [
  {
    step: 1,
    title: "Context intelligence",
    desc: [
      "Builds knowledge graphs",
      "Maintains semantic & temporal memory",
    ],
  },
  {
    step: 2,
    title: "Autonomous testing",
    desc: [
      "Generates and executes tests",
      "Evaluates outcomes with agents",
    ],
  },
  {
    step: 3,
    title: "Evidence & signals",
    tags: ["Failures", "Anomalies", "Drift", "Regressions"],
  },
  {
    step: 4,
    title: " Context update",
    desc: [
      "Graph enrichment",
      "Memory reinforcement",
      "Relationship refinement",
    ],
  },
];

const ClosedLoopFlow = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">

        <div className="max-w-[800px] mx-auto">
            <SectionHeading

        spacing="space-y-4"

        title="Closed-loop intelligence flow"

        titleClassName=" text-[#015190]
          "
          subtitleClassName="text-[#626161]
          "
        subtitle="Context informs testing. Testing validates context. Together, they create measurable trust."
        
        />
        </div>
       

        {/* Flow */}
        <div className="md:mt-20 mt-12 px-6 max-w-lg mx-auto shadow-[0px_0px_8px_4px_#01519080] rounded-[24px] py-[50px] flex flex-col items-center gap-8 relative">
          {FLOW_STEPS.map((item, idx) => (
            <div key={idx} className="relative  flex flex-col items-center">
              {/* Step Badge */}
              <div className="absolute -top-4 flex size-[32px] items-center justify-center rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]
                font-secondary font-medium text-[14px] leading-[1.4] tracking-[0.04em]
                text-white">
                {item.step}
              </div>

              {/* Card */}
              <div className="md:w-[360px] w-[100%] space-y-2 rounded-2xl border-light-lg bg-white p-5 shadow-sm">
                <h3 className="font-primary font-medium text-[20px] leading-[1.2] tracking-[0.02em] text-center
 text-[#1e1e1e">
                  {item.title}
                </h3>

                {item.desc && (
                  <ul className="mt-3  text-sm text-slate-500">
                    {item.desc.map((d, i) => (
                      <li className="font-secondary text-[#626161] font-medium text-[14px] leading-[1.4] tracking-[0.02em] text-center 
" key={i}>{d}</li>
                    ))}
                  </ul>
                )}

                {item.tags && (
                  <div className="mt-4 grid md:grid-cols-2  gap-3">
                    {item.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="font-primary p-4 font-medium text-[14px] leading-none tracking-[0.02em] 
                          bg-[#42ABDF40]
                          "
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Arrow */}
              {idx !== FLOW_STEPS.length - 1 && (
               <img src="/svg/arrow.svg" alt="" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="md:mt-16 mt-10 py-2 px-4 inline-flex items-center gap-2 rounded-full font-secondary font-medium bg-[#42ABDF40]
 text-[12px] text-[#015190] leading-[1.4] tracking-[0.04em]
">
          <RotateCcw size={20} color="#015190" /> Automated pipeline excellence
        </div>
      </div>
    </section>
  );
};

export default ClosedLoopFlow;
