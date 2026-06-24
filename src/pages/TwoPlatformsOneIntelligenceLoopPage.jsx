import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection";
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import CtaSection from "../components/common/CtaSection";
import FeatureCard from "./../components/card/FeaturedCard";
import { tpil_HEADER } from "./../config/twoplatformsoneintelligenceloopConfig"
import { Lock } from 'lucide-react';
import * as LucideIcons from "lucide-react";
import Button from '../components/ui/Button';
import ResponsibilitySection from '../components/sections/ResponsibilitySection';
import LayeredArchitecture from '../components/sections/LayeredArchitecture';
import FeatureCardsGrid from '../components/sections/FeatureCardsGrid';
import ClosedLoopFlow from '../components/sections/ClosedLoopFlow';

const TwoPlatformsOneIntelligenceLoopPage = () => {
  return (
    <>
             <Navbar
                wrapperClassName="relative "
                disableScrollHide={true}
                linkClassName="text-black"
                iconClassName="invert-0"
            />
            <section className='md:py-[150px] py-[90px] text-center rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
  
                <MainBanner data={tpil_HEADER} />


               <div className="max-w-7xl md:px-0 px-5 mx-auto">
                 <FeatureCardsGrid />
               </div>
            </section>

            <ClosedLoopFlow />


            <ResponsibilitySection />

            <LayeredArchitecture />




            <FooterSection/>
    </>
  )
}

export default TwoPlatformsOneIntelligenceLoopPage