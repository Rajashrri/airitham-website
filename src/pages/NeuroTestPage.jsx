import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection"; 
import Navbar from "@/components/Navbar.jsx";
import CtaSection from "../components/common/CtaSection"
import Realtime from "../components/services/Realtime"
import LogoSlider from "../components/sections/LogoSlider"
import {
    Neuro_Test_HEADER,
    Core_capabiliti_CONFIG,
    Key_feature_Config,
    Key_feature2_Config,
    TIMELINE_SECTION_CONFIG,
    benifits_Config,
    AUTOMATION_CTA_CONFIG
} from "../config/NeuroTestConfig"
import MainBanner from '../components/services/MainBanner';
import { Brain, CircleCheck, MemoryStick, Network, Search, Shield, ShieldCheck } from 'lucide-react';
import TimeLine from "../components/services/TimeLine"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const NeuroTestPage = () => {
    const { list } = Key_feature_Config;
    const { list: listtwo } = Key_feature2_Config;
    const { cards } = benifits_Config

    return (
        <>
            <Navbar
                wrapperClassName="relative "
                disableScrollHide={true}
                linkClassName="text-black"
                iconClassName="invert-0"
            />
            <section className='py-[100px] rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
                <MainBanner data={Neuro_Test_HEADER} />
                {/* <div className="h-[308px] w-[917px] bg-[#D9D9D9] rounded-[0px] m-auto mt-[60px] mb-[30px]">
                    <img src="/automation/Neuro-Test.webp" alt="" />
                </div> */}
            </section>
            <section className='py-[80px] px-5 max-w-[780px] mx-auto '>
                <SectionHeading
                    title="What is Neuro Test?"
                    subtitle="The single plugin-based, architecture-aware hub that unifies AI testing into one compliant, governed platform. Neurotest orchestrates multiple evaluation frameworks to provide comprehensive quality assurance for your AI systems."
                   
                    titleClassName="  text-[#015190]"
                    subtitleClassName="  text-[#626161]"
                />
                <div className="mt-[50px]">
                    <ul className='flex flex-wrap gap-[20px] justify-center'>
                        <li className=' px-5 py-2 rounded-[100px] border border-[1px] border-[#015190] w-fit text-[#015190]  font-primary text-[16px]'><Brain className='me-3 inline-flex' /><span className="font-[600]">LLM correctness</span> </li>
                        <li className=' px-5 py-2 rounded-[100px] border border-[1px] border-[#015190] w-fit text-[#015190]  font-primary text-[16px]'><MemoryStick className='me-3 inline-flex' /><span className="font-[600]">Planning & memory</span> </li>
                        <li className=' px-5 py-2 rounded-[100px] border border-[1px] border-[#015190] w-fit text-[#015190]  font-primary text-[16px]'><ShieldCheck className='me-3 inline-flex' /><span className="font-[600]">Safety & robustness</span> </li>
                        <li className=' px-5 py-2 rounded-[100px] border border-[1px] border-[#015190] w-fit text-[#015190]  font-primary text-[16px]'><Network className='me-3 inline-flex' /><span className="font-[600]">Multi-agent tool-use</span> </li>
                        <li className=' px-5 py-2 rounded-[100px] border border-[1px] border-[#015190] w-fit text-[#015190]  font-primary text-[16px]'><Search className='me-3 inline-flex' /><span className="font-[600]">RAG retrieval quality</span> </li>
                        <li className=' px-5 py-2 rounded-[100px] border border-[1px] border-[#015190] w-fit text-[#015190]  font-primary text-[16px]'><CircleCheck className='me-3 inline-flex' /><span className="font-[600]">Compliance validation</span> </li>
                    </ul>
                </div>

            </section>
            <div className='bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] rounded-tl-[100px] rounded-tr-[100px] rounded-br-0 rounded-bl-0 pb-[150px]'>
                <UspServices data={Core_capabiliti_CONFIG} />
            </div>
            <div className="mt-[-100px]  relative z-10">
                <div className=" rounded-[50px] px-5  md:rounded-[100px]  py-[80px] bg-[#fff] ">
                    <SectionHeading
                    
                        title="A Unified Architecture for AI Evaluation"
                    
                        titleClassName=" text-[#015190] normal-case"
                        subtitleClassName=" text-[#626161]"
                    />
                    <div className="max-w-[1190px] mt-[60px] m-auto px-5 py-5 lg:p-5 bg-[radial-gradient(66.19%_497.1%_at_50%_50%,_#015190_0%,_#015190_50.32%,_#6AC0E6_100%)] rounded-[24px] ">
                        <div className="grid lg:grid-cols-3 grid-cols-1  gap-4">
                            <div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px]">
                                    <h3 className='text-[#015190] text-[24px] font-primary mb-[20px] block'>Airithm UI</h3>
                                    <p className='text-[#626161] text-[18px] font-[700] font-secondary'>Vux dashboard</p>
                                </div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] mt-[20px]">
                                    <h3 className='text-[#015190] text-[24px] font-primary mb-[20px] block'>Plugin ecosystem</h3>

                                    <ul className='list-disc pl-5'>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>Deepeval</li>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>Ragas</li>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>Agentbench</li>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>Helm</li>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>Trlens</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] ">
                                    <h3 className='text-[#015190] text-[24px] font-primary font-[500] text-center block'>FastAPI service layer</h3>
                                </div>
                                <div className="hidden top-[10px] left-1/2 sm:block flex-1 w-[2px] h-[70px] bg-[#fff] relative
                                    after:content-[''] 
                                    after:absolute 
                                    after:rounded-[50%]
                                    after:left-[-5px]
                                    after:top-[-3px]
                                    after:border-[3px] 
                                    after:border-[#fff] 
                                    after:w-[12px] 
                                    after:h-[12px] 
                                    after:bg-[#fff]
                                ">
                                    <span className="absolute right-0 left-[-7px] bottom-0  w-4 h-4 border-r-3 border-b-3 border-[#ffffff] rotate-45" />
                                </div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] mt-[20px]">
                                    <h3 className='text-[#015190] text-[24px] font-primary text-center  block'>Evaluation suite loader</h3>
                                </div>
                                <div className="hidden top-[10px] left-1/2 sm:block flex-1 w-[2px] h-[70px] bg-[#fff] relative
                                    after:content-[''] 
                                    after:absolute 
                                    after:rounded-[50%]
                                    after:left-[-5px]
                                    after:top-[-3px]
                                    after:border-[3px] 
                                    after:border-[#fff] 
                                    after:w-[12px] 
                                    after:h-[12px] 
                                    after:bg-[#fff]
                                ">
                                    <span className="absolute right-0 left-[-7px] bottom-0  w-4 h-4 border-r-3 border-b-3 border-[#ffffff] rotate-45" />
                                </div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] mt-[20px]">
                                    <h3 className='text-[#015190] text-[24px] font-primary text-center  block'>Evaluation orchestrator</h3>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] ">
                                    <h3 className='text-[#015190] text-[24px] font-primary mb-[20px] block'>Data inputs</h3>

                                    <ul className='list-disc pl-5'>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>Jsonl tests</li>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>Agent traces</li>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>Synthetic data</li>
                                    </ul>
                                </div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] mt-[20px]">
                                    <h3 className='text-[#015190] text-[24px] font-primary  block'>Data inputs</h3>
                                </div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] mt-[20px]">
                                    <h3 className='text-[#015190] text-[24px] font-primary mb-[20px] block'>Result storage</h3>
                                    <p className='text-[#626161] text-[18px] font-[700] font-secondary'>PostgreSQL</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <section className='py-[90px] px-6 md:rounded-[100px] rounded-[40px] bg-[#E9F6FB]'>
                <SectionHeading
                    title="Key features"
                    // subtitle='The single, plugin-based, architecture-aware hub that unifies AI testing into one compliant,<br/> governed platform. NeuroTest orchestrates multiple evaluation frameworks to provide <br/> comprehensive quality assurance for your AI systems.'
                    titleClassName="sm:text-[40px] text-[32px] text-[#015190]"
                    subtitleClassName=" sm:text-[16px] text-[#626161]"
                />
                <div className="py-[40px] max-w-[891px] mx-auto lg:px-12 px-5 mt-9 grid grid-cols-1 md:grid-cols-2 gap-[40px] bg-[#F9F9F9] shadow-[0px_0px_8px_4px_#01519080] rounded-[24px]">

                    {/* Column 1 */}
                    <ul className=''>
                        {list.map((item, index) => (
                            <li
                                key={index}
                                className="text-[#015190] flex items-center font-primary font-semibold text-[20px] mb-[18px]"
                            >
                                <span className="inline-flex me-5 bg-[radial-gradient(66.19%_497.1%_at_50%_50%,_#015190_0%,_#015190_50.32%,_#6AC0E6_100%)] h-[40px] w-[40px] justify-center items-center rounded-full">
                                    <CircleCheck className="text-white h-[19px]" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Column 2 */}
                    <ul>
                        {listtwo.map((item, index) => (
                            <li
                                key={index}
                                className="text-[#015190] flex items-center font-primary font-semibold text-[20px] mb-[18px]"
                            >
                                <span className="inline-flex me-5 bg-[radial-gradient(66.19%_497.1%_at_50%_50%,_#015190_0%,_#015190_50.32%,_#6AC0E6_100%)] h-[40px] w-[40px] justify-center items-center rounded-full">
                                    <CircleCheck className="text-white h-[19px]" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>
            </section>
            <div className='mb-20 '>
                  <Realtime data={TIMELINE_SECTION_CONFIG} />

            </div>
            <section className='py-20 bg-[linear-gradient(180deg,#042539_0%,#000000_100%)]
                rounded-t-[50px] md:rounded-t-[100px]'>
                <SectionHeading
                    title="Enterprise benefits"
                  
                    titleClassName="  text-[#fff]"
                    
                />

                <div class="flex flex-wrap px-5   gap-6 pt-10 justify-center max-w-7xl mx-auto">
                    {
                        cards.map((item, index) => (
                            <div key={index} class={`core-feature-card background: linear-gradient(
                        180deg,
                        rgba(255, 255, 255, 0.1) 0%,
                        rgba(153, 153, 153, 0.1) 100%
                        );
                        transition-shadow duration-300    hover:shadow-[0px_0px_40px_2px_#01519040] shrink-0  w-full sm:w-[365px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]  gap-[80px]  rounded-3xl border border-[1px] border-[#9d9d9d ] p-5 gap-12 flex flex-col ${item.cardClass}`}>
                                <div class="feature-card-content">
                                    <h2 class="font-primary  bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent font-medium text-[24px] leading-[1.2] mb-[24px] sm:mb-[24px]" >{item.title}</h2>
                                    <p class="font-secondary text-[14px] sm:text-[18px] leading-[1.4]  text-white" >{item.description}</p>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </section>
            <section className="py-20 max-w-[1300px] mx-auto px-4">
                   <SectionHeading
                    title="Integrations"
                    
                   
                    subtitleClassName="  text-[#fff]"
                />
               <LogoSlider/>
            </section>

                <div className='pt-[80px]'>
             <CtaSection wrapperClassName="mt-[-100px]" {...AUTOMATION_CTA_CONFIG} />

                </div>
            <FooterSection />



        </>
    )
}

export default NeuroTestPage