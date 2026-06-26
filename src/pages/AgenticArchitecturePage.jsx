import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection"; 
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import {AgenticArchitectureConfig, CORE_MODULE_CONFIG, CORE_MODULE_CONFIG2, PLANING_CTA_CONFIG} from "./../config/agenticarchitectureConfig";
import { BookCheck, ChartArea, Settings } from 'lucide-react';
import CtaSection from "@/components/common/CtaSection";


const AgenticArchitecturePage = () => {
  return (
    <>
        <Navbar
        wrapperClassName="relative "
        disableScrollHide={true}
        linkClassName="text-black"
        iconClassName="invert-0"
    />
    <section className='mb:py-[150px] py-[100px] text-center rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
           
        <MainBanner data={AgenticArchitectureConfig} />
        
    </section>
      <UspServices data={CORE_MODULE_CONFIG} />
      <UspServices data={CORE_MODULE_CONFIG2} />
      <section className='py-[90px]'>
        <div className='max-w-[1232px] m-auto'>
            <SectionHeading
          title="Related topics"
          titleClassName="sm:text-[48px]"
        />
        <div className="grid px-5 grid-cols-12 gap-6 mt-[40px]">
          <div className="md:col-span-4 col-span-12 rounded-[8px] md:p-6 p-3 shadow-[0px_3px_6px_0px_#0151901A]">
            <h3 className='md:text-[24px] text-[18px] flex items-center font-primary font-[600]'><Settings className='text-[#015190] me-2'/> System configuration</h3>
            <img className='mt-3' src="./topics/System Configuration.png" alt="" />
          </div>
          <div className="md:col-span-4 col-span-12 rounded-[8px] md:p-6 p-3 shadow-[0px_3px_6px_0px_#0151901A]">
            <h3 className='md:text-[24px] text-[18px] flex items-center font-primary font-[600]'><ChartArea className='text-[#015190] me-2'/> Performance metrics</h3>
            <img className='mt-3' src="./topics/Performance Metrics.png" alt="" />
          </div>
          <div className="md:col-span-4 col-span-12 rounded-[8px] md:p-6 p-3 shadow-[0px_3px_6px_0px_#0151901A]">
            <h3 className='md:text-[24px] text-[18px] flex items-center font-primary font-[600]'><BookCheck className='text-[#015190] me-2'/>API documentation</h3>
            <img className='mt-3' src="./topics/API Documentation.png" alt="" />
          </div>

        </div>

        </div>
      </section>
      
            <CtaSection wrapperClassName="mt-[-100px]" {...PLANING_CTA_CONFIG} />
            <FooterSection/>
    </>
  )
}

export default AgenticArchitecturePage