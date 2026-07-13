import * as LucideIcons from "lucide-react";
import { HOW_THEY_WORK_TOGETHER_CONFIG } from "@/config/aboutConfig";
import SideCard from "../card/SideCard";
import SectionHeading from "@/components/common/SectionHeading";

const GRADIENT_BG =
  "bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]";

const PlatformSynergy = () => {
  const { title, center, cards,titleClassName } = HOW_THEY_WORK_TOGETHER_CONFIG;

  const CenterIcon = LucideIcons?.[center.icon];

  return (
    <section>
      <div className="bg-white rounded-[50px] px-5 md:px-0 sm:rounded-[100px] py-[100px] z-10 relative mt-[-100px]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title={title} titleClassName={titleClassName}  />

          <div className="flex flex-col md:flex-row gap-10 items-center justify-center rounded-2xl py-10">
            {/* Section A */}
            <SideCard {...cards[0]} />

            {/* Center */}
            <div className="flex w-full md:w-[300px] flex-col items-center justify-center">
              <div
                className={`w-[88px] h-[88px] md:w-[100px] md:h-[100px] 
              flex items-center justify-center
              rounded-full mb-4
              ${center.useGradientBg ? GRADIENT_BG : "bg-red-500"}
            `}
              >
                {CenterIcon && (
                  <CenterIcon size={center?.iconSize} className="text-white" />
                )}
              </div>

              <h3 className="text-[24px] mb-4 leading-[1.2] tracking-[0.02em] font-primary font-medium text-[#1e1e1e] text-center">
                {center.title}
              </h3>

              <p className="text-sm font-medium leading-none text-[#1E1E1E] text-center mt-1">
                {center.subtitle}
              </p>
            </div>

            {/* Section B */}
            <SideCard {...cards[1]} />
          </div>
        </div>
      </div>
    </section>

  );
};

export default PlatformSynergy;
