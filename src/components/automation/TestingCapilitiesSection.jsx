import { AUTOMATION_Testing_CONFIG } from "@/config/automationConfig";

import TestingCard from "@/components/card/automation/TestingCard";

import SectionHeading from "@/components/common/SectionHeading";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const TestingSection = ({ sectionData, sectionType }) => {
  return (

    <div className="mx-auto pt-10 md:pt-18 p-6 bg-[#F9F9F9] lg:py-[50px] py-[50px] rounded-[24px] shadow-[0px_0px_8px_4px_#01519080] mt-[60px]" >
      <div className="flex flex-col lg:flex-row  items-center justify-center gap-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center max-w-[420px] w-full shrink-0 text-center">
          <img className="w-16 mb-6" src={sectionData.imgSrc} alt="" />

          <h2
            className="leading-none font-medium text-[#015190] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[0.02em] font-primary"
            dangerouslySetInnerHTML={{ __html: sectionData.name }}
          />

          <p
            className="text-[#797979] mt-4"
            dangerouslySetInnerHTML={{ __html: sectionData.tagline }}
          />
          <Button
            btnText="Learn More"
            className=
            "text-[16px] !w-fit md:flex hidden m-auto mt-[30px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
            href={`${sectionData.link}`}
            icon="CircleArrowOutUpRight"
            iconSize="20px"
          //   useCommonSvg="true"
          />
        </div>

        {/* RIGHT CARDS */}
        <div
          className="
            flex
            flex-wrap
            md:flex-nowrap
            gap-6
            justify-center
            lg:justify-start
            w-full
            lg:w-auto
            overflow-x-auto
            overflow-y-visible
            pb-6
          "
        >
          {sectionData.cards.map((card) => (
            <TestingCard key={card.id} {...card} />
          ))}
        </div>
        <Button
          btnText="Learn More"
          className=
          "text-[16px] !w-fit md:hidden flex m-auto mt-[0px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
          href={`${sectionData.link}`}
          icon="CircleArrowOutUpRight"
          iconSize="20px"
        //   useCommonSvg="true"
        />

      </div>


    </div>

  );
};


const TestingCapabilitiesSection = () => {
  const { title, subtitle, neuroTest, coreTest } = AUTOMATION_Testing_CONFIG;
  return (
    <section>
      <div className=" section-wrapper relative z-10 px-5  bg-white rounded-[50px] sm:rounded-[100px]  ">
        <div className=" pb-[120px] mx-auto">
          <SectionHeading
            subtitleClassName="text-[#626161] "
            titleClassName="text-[#015190] "

            title={title}
            subtitle={subtitle}
          />
          {/* Main Header */}

          {/* NeuroTest Section */}
          <TestingSection sectionData={neuroTest} sectionType="neuroTest" />

          {/* CoreTest Section */}
          <TestingSection sectionData={coreTest} sectionType="coreTest" />
        </div>
      </div>
    </section>
  );
};

export default TestingCapabilitiesSection;
