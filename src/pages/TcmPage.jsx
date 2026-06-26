import React from "react";
import { statsCardConfig, Query_TIME_CONFIG } from "../config/tcmConfig";
import FooterSection from "@/components/home/FooterSection";

import Navbar from "@/components/Navbar.jsx";
import SectionHeading from "../components/common/SectionHeading";
import UspServices from "../components/services/UspServices";

export const StatsCard = ({ icon, title, children }) => {
  return (
    <div className="w-[390px]  border rounded-2xl p-5 border-[#C6C6C6]">
      {icon}

      <h4 className="font-primary mt-[24px] text-[#015190] font-[600] text-[20px] leading-none tracking-[0.04em] sm:text-[18px] xs:text-[16px]">
        {title}
      </h4>

      <div className="stats space-y-4 mt-4">{children}</div>
    </div>
  );
};

export const StatRow = ({ id, label, value, suffix }) => {
  return (
    <div className="w-full flex justify-between items-center border px-4 py-3 border-[#C6C6C6] rounded-lg">
      <span className="text-[#626161] font-primary font-normal text-[14px] leading-none tracking-[0.04em]">
        {label}
      </span>

      <span className="font-secondary text-[#015190] font-medium text-[14px] leading-[1.4] tracking-[0.04em]">
        {value}
        {suffix ?? ""}
      </span>
    </div>
  );
};

const RelevanceScoreCard = ({ score = 87 }) => {
  return (
    <div className="w-full p-4 ">
      <p className="text-gray-500 text-sm text-center">Relevance Score</p>
      <p className="text-2xl leading-[1.4] font-medium font-secondary text-[#015190]  text-center mt-2">
        {score}%
      </p>
      <div className="w-full h-3 bg-gray-200 rounded-full mt-6 overflow-hidden">
        <div
          className="h-full bg-[#6AC0E6] rounded-full"
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
};

const TcmPage = () => {
  return (
    <>
      <Navbar
        
      />

      <section >
        <div className="max-w-7xl lg:px-0 px-5 lg:mt-[104px] mt-[80px] lg:py-[106px] pt-[60px] pb-[60px] mx-auto">
          {/* Hero */}
          <div className="tcm-hero-content space-y-4">


            <SectionHeading 
            title={"ContextVault"}
            titleClassName="text-[40px] font-600 sm:text-[64px] break-all"
            subtitle={
                
                  'Advanced memory architecture featuring dual-tier storage with intelligent promotion and query-time <br className="hidden md:block " /> composition for enhanced contextual understanding and retrieval performance.'
                
              }

              subtitleClassName="text-[#626161]"



                          />
            


          </div>

          {/* Cards */}
          <div className="tcm-cards-wrapper lg:px-0 px-5 pt-16 flex justify-center  flex-wrap lg:flex-nowrap items-start gap-6 sm:gap-4 xs:gap-2">
            {statsCardConfig.map((card, index) => (
              <StatsCard
                key={index}
                title={card.title}
                icon={
                  <img
                    src={card.iconPath}
                    alt={card.title}
                    className="w-8 h-8"
                  />
                }
                className="flex-1 min-w-[280px] sm:min-w-[200px]"
              >
                {card.relevanceScore !== undefined && (
                  <div className="flex justify-center">
                    <RelevanceScoreCard score={card.relevanceScore} />
                  </div>
                )}

                {card.items?.map((item) => (
                  <StatRow
                    key={item.id}
                    label={item.label}
                    value={item.value}
                    suffix={item.suffix}
                  />
                ))}
              </StatsCard>
            ))}
          </div>
        </div>
      </section>
          <UspServices
      spacing="space-y-4 sm:space-y-6"
      data={Query_TIME_CONFIG}
    />


      <section>
        <div className="max-w-7xl mx-auto py-[100px] lg:px-0 px-5">
          <h2 className="text-center text-[#00273A] tracking-[0.02em] leading-none font-primary font-medium lg:text-[40px] text-[32px]">
            Temporal context memory (TCM)
          </h2>

      <div className="max-w-6xl mt-[40px]  gap-4 md:flex-row flex-col flex mx-auto ">
  
  <img
    className="h-full w-[300px] object-cover rounded-3xl"
    src="/home/tcm.webp"
    alt=""
  />

  <p className="tracking-[0.04em] leading-[1.6] lg:text-[18px] text-[16px] font-secondary font-medium text-[#1e1e1e]">
   Temporal context memory (tcm) is a dual-tiered AI memory system integrating short-term/episodic cache and long-term semantic storage. A promotion engine evaluates recency, frequency, and user-pinned indicators to transfer high-value items from fast cache to persistent vector memory. During query resolution, the Composer merges both tiers into a policy-scoped contextual view. The system continuously demotes stale data, ensuring efficient, accurate, and evolving memory performance
  </p>

</div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default TcmPage;
