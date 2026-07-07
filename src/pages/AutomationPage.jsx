
import TestingCapabilitiesSection from "@/components/automation/TestingCapilitiesSection";
import HeroSection from "@/components/common/HeroSection";
import LifeCycleSection from "@/components/automation/LifeCycleSection";
import CtaSection from "@/components/common/CtaSection";
import FooterSection from "@/components/home/FooterSection";



import {AUTOMATION_HERO_CONFIG , AUTOMATION_CTA_CONFIG} from  '@/config/automationConfig'
import Navbar from "../components/Navbar";
import MainBanner from "../components/services/MainBanner";


export const AI_AUTOMATION_HEADER = {
  heading: "AI Enabled Intelligent <br class='md:block hidden' /> Test Automation Platform",
   headclass:"pt-0 text-white",
   headingclass:"text-[#fff]",
  paragraph:
    "AIRITHM Test Studio revolutionizes testing with two powerful capabilities- NeuroTest for AI/ <br class='md:block hidden' /> LLM and CoreTest for enterprise applications.",
//   backgroundImage: "/bg/gradient.png",
  buttons: [
   {
  text: "Watch Demo",
  className:
    "text-[#015190] border border-[2px] border-[#015190] bg-white",
  icon: "CircleArrowOutUpRight",
  hoverIcon:true,
  iconSize: "20px",
  href: "/demo",
},
{
  text: "Start Free Trial",
  className:
    "  bg-primary-gradient text-white",
  href: "/contact-us",
  icon: "CircleArrowOutUpRight",
  iconSize: "20px",
}

  ],
};



const AutomationPage = () => {
  return (
    <>
 <Navbar
     initialTextColor="black"
   />




      <div className='lg:mt-[100px] mt-[80px] rounded-[50px] lg:py-[150px] py-[100px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
               
                <MainBanner data={AI_AUTOMATION_HEADER} />

            </div>
      <TestingCapabilitiesSection />

      <LifeCycleSection />

      <CtaSection wrapperClassName="mt-[-100px]" {...AUTOMATION_CTA_CONFIG} />
      <FooterSection />
    </>
  );
};

export default AutomationPage;
