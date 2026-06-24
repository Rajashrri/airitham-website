import React from "react";

import SectionHeading from "@/components/common/SectionHeading";

import FeatureCard from "../card/FeaturedCard"





const FeatureSection = ({ config, className, featureCardClassName }) => {
  const { title, subtitle, cards } = config;

  return (
    <section
      className={`core-features-section ${className} pb-[100px]  px-4 lg:px-0 section-wrapper`}
    >
     <div className="max-w-7xl mx-auto">
         <SectionHeading
        title={title}
        titleClassName="text-[#015190]"
        subtitleClassName=" text-[#626161]"
        wrapperClassName={"max-w-[408px] sm:max-w-full   mx-auto"} subtitle={subtitle}
      />

      {/* Feature Cards */}
<div className="flex flex-wrap gap-6 py-10 justify-center  mx-auto">
        {config?.cards.map((card) => (
          <FeatureCard  key={card?.id} {...card} />
        ))}
      </div>
     </div>
    </section>
  );
};

export default FeatureSection;
