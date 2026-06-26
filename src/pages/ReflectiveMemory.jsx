import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection"; 
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import { REFLECTIVE_MEMORY_HEADER, CORE_MODULE_CONFIG, LOOP_CARD_CONFIG, Memory_CONFIG, ATTENTION_FLOW_CONFIG } from "../config/reflectivememoryConfig"
import { Atom, Repeat2, Eye, ShieldCheck, LockOpen, UserRoundPen } from 'lucide-react';
// import {loop} from "../../home/loop"
import FeatureCard from "@/components/card/FeaturedCard.jsx";
import * as Icons from "lucide-react";

const ReflectiveMemory = () => {
  const { cards } = LOOP_CARD_CONFIG;
 
  return (
    <div className='bg-[#E9F6FB] menuwhitepage'>
      <Navbar
        wrapperClassName="relative "
        disableScrollHide={true}
        linkClassName="text-black"
        iconClassName="invert-0"
      />
      <section className='mb-[80px] '>
        <MainBanner data={REFLECTIVE_MEMORY_HEADER} />
        <div className="tags flex gap-[40px] justify-center items-center lg:flex-row flex-col  mt-[10px]">
          <span className='text-[14px] text-[#015190] font-[500] font-secondary'>    <Atom className='inline-flex me-2 text-[14px]' />Autonomous learning</span>
          <span className='text-[14px] text-[#015190] font-[500] font-secondary'>    <Repeat2 className='inline-flex me-2 text-[14px]' />Continuous adaptation</span>
          <span className='text-[14px] text-[#015190] font-[500] font-secondary'>    <Eye className='inline-flex me-2 text-[14px]' />Full transparency</span>
        </div>
      </section>
      <UspServices data={CORE_MODULE_CONFIG} />
      <section className='py-[80px] lg:px-0 px-5'>
        <h2 className='font-primary lg:text-[48px] text-[32px] font-[600] text-center'>Cognitive feedback loop</h2>
        <div className='flex md:gap-[40px] justify-center flex-wrap' >
          <div className="img  flex max-w-[700px] shadow-[0px_0px_8px_4px_#01519080] rounded-[24px] px-12 py-12 justify-center mt-12">
            <img src='/home/loop.png' alt="" className='md:scale-[0.8]' />
          </div>
          <div className="flex mt-5 flex-wrap  gap-6 pt-10 justify-center flex-col ">
            {cards.map((card) => (
              <FeatureCard key={card.id} {...card} />
            ))}
          </div>
        </div>


      </section>
      <section className='py-[150px] pt-[80px] mb-[-80px] px-5 lg:px-0 border border-[1px] border-[#D9D9D9] bg-[#fff] border-b-0 border-l-0 border-r-0  rounded-t-[50px] '>
        <SectionHeading
          title="Meta-prompts & refinement"
          subtitle='AIRITHM generates sophisticated meta-prompts that guide its own learning process. <br/> These self-directed instructions enable deeper analysis and more nuanced understanding of complex scenarios.'
          titleClassName="sm:text-[48px]"
          subtitleClassName=" sm:text-[16px] text-[#626161]"
        />

        <div className="max-w-5xl mx-auto lg:mt-[80px] mt-[30px]">
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="soc2 lg:min-w-[419px]">
              <div className="flex mb-5 items-center">
                <span className='inline-block me-6 '>
                   <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38.4" height="38.4" rx="19.2" fill="url(#paint0_linear_650_409)" />
                    <path d="M16.8031 19.1992L18.4031 20.7992L21.6031 17.5992M27.2031 19.1992C27.2031 23.6175 23.6214 27.1992 19.2031 27.1992C14.7848 27.1992 11.2031 23.6175 11.2031 19.1992C11.2031 14.7809 14.7848 11.1992 19.2031 11.1992C23.6214 11.1992 27.2031 14.7809 27.2031 19.1992Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_650_409" x1="0.0112518" y1="19.2049" x2="38.4" y2="19.2049" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6AC0E6" />
                        <stop offset="1" stop-color="#015190" />
                      </linearGradient>
                    </defs>
                  </svg>

                </span>
                <div className='inline-block'>
                  <h3 className='text-[#015190] lg:text-[20px] text-[17px] font-primary font-[600]'>Llm-based evaluation and scoring</h3>
                </div>
              </div>
              <div className="flex mb-5 items-center">
                <span className='inline-block me-6 '>
                  <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38.4" height="38.4" rx="19.2" fill="url(#paint0_linear_650_409)" />
                    <path d="M16.8031 19.1992L18.4031 20.7992L21.6031 17.5992M27.2031 19.1992C27.2031 23.6175 23.6214 27.1992 19.2031 27.1992C14.7848 27.1992 11.2031 23.6175 11.2031 19.1992C11.2031 14.7809 14.7848 11.1992 19.2031 11.1992C23.6214 11.1992 27.2031 14.7809 27.2031 19.1992Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_650_409" x1="0.0112518" y1="19.2049" x2="38.4" y2="19.2049" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#6AC0E6" />
                        <stop offset="1" stop-color="#015190" />
                      </linearGradient>
                    </defs>
                  </svg>

                </span>
                <div className='inline-block'>
                  <h3 className='text-[#015190] lg:text-[20px] text-[17px] font-primary font-[600] '>Dynamic prompt <br /> optimization</h3>
                </div>
              </div>
              <div className="flex mb-5 items-center">
                <span className='inline-block me-6 '>
                  <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38.4" height="38.4" rx="19.2" fill="url(#paint0_linear_650_409)" />
                    <path d="M16.8031 19.1992L18.4031 20.7992L21.6031 17.5992M27.2031 19.1992C27.2031 23.6175 23.6214 27.1992 19.2031 27.1992C14.7848 27.1992 11.2031 23.6175 11.2031 19.1992C11.2031 14.7809 14.7848 11.1992 19.2031 11.1992C23.6214 11.1992 27.2031 14.7809 27.2031 19.1992Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_650_409" x1="0.0112518" y1="19.2049" x2="38.4" y2="19.2049" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6AC0E6" />
                        <stop offset="1" stop-color="#015190" />
                      </linearGradient>
                    </defs>
                  </svg>

                </span>
                <div className='inline-block'>
                  <h3 className='text-[#015190] lg:text-[20px] text-[17px] font-primary font-[600] '>Contextual learning <br /> adaptation</h3>
                </div>
              </div>

            </div>
            <div className="imgbox h-[270px] overflow-hidden lg:w-[434px] w-[100%] bg-[#D9D9D9] rounded-[24px] m-auto">
              <img src="./home/meta-prompts.webp" alt="" />
            </div>
          </div>
        </div>

      </section>
      <UspServices data={Memory_CONFIG} />
      <section className="py-[80px] max-w-7xl mx-auto px-5 lg:px-0 " >
        <SectionHeading
          title="Transparency & governance"
          //  subtitle='AIRITHM generates sophisticated meta-prompts that guide its own learning process. <br/> These self-directed instructions enable deeper analysis and more nuanced understanding of complex scenarios.'
          titleClassName="sm:text-[48px]"
          subtitleClassName=" sm:text-[16px] text-[#626161]"
        />

        <div className="mt-[50px] flex gap-[20px] md:flex-row flex-col">
          <div className="md:w-[600px] border border-[1px] border-[#D9D9D9] bg-[#fff] rounded-[16px] p-[20px]">
            <h3 className='text-[24px] font-secondary font-[500]'>Audit logs</h3>
            <p className='text-[#626161] text-[20px] font-secondary font-[500]'>Complete transparency with detailed logs of all reflection processes and decisions.</p>

            <ul className='md:mt-[20px] mt-[20px]'>
              <li className='flex justify-between mb-3'>
                <span className='text-[16px] text-[#015190] font-[500] font-primary'>Reflection cycles</span>
                <span className='text-[16px] text-[#015190] font-[500] font-primary'>2,847</span>
              </li>
              <li className='flex justify-between mb-3'>
                <span className='text-[16px] text-[#015190] font-[500] font-primary'>Insight generated</span>
                <span className='text-[16px] text-[#015190] font-[500] font-primary'>1,923</span>
              </li>
              <li className='flex justify-between mb-3'>
                <span className='text-[16px] text-[#015190] font-[500] font-primary'>Optimized applied</span>
                <span className='text-[16px] text-[#015190] font-[500] font-primary'>436</span>
              </li>
            </ul>

          </div>
          <div className="md:w-[600px] border border-[1px] border-[#D9D9D9] bg-[#fff] rounded-[16px] p-[20px]">
            <h3 className='text-[24px] font-secondary font-[500]'>Safety protocols</h3>
            <p className='text-[#626161] text-[20px] font-secondary font-[500]'>Built-in safeguards ensure responsible and ethical autonomous learning.</p>

            <ul className='md:mt-[20px] mt-[20px] '>
              <li className='flex justify-between mb-3'>
                <span className='text-[16px] text-[#015190] font-[500] font-primary'>Ethnical boundary enforcement</span>
                <span className='text-[16px] text-[#015190] font-[500] font-primary'><ShieldCheck /></span>
              </li>
              <li className='flex justify-between mb-3'>
                <span className='text-[16px] text-[#015190] font-[500] font-primary'>Secure learning environment</span>
                <span className='text-[16px] text-[#015190] font-[500] font-primary'><LockOpen /></span>
              </li>
              <li className='flex justify-between mb-3'>
                <span className='text-[16px] text-[#015190] font-[500] font-primary'>Human oversight integration</span>
                <span className='text-[16px] text-[#015190] font-[500] font-primary'><UserRoundPen /></span>
              </li>
            </ul>

          </div>
        </div>

      </section>
            <FooterSection />
      



    </div>
  )
}

export default ReflectiveMemory
