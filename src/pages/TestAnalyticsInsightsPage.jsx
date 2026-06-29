import React from "react";
import Navbar from "../components/Navbar";
import { TEST_ANALYTICS_INSIGHTS_HEADER_CONFIG } from "@/config/testAnalyticsInsightsConfig.js";
import MainBanner from "../components/services/MainBanner";
import { ANALYTICS_TABS_CONFIG, TEST_ANALYTICS_CTA_CONFIG, TEST_ANALYTICS_INSIGHTS_CONFIG, TEST_ANALYTICS_USP_CONFIG } from "../config/testAnalyticsInsightsConfig";
import SectionHeading from "../components/common/SectionHeading";
import FeatureCard from "@/components/card/FeaturedCard";
import InsightCard from "../components/card/InsightCard";
import CtaSection from "../components/common/CtaSection";
import FooterSection from "@/components/home/FooterSection";

import HowItWorks from "@/components/sections/HowItWorks"


const TestAnalyticsInsightsPage = () => {
  return (
    <>
      <Navbar initialTextColor="black" />

      <section>
        <div className="mt-[104px] py-[140px] text-white bg-gradient-primary rounded-[50px]  w-full ">
          <MainBanner data={TEST_ANALYTICS_INSIGHTS_HEADER_CONFIG} />
        </div>
      </section>

      <section>
        <div className="Analytics_&_Insights py-20 space-y-12">
          
          <div className="lg:grid max-w-[1300px] gap-5 flex flex-col-reverse px-5 m-auto md:grid-cols-2 mb-15">
             <div className=" lg:col-span-1 col-span-2  rounded-2xl overflow-hidden md:h-[400px] h-[300px]">
              <img
                src="/topics/testing-dashboard.webp"
                alt=""
                className="w-full h-full rounded-2xl object-cover object-center"
              />
            </div>  
            <div className="lg:col-span-1 col-span-2 flex flex-col justify-center">
               <h2 className="font-primary mb-5 text-[#015190] font-medium md:text-[40px] text-[30px] leading-[1.2] tracking-[0.02em] text-center ">
                 What it does
                </h2>
               <p className="font-secondary text-center max-w-[800px] mx-auto text-[#626161] font-[medium] lg:text-[18px] text-[14px] leading-[1.4] tracking-[0.04em] ">
                Our advanced analytics platform transforms raw testing data into
                comprehensive insights, enabling teams to make data-driven
                decisions with confidence. By leveraging machine learning and
                statistical analysis, it provides deep visibility into test
                performance, quality trends, and risk patterns.
              </p>

              <p className="font-secondary max-w-[800px] mt-6 mx-auto text-[#626161] font-medium lg:text-[18px] text-[14px] leading-[1.4] tracking-[0.04em] text-center">
                The platform automatically correlates test results across
                environments, identifies failure patterns, and predicts potential
                quality issues helping teams address risks before they impact
                production systems.
              </p>
            </div>
            
          </div>

         

          <div className="flex  justify-center gap-10 flex-wrap">
            {ANALYTICS_TABS_CONFIG.map((item) => (
              <div key={item.id} className="py-3 px-4 flex items-center gap-2">
                <img
                  src={item.iconSrc}
                  alt={item.label}
                  width={item.iconSize}
                  height={item.iconSize}
                  className="shrink-0"
                />

                <h2 className="text-[#015190] font-secondary font-medium text-[16px] leading-[140%] tracking-[0.04em] ">
                  {item.label}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      <section>
        <div className="py-[100px] relative">

        

          <SectionHeading
//             subtitle="
// Experience the full autonomous testing lifecycle from agent generation to <br /> enterprise insights.       "
            subtitleClassName=" font-secondary text-[#626161]"
            titleClassName="font-primary   text-[#015190] captialize"
            title="Key benefits"
            wrapperClassName=""
            spacing="space-y-4"
          />

          <div className="flex pt-[60px] px-5  flex-wrap gap-6 justify-center">
            {TEST_ANALYTICS_INSIGHTS_CONFIG?.topRow?.map((item) => (
              <InsightCard key={item?.id} {...item} />
            ))}
          </div>
          
        </div>
      </section>


         <section>
        <div className="bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] md:rounded-t-[100px] rounded-t-[50px] relative z-3 pt-[100px] pb-[200px]">
          <SectionHeading
            title={"Real-world use"}
            titleClassName="text-white"
            titleSize="sm:text-[48px] text-[32px]"
            // subtitle="See how teams across industries leverage our platform to transform their delivery process"
            subtitleClassName="text-[#BCBCBC]"
          />

          <div className="flex flex-wrap w-full px-5  gap-6 pt-10 justify-center  mx-auto">
            {TEST_ANALYTICS_USP_CONFIG?.cards?.map((item) => (
              <FeatureCard {...item} contentClass="gap-[14px]" />
            ))}
          </div>
        </div>
      </section>

       <CtaSection wrapperClassName="mt-[-100px]" {...TEST_ANALYTICS_CTA_CONFIG} />

       <FooterSection />
    </>
  );
};

export default TestAnalyticsInsightsPage;




