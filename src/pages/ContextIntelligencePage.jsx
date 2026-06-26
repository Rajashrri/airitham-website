import React from "react";
import CtaSection from "@/components/common/CtaSection";
import HeroSection from "@/components/common/HeroSection";
import FeatureSection from "@/components/common/FeatureSection";
import FeatureCard from "@/components/card/FeaturedCard";
import SectionHeading from "@/components/common/SectionHeading";
import Navbar from "@/components/Navbar";
import {
  CONTEXT_ANALYTICS_CONFIG,
  Context_HERO_CONFIG,
  CONTEXT_CTA_CONFIG,
  WHY_CHOOSE_CIP_CONFIG,
  CONTEXT_CORE_PILLAR_CONFIG,
} from "@/config/contextIntelligenceConfig";
import FooterSection from "@/components/home/FooterSection";

const ContextIntelligencePage = () => {
  return (
    <>
      <Navbar
       intialTextColor="#000"
      />

      <HeroSection {...Context_HERO_CONFIG} />

      <FeatureSection
        className="border-b border-[#D9D9D9] bg-[#E9F6FB]  shadow-[0_2px_4px_0_rgba(0,39,58,0.1)] rounded-b-[50px] sm:rounded-b-[100px]"
        config={CONTEXT_CORE_PILLAR_CONFIG}
      />

      <section>
        <div className="max-w-full px-4 sm:px-0 md:max-w-7xl py-[100px]  mx-auto space-y-4 ">
          <h2 className="text-center font-primary font-medium text-[32px] sm:text-[40px] leading-[1.2] tracking-[0.02em] text-[#00273A]">
           Revolutionary context orchestration
          </h2>

          <p className="font-secondary text-[16px] md:text-[20px] font-normal leading-[1.4] tracking-[0.02em] text-[#1E1E1E] text-center mx-auto">
            Our platform doesn’t just process data it understand the intricate relationships, <br className="hidden sm:block" />
             Temporal patterns, and contextual nuances that traditional AI systems miss.
            <br className="hidden sm:block" />
             Experience intelligence that truly comprehends your business context.
          </p>
        </div>
      </section>

      <section>
        <div className="rounded-t-[50px] lg:rounded-t-[100px] relative z-10  bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] px-9 section-overlap-bottom">
          <div className="max-w-7xl  mx-auto flex flex-col lg:flex-row  md:justify-between gap-12 px-4 lg:px-0">
            {/* LEFT */}
            <div className="flex-1 justify-between  flex flex-col gap-6">
              <h3 className="font-primary text-center sm:text-left mx-auto  sm:w-full text-[40px] sm:text-[64px] text-white leading-[1.2] font-medium">
                Platform <br /> architecture
              </h3>

              <p className="font-secondary text-center max-w-full sm:text-left text-[16px] sm:text-[18px] font-medium text-[#FFF9F9] leading-[1.4] sm:max-w-[520px]">
              Our platform doesn’t just process data, it understands the intricate relationships, Temporal patterns, and contextual nuances that traditional AI systems miss. Experience intelligence that truly comprehends your business context.
              </p>
              <p className="font-secondary text-center max-w-full sm:text-left text-[16px] sm:text-[18px] font-medium text-[#FFF9F9] leading-[1.4] sm:max-w-[520px]">
           Built on a multi-layered architecture, it unifies data across systems and maps connections in real time. Advanced context modelling interprets intent, detects anomalies, and adapts as your business evolves. The result is a self-improving intelligence layer powering smarter automation and resilient performance.
              </p>
             
            </div>

            {/* RIGHT */}
            <div className="flex-1 rounded-[24px] overflow-hidden border border-[1px] border-[#fff] p-2  flex justify-center md:justify-end">
              <img
                src="/automation/lce.webp"
                alt=""
                className="w-full rounded-[24px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:rounded-[100px] rounded-[50px] py-[100px]  bg-white    relative z-14 mt-[-100px]">
          <div className="max-w-7xl px-4 lg:px-0 mx-auto">
            <SectionHeading
              titleClassName="font-primary font-medium text-[32px] sm:text-[40px] leading-[1.2] tracking-[0.02em] text-[#015190] text-center"
              title="Enterprise use cases"
            />

            <div className="flex flex-wrap  gap-6 py-10 justify-center max-w-[1200px] mx-auto">
              {CONTEXT_ANALYTICS_CONFIG.cards.map((items, index) => (
                <FeatureCard key={items.id || index} {...items} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            backgroundImage: `url(/bg/gradient.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="lg:rounded-b-[100px] rounded-b-[50px] overflow-hidden section-overlap-top  bg-img-overlay  relative z-13 mt-[-100px] 
                
               "
        >
          <div
            className="relative z-12 max-w-7xl mx-auto px-6 
                    flex flex-col md:flex-row justify-between items-between gap-10"
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-12  justify-between shrink-0 md:max-w-[50%]">
              <div className="max-w-[542px] text-white">
                <SectionHeading
                  title="Developer integration"
                  subtitle={`Build intelligent applications with our comprehensive apis and sdks. Get started in minutes with our intuitive developer tools.`}
                  titleClassName="text-center md:text-left sm:text-[40px] text-white"
                  subtitleClassName="text-white text-center md:text-left"
                  wrapperClassName="text-left"
                />
              </div>

              <div className="stack-chips-wrapper justify-center md:justify-start flex gap-4 flex-wrap md:mt-6">
                <div
                  className="chips text-inter-16 font-medium leading-none w-fit 
                          px-[20px] py-[12px] rounded-[100px] text-white bg-[#00000033]"
                >
                  Python SDK
                </div>
                <div
                  className="chips text-inter-16 font-medium leading-none w-fit 
                          px-[20px] py-[12px] rounded-[100px] text-white bg-[#00000033]"
                >
                  Javascript API
                </div>
                <div
                  className="chips text-inter-16 font-medium leading-none w-fit 
                          px-[20px] py-[12px] rounded-[100px] text-white bg-[#00000033]"
                >
                  Rest API
                </div>
                <div
                  className="chips text-inter-16 font-medium leading-none w-fit 
                          px-[20px] py-[12px] rounded-[100px] text-white bg-[#00000033]"
                >
                  GraphQL
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="w-full md:w-1/2 overflow-hidden">
              <img
                className="w-full rounded-xl"
                src="/automation/code-editor.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

     

     
<FeatureSection
  featureCardClassName="w-full sm:basis-[45%]"
  config={WHY_CHOOSE_CIP_CONFIG}
/>


     

      <CtaSection wrapperClassName="mt-0" {...CONTEXT_CTA_CONFIG} />

      <FooterSection />
    </>
  );
};

export default ContextIntelligencePage;
