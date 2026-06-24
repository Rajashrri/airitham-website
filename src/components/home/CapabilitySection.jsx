import { Bot } from "lucide-react";
import React from "react";
import { HOME_CAPABILITY_CONFIG } from "@/config/homeConfig";
import CapabilitiyCard from "../card/CapabilitiyCard";
import SectionHeading from "@/components/common/SectionHeading";
const CapabilitySection = ({ title, cards }) => {
  return (
    <section
      className="relative section-overlap px-5  lg:px-0  mt-[-100px] flex flex-col justify-center z-5"
      style={{
        background: "linear-gradient(180deg, #042539 0%, #000000 100%)",
      }}
    >
      <SectionHeading
        titleClassName=" text-white capitalize "
        title={title}
      />

      <div className="pt-[95px] mb-[60px] flex-wrap flex lg:flex-nowrap justify-center gap-14 ">
        {" "}
        {cards.map((capability, index) => (
          <CapabilitiyCard key={capability.id || index} {...capability} />
        ))}{" "}
      </div>
    </section>
  );
};

export default CapabilitySection;
