import React from "react";
import Navbar from "@/components/Navbar";
import MainBanner from "@/components/services/MainBanner";
import SectionHeading from "@/components/common/SectionHeading";
import {
  PLATFORM_ARCHITECTURE_HEADER_CONFIG,
  PLATFORM_ARCHITECTURE_CONFIG,
  PLATFORM_ARCHITECTURAL_PRINCIPLES_CONFIG
} from "../config/platformArchitectureConfig";
import UspServices from "../components/services/UspServices";
import PlatformHighLevelArchi from "../components/sections/PlatformHighLevelArchi";

import FooterSection from "../components/home/FooterSection";
import ArchitecturalPrinciples from "../components/sections/ArchitecturalPrinciples";
import { ChevronLeft } from "lucide-react";
const PlatformArchitecture = () => {
  return (
    <>
      <Navbar initialTextColor="text-black" />
      <section>
        <div className="lg:mt-[100px] mt-[80px] lg:py-[150px] py-[100px] text-white bg-gradient-primary rounded-[50px]  w-full ">
          <MainBanner data={PLATFORM_ARCHITECTURE_HEADER_CONFIG} />
        </div>
      </section>

      <section className=" px-5 lg:px-0">
        <div className="pt-20 pb-10">
          <SectionHeading
            title="High-level architecture "
            subtitle="System diagram showing layered architecture with glowing connectors"
            titleClassName="text-[#015190]"
            subtitleClassName="text-[#626161]"
            
          />

          <div className="high-level-architecture max-w-7xl md:scale-[0.7] mx-auto md:-mt-[160px] mt-[60px] md:-mb-[160px]">
            <PlatformHighLevelArchi />
          </div>
        </div>
      </section>

      <section >
        <UspServices  data={PLATFORM_ARCHITECTURE_CONFIG} />
      </section>

      <ArchitecturalPrinciples />

      <section className="">
        <div className="w-full px-5  py-[100px] mt-[-100px] bg-white lg:rounded-t-[100px] rounded-t-[50px]">
          <SectionHeading
           titleClassName="text-[#015190]"
            title="Technical specifications"
            subtitle="Enterprise-grade infrastructure and performance metrics"
          />

          <div className="platform-archi-stats gap-6 mt-[60px] w-full flex flex-wrap justify-center ">
            <div className=" w-full md:max-w-[250px]  space-y-4   p-4 rounded-2xl flex flex-col items-center border border-light-lg">
              <h4 className="text-[#015190]  uppercase leading-[1.2] text-[48px] font-primary font-medium">
                10K+
              </h4>
              <p
                className="font-secondary text-[#626161] font-medium text-[18px] leading-[1.4] tracking-[0.02em] text-center 
"
              >
                Tests / Hour
              </p>
            </div>

            <div className="w-full md:max-w-[250px]  space-y-4   p-4 rounded-2xl flex flex-col items-center border border-light-lg">
              <h4 className="text-[#015190] flex items-center   leading-[1.2] text-[48px] font-primary font-medium">
                { <ChevronLeft size={40} strokeWidth="2" />}

                <span className="shrink-0">50ms</span>
              </h4>
              <p
                className="font-secondary text-[#626161] font-medium text-[18px] leading-[1.4] tracking-[0.02em] text-center 
"
              >
                API Latency
              </p>
            </div>

            <div className="  space-y-4 w-full md:max-w-[250px]  p-4 rounded-2xl flex flex-col items-center border border-light-lg">
              <h4 className="text-[#015190]  uppercase leading-[1.2] text-[48px] font-primary font-medium">
                99.9%
              </h4>
              <p
                className="font-secondary text-[#626161] font-medium text-[18px] leading-[1.4] tracking-[0.02em] text-center 
"
              >
                Uptime SLA
              </p>
            </div>

            <div className="  space-y-4 w-full md:max-w-[250px]   p-4 rounded-2xl flex flex-col items-center border border-light-lg">
              <h4 className="text-[#015190]  uppercase leading-[1.2] text-[48px] font-primary font-medium">
                12+
              </h4>
              <p
                className="font-secondary text-[#626161] font-medium text-[18px] leading-[1.4] tracking-[0.02em] text-center 
"
              >
                Global Regions
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default PlatformArchitecture;
