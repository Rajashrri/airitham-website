import React from "react";
import * as LucideIcons from "lucide-react";

const DATA = [
  {
    title: "Context Intelligence",
    iconSrc: "/svg/brain.svg",
    iconSize:"32",
    items: [
      "Meaning & Semantics",
      "Knowledge Graphs",
      "Memory & Reasoning",
      "Relationships",
      "Understanding",
    ],
  },
  {
    title: "Autonomous Testing",
   iconSrc: "/svg/test-tube-diagonal.svg",
    iconSize:"32",
    items: [
      "Behavior & Execution",
      "Test Agents",
      "Validation & Scoring",
      "Coverage & Risk",
      "Proof",
    ],
  },
];

const ResponsibilitySection = () => {
  return (
    <section className="w-full px-5 space-y-8 rounded-[48px] bg-linear-to-b from-[#042539] to-[#000000]
 md:pt-24 pt-[70px] pb-[120px]">
      {/* Title */}
      <h2 className="font-primary font-medium text-white sm:text-[40px] text-[32px] leading-[140%] tracking-[0.02em] text-center 
">
        Clear Separation Of Responsibilities
      </h2>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
       {DATA.map((block) => {
  const Icon = block.icon ? LucideIcons[block.icon] : null;

  return (
    <div
      key={block.title}
      className="rounded-3xl border-light-lg md:p-6 p-4 backdrop-blur"
    >
      {/* Header */}
      <div className="mb-6 flex items-center gap-6">
        {block.iconSrc ? (
          <img
            src={block.iconSrc}
            alt={block.title}
            className="h-8 w-8"
          />
        ) : Icon ? (
          <Icon className="h-8 w-8 text-pink-400" />
        ) : null}

        <h3 className="font-primary py-4 font-medium md:text-[24px] text-[22px] leading-[110%] tracking-[0.02em] text-white">
          {block.title}
        </h3>
      </div>


              {/* List */}
              <ul className="space-y-4">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-6 rounded-2xl bg-gradient-to-b from-white/10 to-[#838383]/10
                      p-5 text-sm text-white/90. font-primary font-medium text-white md:text-[20px] text-[16px] leading-[120%] tracking-[0.02em] 
                      "
                  >
                    <span className="size-4 rounded-full bg-[#6AC0E6]
                      " />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className=" max-w-7xl  mx-auto bg-[radial-gradient(66.19%_497.1%_at_50%_50%,_#015190_0%,_#015190_50.32%,_#6AC0E6_100%)]
font-primary font-semibold text-center rounded-[16px] md:text-[24px] text-[22px] py-[40px] leading-[120%] tracking-[0] text-white
">
        Independently powerful. Exponentially stronger together.
      </div>
    </section>
  );
};

export default ResponsibilitySection;
