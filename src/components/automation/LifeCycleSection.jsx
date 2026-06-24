import { LifeBuoyIcon } from "lucide-react";
import { AUTOMATION_LIFECYCLE_CONFIG } from "@/config/automationConfig";
import LifeCycleCard from "../card/automation/LifeCycleCard";
import * as LucideIcon from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading"
function LifeCycleSection() {
  const { title, subtitle, cards } = AUTOMATION_LIFECYCLE_CONFIG;
  return (
    <div className="w-full  relative z-9 section-overlap mt-[-100px]  bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] ">
      <div className="max-w-7xl  mx-auto px-6">

        <SectionHeading wrapperClassName="mx-auto" title={title} subtitleClassName=" text-[#D9D9D9]" titleClassName=" text-white" subtitle={subtitle} />





        <div className="lifecycle-process  flex lg:flex-nowrap flex-wrap justify-center gap-6 mt-[60px] ">
          {cards.map((card) => (
            <LifeCycleCard key={card?.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LifeCycleSection;


