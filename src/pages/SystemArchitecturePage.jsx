import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import MainBanner from "../components/services/MainBanner";
import ContextFlowDiagram from "../components/sections/ContextFlowDiagram";
import SectionHeading from "../components/common/SectionHeading";
import FeatureCard from "../components/card/FeaturedCard";
import ArchitectureDiagram from "../components/sections/ArchitectureDiagram";
import MetricsSection from "../components/sections/MetricsSection";
import ReflectiveMemoryLoop from "../components/sections/ReflectiveMemoryLoop";
import { SYSTEM_ARCHI_CTA_CONFIG, SYSTEM_ARCHI_HEADER_CONFIG, SYSTEM_ARCHI_USP_CONFIG_ONE, SYSTEM_ARCHI_USP_CONFIG_TWO } from "../config/systemArchiConfig";
import TechStackSection from "../components/sections/TechStackSection";
import CtaSection from "../components/common/CtaSection";
const SystemArchitecturePage = () => {
  return (
    <>
      <Navbar />

      <div
        className="bg-black rounded-t-[100px]"
      >
        <div className="mt-[100px] px-5 md:rounded-[100px] rounded-[50px] md:py-[150px] py-[100px] pb-[60px] bg-gradient-primary space-y-10">
          <MainBanner data={SYSTEM_ARCHI_HEADER_CONFIG} />
          <img
            src="/topics/system-architecture-hero.png"
            alt=""
            className="m-auto w-[285px]  shadow-[0px_0px_8px_4px_#01519080] rounded-[24px]"
          />
        </div>
      </div>

      <section>
        <div className="bg-black  ">
          <div
            className="bg-[linear-gradient(360deg,#042539_0%,#000000_100%)] rounded-t-[100px]
"
          >
            <div className="system-architecture-top">
              <SectionHeading
                titleClassName="text-white py-[86px]"
                title="Context flow diagram"
              />

              <img src="/svg/control-flow.png" className="max-w-[830px] m-auto" alt="" />
            </div>

            <div className="system-architecture-bottom pt-60 pb-[244px]">
              <h2 class="font-primary mb-[52px] font-medium md:text-[40px] text-[32px] leading-[100%] tracking-[0.02em] text-center text-white">
                Core Modules
              </h2>
              <div className="max-w-7xl px-5 gap-8 flex mx-auto flex-wrap justify-center">
                {SYSTEM_ARCHI_USP_CONFIG_ONE.cards.map((item) => (
                  <FeatureCard {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArchitectureDiagram />

      <section>
        <div className=" section-overlap space-y-10 mt-[-100px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)]">
          <SectionHeading
            title={"Context & memory lifecycle"}
            titleClassName="text-white"
          />

          <img src="/svg/control-flow.png" className="max-w-[830px] m-auto" alt="" />
        </div>
      </section>

      <section>
        <div className="md:rounded-[100px] px-5 rounded-[50px] py-[100px] space-y-10  bg-white relative z-4 mt-[-100px]  w-full  ">
          <SectionHeading
            title="Multi-agent coordination diagram"
            titleClassName="text-[#00273A]"
          />

          <div className="image-wrapper  max-w-[600px] shadow-[0px_0px_8px_4px_#01519080] rounded-[24px] overflow-hidden p-6  mx-auto">
            <img
              className="max-w-[410px] m-auto object-contain "
              src="/topics/multi-agent-diagram.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div className="section-overlap-top mt-[-100px] bg-[linear-gradient(180deg,#042539_0%,#000000_100%)]">
          <div className="space-y-10">
            <SectionHeading
              titleClassName="text-white"
              title="Governance & security layer"
            />

            <div className="img-wrapper px-5 mx-auto max-w-[640px]">
              <img
                className="max-w-[420px] m-auto"
                src="/topics/goverance-layer-diagram.png"
                alt=""
              />
            </div>
          </div>

          <MetricsSection />

          <ReflectiveMemoryLoop />
        </div>
      </section>

      <section>
        <div className="py-[100px] border border-b-[#D9D9D9]  bg-white mt-[-100px] md:rounded-[100px] rounded-[50px]">
          <SectionHeading
            titleClassName="text-[#00273A] normal-case"
            title="Integrate in minutes. <br /> Scale to billions of context events."
          />


          <TechStackSection />


        </div>
      </section>

      <section>

        <div className="pt-[100px] px-5">
          <SectionHeading

          title="Deployment architecture"
          
          />


          <div className="wrapper-img  mb-[90px] mt-[30px] max-w-[500px] mx-auto shadow-[0px_0px_8px_4px_#01519080] rounded-[24px]">
            <img src="/topics/deployment-diagram.png" className="max-w-[400px] m-auto" alt="" />
          </div>
        </div>
      </section>


         <section>
        <div className="bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] rounded-t-[100px] relative z-3 pt-[100px] pb-[200px]">
          <SectionHeading
            title={"Core concept"}
            titleClassName="text-white"
            titleSize="sm:text-[40px] text-[32px] "
           
          />

          <div className="flex flex-wrap w-full  gap-6 pt-10 justify-center  mx-auto">
            {SYSTEM_ARCHI_USP_CONFIG_TWO?.cards?.map((item) => (
              <FeatureCard {...item} contentClass="gap-[14px]" />
            ))}
          </div>
        </div>
      </section>

      <CtaSection wrapperClassName="mt-[-100px]" {...SYSTEM_ARCHI_CTA_CONFIG} />
      <FooterSection />
    </>
  );
};

export default SystemArchitecturePage;












