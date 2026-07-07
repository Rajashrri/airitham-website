import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection"; 
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import CtaSection from "../components/common/CtaSection";
import {Pc_HEADER, pc_USP_CONFIG , TIMELINE_SECTION_CONFIG} from "./../config/PlatformCapabilitiesConfig"
import { Cloud, CodeXml,TestTubeDiagonal } from 'lucide-react';
import RealTime from "../components/services/Realtime"
import * as LucideIcons from "lucide-react";
import Button from '../components/ui/Button';
import TimeLine from '../components/services/TimeLine';
import {
  Bot,
  Play,
  Brain,
  Shield,
  GraduationCap,
  BarChart3,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";
import FeatureGrid from '../components/sections/FeaturedGrid';





const PlatformCapabilitiesPage = () => {
  return (
    <>
      <Navbar

        />
            <section className='lg:mt-[100px] mt-20 py-[100px] lg:py-[150px] text-center rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
       
        <MainBanner data={Pc_HEADER} />
       
    </section>
    <section className='pt-[90px] relative  '>
             <SectionHeading
                        title="Feature deep dive"
                        subtitle='Explore how each capability transforms your testing workflow'
                       
                        titleClassName="  text-[#015190]"
                        subtitleClassName="  text-[#626161]"
                    />
       <FeatureGrid />
    </section>

    <section className='py-[70px] rounded-[50px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)]'>
           <SectionHeading
                        title="Autonomous test generation"
                        subtitle='AI-powered test creation that understands your application.'
                        titleClassName=" text-[#fff]"
                        subtitleClassName="  text-[#626161]"
                    />
    </section>
        <section className='py-[70px] pb-[20px]'>
           <SectionHeading
                        title="What it does"
                        subtitle='Our autonomous test generation engine analyzes your application’s structure, user flows, and business logic to automatically create comprehensive test suites. It identifies critical paths, edge cases, and potential failure points without manual intervention.'
                        titleClassName="  text-[#015190] " 
                        subtitleClassName="  text-[#626161] max-w-[819px]"
                    />
    </section>
     <RealTime data={TIMELINE_SECTION_CONFIG} />
     <section className='py-[70px] rounded-[50px] bg-[linear-gradient(360deg,#000000_0%,#042539_100%)] mt-[70px]'>
               <SectionHeading
                        title="Key benefits"
                        subtitle='Deliver measurable efficiency, speed, and resilience across workflows <br/> with outcomes designed to scale alongside enterprise demands.'
                        titleClassName="sm:text-[48px] text-[#fff]"
                        subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[819px]"
                    />
                   <div className="max-w-[1360px] px-5 mx-auto mt-[40px] flex flex-wrap gap-6 justify-center">
                    <div className="flex-1 min-w-[250px]  bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-2xl border border-[#747474] text-center">
                      <h2 className='mae-gradient-text w-fit mx-auto  text-[48px] font-primary font-[600]'>95%</h2>
                      <p className='text-[20px] text-white font-secondary'>Coverage increase</p>
                      <p className='text-[14px] mt-2 text-white font-secondary'>Expand operational visibility with broader, more consistent process reach.</p>
                    </div>

                    <div className="flex-1 min-w-[250px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-[16px] border border-[#747474] text-center">
                      <h2 className=' mae-gradient-text w-fit mx-auto text-[48px] font-primary font-[600]'>10x</h2>
                      <p className='text-[20px] text-[#fff] font-secondary'>Faster creation</p>
                        <p className='text-[14px] mt-2 text-white font-secondary'> Accelerate development cycles without compromising precision or quality.</p>
                    </div>

                    <div className="flex-1 min-w-[250px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-[16px] border border-[#747474] text-center">
                      <h2 className='mae-gradient-text w-fit mx-auto text-[48px] font-primary font-[600]'>70%</h2>
                      <p className='text-[20px] text-[#fff] font-secondary'>Cost reduction</p>
                        <p className='text-[14px] mt-2 text-white font-secondary'> Optimize resource use to lower operational spend sustainably.</p>
                    </div>

                    <div className="flex-1 min-w-[250px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-[16px] border border-[#747474] text-center">
                      <h2 className='mae-gradient-text w-fit mx-auto text-[48px] font-primary font-[600]'>85%</h2>
                      <p className='text-[20px] text-[#fff] font-secondary'>Risk mitigation</p>
                        <p className='text-[14px] mt-2 text-white font-secondary'> Strengthen safeguards and reduce exposure through proactive controls.</p>
                    </div>
                  </div>

     </section>
     <section className='py-[90px] px-5'>
        <SectionHeading
                        title="Real-world use cases"
                       
                        titleClassName=" text-[#015190]"
                        
                    />
                  <div className="max-w-[1227px] mx-auto mt-[40px] flex flex-wrap gap-5 justify-center">
  <div className="flex-1 min-w-[280px] transition-shadow duration-300
                hover:shadow-[0px_0px_40px_2px_#01519040] px-5 border-light-sm py-6 shadow-[0px_0px_16px_0px_#0151900D] bg-[#fff] rounded-[16px]">
    <h2 className='font-[600] font-primary text-[24px]'>E-commerce platform</h2>
    <p className='text-[#626161] text-[14px] sm:text-[14px] mt-2'>Automatically generates tests for product catalogs, shopping carts, and checkout flows across multiple payment methods.</p>
  </div>

  <div className="flex-1 min-w-[280px] transition-shadow duration-300
                hover:shadow-[0px_0px_40px_2px_#01519040] px-5 border-light-sm py-6 shadow-[0px_0px_16px_0px_#0151900D] bg-[#fff] rounded-[16px]">
    <h2 className='font-[600] font-primary text-[24px]'>Banking application</h2>
    <p className='text-[#626161] text-[14px] sm:text-[14px] mt-2'>Create comprehensive test suites for account management, transactions, and security features with regulatory compliance.</p>
  </div>
</div>

                                  <div className="flex mx-auto   flex-col-reverse   sm:flex-row justify-center items-stretch gap-4 mt-[30px] max-w-[300px] sm:max-w-full">
                      <div  className="bg-[radial-gradient(66.19%_497.1%_at_50%_50%,_#015190_0%,_#015190_50.32%,_#6AC0E6_100%)] overflow-hidden   rounded-lg  p-0.5">
                      <Button
                                            icon="CircleArrowOutUpRight"
                                            iconSize="20px" btnText="View Architecture"
                                            href="/platform-architecture"
                                          
                                            className=" shadow-[0px_30px_12px_0px_#00000005]  bg-white text-[#015190]"
                                        />

                                      </div>
                                        <Button
                                            icon="CircleArrowOutUpRight"
                                            iconSize="20px"
                                             btnText="Request Demo"
                                             href="/demo"
                                            className="  bg-primary-gradient text-white"
                                        />

                    </div>



     </section>
     <FooterSection/>

    </>
  )
}

export default PlatformCapabilitiesPage