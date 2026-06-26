import { Earth } from "lucide-react";
import React from "react";
import { HOME_ENTERPRISE_CONFIG, HOME_LOGOS } from "../../config/homeConfig.js";
import EnterpriseCard from "../card/EnterpriseCard.jsx";
import SectionHeading from "@/components/common/SectionHeading";
import Technologies from "../sections/LogoSlider.jsx";
const EnterpriseSection = () => {
  const { title, subtitle, cards } = HOME_ENTERPRISE_CONFIG;

  return (
    <>
    <section className="">
      <div className="bg-white rounded-[50px] px-4 md:px-0 sm:rounded-[100px] py-[100px]  z-10 relative   mt-[-100px]">
        <div className="max-w-12xl mx-auto ">
          <SectionHeading
            title={title}
            titleClassName="text-[#015190]"
            subtitleClassName=" text-[#757575]"
            subtitle={subtitle}
            wrapperClassName="w-full  sm:max-w-[709px] mx-auto"
          />

          <div className="group-icon py-4 justify-center flex flex-wrap mx-auto gap-[42px] max-w-[1224px]">
            {/* {HOME_LOGOS.map((logo, index) => (
              <img
                key={index}
                src={`/home/logo/${logo}`}
                alt={`logo ${index + 1}`}
                className="size-20 object-cover"
              />
            ))} */}
            <Technologies/>
          </div>

         
        </div>
      </div>
    </section>
    <section>
          <div className="bg-white rounded-[50px] px-4 md:px-0 sm:rounded-[100px] py-[100px] pt-[40px]  z-10 relative   mt-[-100px]">
        <div className="max-w-12xl mx-auto ">
          <SectionHeading
            title="Secure and resilient by design"
            titleClassName="text-[#015190]"
            subtitleClassName=" text-[#757575]"
            subtitle={subtitle}
            wrapperClassName="w-full  sm:max-w-[709px] mx-auto"
          />
           <div className="flex mt-[90px] flex-wrap justify-center gap-14 sm:gap-10 mx-auto max-w-[350px] sm:max-w-[1212px] px-4">
            {Array.isArray(cards) &&
              cards.length > 0 &&
              cards.map((enterprise) => (
                <EnterpriseCard key={enterprise.id} {...enterprise} />
              ))}
          </div>
          </div>
        </div>
    </section>
    </>
  );
};

export default EnterpriseSection;
