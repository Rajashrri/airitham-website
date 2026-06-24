import React from "react";
import UspServices from "../components/services/UspServices";
import {
  CORE_TEST_FEATURES_CONFIG,
  CORE_TEST_MODULE_CONFIG,
  QA_TESTING_USP_CONFIG,
  CORE_TEST_HEADER_CONFIG,
  CORE_TEST_CTA_CONFIG
} from "../config/coreTestConfig";
import MainBanner from "../components/services/MainBanner";
import ArchitectureLayers from "../components/services/ArchitectureLayers";
import CtaSection from "@/components/common/CtaSection.jsx";
import FooterSection from "@/components/home/FooterSection";
import Navbar from "../components/Navbar";




const CoreTestPage = () => {
  return (
    <>

    <Navbar
      
    />
      <section className="py-[100px] mt-[80px] lg:mt-[100px] overflow-hidden rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white">
        <MainBanner data={CORE_TEST_HEADER_CONFIG} />
          {/* <div className="h-[308px] w-[917px] bg-[#D9D9D9] rounded-[0px] m-auto mt-[60px] ">
            <img className="w-full" src="/automation/Core-Test.webp" alt="" />
          </div> */}
          
        {/* <div className="max-w-[519px] pt-20  pb-10 mx-auto space-y-4 ">
          <div className="grid grid-cols-1 mx-auto  w-[388px] sm:grid-cols-2 gap-x-20 gap-y-2">
            {CORE_TEST_FEATURES_CONFIG.items.map((item) => (
              <div key={item.id} className="flex items-center h-[48px] gap-4">
            
                {item.iconType === "image" && (
                  <img
                    src={item.iconSrc}
                    alt={item.label}
                    className="w-8 h-8"
                  />
                )}



                <span className="font-primary leading-[1.4]  tracking-[0.04em] text-white text-[16px] font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full border rounded-2xl py-8 border-[#88848440] space-y-2.5 px-5 flex flex-col items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33203 26.6673V21.6673C8.33203 21.2253 8.50763 20.8014 8.82019 20.4888C9.13275 20.1762 9.55667 20.0007 9.9987 20.0007H29.9987C30.4407 20.0007 30.8646 20.1762 31.1772 20.4888C31.4898 20.8014 31.6654 21.2253 31.6654 21.6673V26.6673M19.9987 20.0007V13.334M28.332 26.6673H34.9987C35.9192 26.6673 36.6654 27.4135 36.6654 28.334V35.0007C36.6654 35.9211 35.9192 36.6673 34.9987 36.6673H28.332C27.4116 36.6673 26.6654 35.9211 26.6654 35.0007V28.334C26.6654 27.4135 27.4116 26.6673 28.332 26.6673ZM4.9987 26.6673H11.6654C12.5858 26.6673 13.332 27.4135 13.332 28.334V35.0007C13.332 35.9211 12.5858 36.6673 11.6654 36.6673H4.9987C4.07822 36.6673 3.33203 35.9211 3.33203 35.0007V28.334C3.33203 27.4135 4.07822 26.6673 4.9987 26.6673ZM16.6654 3.33398H23.332C24.2525 3.33398 24.9987 4.08018 24.9987 5.00065V11.6673C24.9987 12.5878 24.2525 13.334 23.332 13.334H16.6654C15.7449 13.334 14.9987 12.5878 14.9987 11.6673V5.00065C14.9987 4.08018 15.7449 3.33398 16.6654 3.33398Z"
                stroke="url(#paint0_linear_1375_173)"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1375_173"
                  x1="3.3418"
                  y1="20.0049"
                  x2="36.6654"
                  y2="20.0049"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFA68D" />
                  <stop offset="1" stop-color="#FD3A84" />
                </linearGradient>
              </defs>
            </svg>

            <h2 className="font-primary text-center font-medium text-[24px] leading-[1.4] tracking-[0.04em]">
              AI-Driven Workflows
            </h2>
          </div>
        </div> */}
      </section>


      

      <UspServices data={QA_TESTING_USP_CONFIG} />

      <UspServices data={CORE_TEST_MODULE_CONFIG} />
      <ArchitectureLayers />
        <CtaSection wrapperClassName="mt-[-100px]" {...CORE_TEST_CTA_CONFIG} />

<FooterSection />

      


    </>
  );
};

export default CoreTestPage;
