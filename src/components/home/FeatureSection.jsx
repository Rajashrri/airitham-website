import React from "react";
import { HOME_FEATURED_CONFIG } from "@/config/homeConfig";
import FeatureCard from "@/components/card/FeaturedCard.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
const FeatureSection = () => {
  const { title, subtitle, cards } = HOME_FEATURED_CONFIG;

  return (
    <section className="core-features-section pb-[90px] pt-[180px] rounded-b-[100px] bg-[#E9F6FB] mt-[-90px]  px-6 sm:px-0  ">


      <SectionHeading
        title={title}
        titleClassName="text-[#015190]"
        subtitleClassName=" text-[#757575]"
        wrapperClassName={"max-w-[408px] sm:max-w-full   mx-auto"} subtitle={subtitle}
      />

    

      {/* Feature Cards */}
      <div className="flex flex-wrap  gap-6 pt-10 justify-center max-w-[1200px] mx-auto">
        {cards.map((card) => (
          <FeatureCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
