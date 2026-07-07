import React from "react";
import {
  ATTENTION_FLOW_CONFIG,
  HAMN_HEADER,
  HAMN_HEADER_CHIPS,
  HAMN_SECTION_CONFIG,
  HAMN_USP_CONFIG,
} from "../config/HamnConfig";
import MainBanner from "../components/services/MainBanner";
import Chip from "../components/common/Chip";
// import IconRenderer from "@/components/common/IconRenderer";
import ImageTextSection from "../components/common/ImageTextSection";
import Navbar from "@/components/Navbar.jsx";
import UspServices from "../components/services/UspServices";
import AttentionHeatmapCard from "../components/services/AttentionHeatmap";
import FooterSection from "@/components/home/FooterSection";
import SectionHeading from "../components/common/SectionHeading";
import { icons } from "lucide-react";

const HamnPage = () => {
  const { steps } = ATTENTION_FLOW_CONFIG;
  return (
    <>
      <Navbar
        
      />
      <section className="px-5 rounded-[50px] lg:px-0 bg-[#E9F6FB]">
        <div className="pt-[100px] pb-[100px] lg:mt-[104px] mt-[50px]">
          <div className="flex gap-4 flex-wrap pb-5 justify-center">
            {HAMN_HEADER_CHIPS.map((item, index) => (
              <Chip key={item.id ?? index} {...item} />
            ))}
          </div>

          <MainBanner data={HAMN_HEADER} />
        </div>
      </section>

      <ImageTextSection {...HAMN_SECTION_CONFIG} />

      <UspServices data={HAMN_USP_CONFIG} />


      <section className="py-[100px] max-w-[1100px] mx-auto px-4">
        <SectionHeading
          title="Attention flow visualization"
          titleClassName="sm:text-[48px] text-[#015190]"
          subtitleClassName="sm:text-[16px] text-[#626161]"
        />

        <div className="mt-16 flex p-9 shadow-[0px_0px_8px_4px_#01519080] rounded-[24px]  justify-between gap-0 flex-wrap sm:flex-nowrap">
          {steps.map((step, index) => {
            const Icon = icons[step.icon.name];

            return (
              <React.Fragment key={step.id}>
                {/* Step */}
                <div className="flex flex-col items-center gap-4 min-w-[140px]">
                  <div className="w-[56px] h-[56px] rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] flex items-center justify-center text-white shadow-md">
                    {Icon && <Icon size={step.icon.size || 32} />}
                  </div>

                  <p className="text-[#015190] font-primary font-medium text-[16px] text-center">
                    {step.label}
                  </p>
                </div>

                {/* Arrow */}
                {index !== steps.length - 1 && (
                  <div className="hidden top-[30px] sm:block flex-1 h-[2px] bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] relative
                    after:content-[''] 
                    after:absolute 
                    after:rounded
                    after:left-[-8px]
                    after:top-[-3px]
                    after:border-[3px] 
                    after:border-[#015190] 
                    after:w-[9px] 
                    after:h-[9px] 
                    after:bg-[#fff]
                  ">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-r-3 border-b-3 border-[#015190] rotate-320" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      <section className="md:py-[100px] py-[70px] px-4 sm:px-0 bg-[#E9F6FB] rounded-t-[100px]">
        <div className="relative text-center px-4 lg:px-0  z-10">
          <h1 class="font-primary lg:text-[48px] text-[#015190] text-[40px]  font-medium  sm:w-fit leading-none sm:text-[48px] sm:max-w-[1000px] mx-auto tracking-[0.02em]">
            Explainable AI
          </h1>

          <p class="font-secondary   font-medium lg:text-[20px] text-[18px] leading-[1.4] tracking-[2%] text-center  mt-5  sm:max-w-[656px] mx-auto pt-2.5 text-[#838383]">
            Complete transparency in decision making with visual attention
            heatmaps and interpretable routing paths.
          </p>
        </div>
        <div className="  mx-auto mt-20 ">
          <div
            className="
                flex flex-col
                gap-12
                items-center
                lg:flex-row
                lg:justify-center
                lg:gap-8
              "
          >
            <div className="soc2 max-w-[419px]">
              <div className="flex mb-5">
                <span className="inline-block me-6 mt-2">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="38.4"
                      height="38.4"
                      rx="19.2"
                      fill="url(#paint0_linear_650_409)"
                    />
                    <path
                      d="M16.8031 19.1992L18.4031 20.7992L21.6031 17.5992M27.2031 19.1992C27.2031 23.6175 23.6214 27.1992 19.2031 27.1992C14.7848 27.1992 11.2031 23.6175 11.2031 19.1992C11.2031 14.7809 14.7848 11.1992 19.2031 11.1992C23.6214 11.1992 27.2031 14.7809 27.2031 19.1992Z"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_650_409"
                        x1="0.0112518"
                        y1="19.2049"
                        x2="38.4"
                        y2="19.2049"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#6AC0E6" />
                        <stop offset="1" stop-color="#015190" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div className="inline-block">
                  <h3 className="text-[#015190] text-[20px] font-primary font-[600] mb-2">
                    Attention Visualization
                  </h3>
                  <p className="text-[16px] font-primary font-[500] text-[#626161] ">
                    Real-time heatmaps showing attention weights across input
                    sources
                  </p>
                </div>
              </div>
              <div className="flex mb-5">
                <span className="inline-block me-6 mt-2">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="38.4"
                      height="38.4"
                      rx="19.2"
                      fill="url(#paint0_linear_650_409)"
                    />
                    <path
                      d="M16.8031 19.1992L18.4031 20.7992L21.6031 17.5992M27.2031 19.1992C27.2031 23.6175 23.6214 27.1992 19.2031 27.1992C14.7848 27.1992 11.2031 23.6175 11.2031 19.1992C11.2031 14.7809 14.7848 11.1992 19.2031 11.1992C23.6214 11.1992 27.2031 14.7809 27.2031 19.1992Z"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_650_409"
                        x1="0.0112518"
                        y1="19.2049"
                        x2="38.4"
                        y2="19.2049"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#6AC0E6" />
                        <stop offset="1" stop-color="#015190" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div className="inline-block">
                  <h3 className="text-[#015190] text-[20px] font-primary font-[600] mb-2">
                    Decision Pathways
                  </h3>
                  <p className="text-[16px] font-primary font-[500] text-[#626161] ">
                    Traceable routing decisions with confidence scores
                  </p>
                </div>
              </div>
              <div className="flex mb-5">
                <span className="inline-block me-6 mt-2">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="38.4"
                      height="38.4"
                      rx="19.2"
                      fill="url(#paint0_linear_650_409)"
                    />
                    <path
                      d="M16.8031 19.1992L18.4031 20.7992L21.6031 17.5992M27.2031 19.1992C27.2031 23.6175 23.6214 27.1992 19.2031 27.1992C14.7848 27.1992 11.2031 23.6175 11.2031 19.1992C11.2031 14.7809 14.7848 11.1992 19.2031 11.1992C23.6214 11.1992 27.2031 14.7809 27.2031 19.1992Z"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_650_409"
                        x1="0.0112518"
                        y1="19.2049"
                        x2="38.4"
                        y2="19.2049"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#6AC0E6" />
                        <stop offset="1" stop-color="#015190" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div className="inline-block">
                  <h3 className="text-[#015190] text-[20px] font-primary font-[600] mb-2">
                    Audit Trail
                  </h3>
                  <p className="text-[16px] font-primary font-[500] text-[#626161] ">
                    Complete audit logs for enterprise compliance and governance
                  </p>
                </div>
              </div>
            </div>
            <AttentionHeatmapCard />
          </div>
        </div>
      </section>

      

      <FooterSection />
    </>
  );
};

export default HamnPage;
