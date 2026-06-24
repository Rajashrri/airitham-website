import FeatureCard from "@/components/card/FeaturedCard";
import SectionHeading from "@/components/common/SectionHeading";
import { Brain, Settings } from "lucide-react";
import CapabilitySection from "@/components/home/CapabilitySection.jsx";
import PlatformSynergy from "../components/services/PlatformSynergy";
import CtaSection from "@/components/common/CtaSection";
import { ABOUT_CTA_CONFIG, ABOUT_HEADER_CONFIG , DUAL_PLATFORM_CONFIG , WHY_TWO_PLATFORMS_CONFIG } from "../config/aboutConfig";
import MainBanner from "../components/services/MainBanner";
import Navbar from "@/components/Navbar.jsx";
import FooterSection from "@/components/home/FooterSection";


const AboutPage = () => {

  
  return (
    <>

   <Navbar
     initialTextColor="black"
   />
      <section>
        <div className=" rounded-[50px] lg:mt-[100px] mt-[80px] space-y-[70px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] lg:py-[150px] py-[100px] pt-[120px] pb-[150px] text-white">

          <MainBanner

          data={ABOUT_HEADER_CONFIG}
          
          />
          <img className="mx-auto px-5 lg:px-0" src="/home/about-hero.svg" alt="" />

        </div>
      </section>

      <section className="py-[100px] px-5   bg-white  lg:rounded-b-[100px] rounded-b-[50px] relative z-10">
        <SectionHeading
          title={DUAL_PLATFORM_CONFIG?.title ?? ""}
          subtitle={DUAL_PLATFORM_CONFIG?.subtitle ?? ""}
          subtitleClassName="text-[#626161]"
          titleClassName="text-[#00273A]"
          wrapperClassName="space-y-2.5"
        />

        {Array.isArray(DUAL_PLATFORM_CONFIG?.cards) &&
          DUAL_PLATFORM_CONFIG.cards.length > 0 && (
            <div className="flex flex-wrap gap-6 pt-14 justify-center max-w-7xl mx-auto">
              {DUAL_PLATFORM_CONFIG.cards.map((card) =>
                card ? (
                  <FeatureCard key={card?.id ?? Math.random()} {...card} />
                ) : null
              )}
            </div>
          )}

        {Array.isArray(DUAL_PLATFORM_CONFIG?.dualPlatforms) &&
          DUAL_PLATFORM_CONFIG.dualPlatforms.length > 0 && (
            <div className="max-w-[824px] flex-wrap  rounded-lg sm:rounded-3xl border border-[#D9D9D9] mt-6 bg-[#F9F9F9] mx-auto flex justify-center items-center px-4 py-6 lg:gap-[100px] gap-[30px]">
              {DUAL_PLATFORM_CONFIG.dualPlatforms.map((platform, index) => {
                if (!platform) return null;

                const Icon =
                  platform?.icon === "Settings"
                    ? Settings
                    : platform?.icon === "Brain"
                    ? Brain
                    : null;

                if (!Icon) return null;

                return (
                  <div
                    key={platform?.id ?? index}
                    className="size-[164px] gap-2.5 flex flex-col items-center justify-center rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]"
                  >
                    <Icon size={24} color={platform?.iconColor ?? "#fff"} />

                    <span className="font-sans font-medium text-sm leading-[100%] tracking-[0.04em] text-center text-white whitespace-pre-line">
                      {platform?.label ?? ""}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
      </section>

      <CapabilitySection {...WHY_TWO_PLATFORMS_CONFIG} />

      <PlatformSynergy />
      <CtaSection  {...ABOUT_CTA_CONFIG} />


      <FooterSection />
    </>
  );
};

export default AboutPage;
