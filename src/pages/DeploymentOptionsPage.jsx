import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection"; 
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import CtaSection from "../components/common/CtaSection";
import {Integrations_HEADER, PLANING_CTA_CONFIG} from "./../config/deploymentoptionsConfig"
import { Cloud, CodeXml, GitBranch, TestTubeDiagonal } from 'lucide-react';
import * as LucideIcons from "lucide-react";
import Button from '../components/ui/Button';

const DeploymentOptionsPage = () => {

     const type =[
        {
            id:1,
            title:"Cloud",
            dis:"Fully managed SaaS deployment. <br><br>",
            points:["Zero infrastructure management", "Automatic updates and scaling", "Global CDN and high availability", "Enterprise security and compliance"],
            icon:"Cloud"
        },
        {
            id:2,
            title:"Hybrid",
            dis:"Customer-controlled data with cloud intelligence.",
            points:["Data remains in your environment", "Cloud-powered analytics and AI", "Flexible data governance","Reduced latency for local workloads"],
            icon:"Server"
        },
        {
            id:3,
            title:"On-Premise",
            dis:"Isolated, regulated, air-gapped environments.",
            points:["Complete data sovereignty", "Air-gapped security", "Regulatory compliance ready","Custom infrastructure integration"],
            icon:"ShieldCheck"
        }
    ]
  return (
    <>
     <Navbar
            wrapperClassName="relative "
            disableScrollHide={true}
            linkClassName="text-black"
            iconClassName="invert-0"
        />
            <section className='md:py-[150px] py-[90px] text-center rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
       
        <MainBanner data={Integrations_HEADER} />
       
    </section>
    <section className=' bg1 py-[190px] mt-[-100px] mb-[-100px]  relative'>
          <SectionHeading
                            title="Choose your deployment model"
                            subtitle='Select the deployment option that best fits your security requirements, compliance <br/> needs, and operational preferences.'
                            titleClassName="sm:text-[48px]"
                            subtitleClassName=" sm:text-[16px] text-[#626161]"
                        />
        <div className="max-w-[1248px] m-auto flex mt-[50px] flex-wrap md:px-0 px-5 gap-6 relative z-100">

              {
                            type.map((item,index, id)=>{
                                    const Icon = LucideIcons?.[item.icon];
                                    return(
                                           <div id={index} className="md:w-[400px] border border-[1px] border-[#bfbfbf]  w-[100%] transition-shadow duration-300
  hover:shadow-[0px_0px_40px_2px_#01519040] rounded-2xl bg-[#fff]   gap-10 p-5 md:px-6 px-0 flex flex-col items-start">
                                      
                                      <div className="">
                                          
                                          {Icon && <Icon size={32} className="text-[#015190]" />}
                                      </div>
                                
                                      <div className="sidecard-group sapce-y-6">
                                        <h3 className="text-[24px] font-primary font-[600] tracking-[0.02em] leading-[1.2] text-[#1e1e1e] mb-4">
                                          {item.title}
                                        </h3>
                                        <p className='text-[#626161] text-[18px] font-secondary font-[500]'   dangerouslySetInnerHTML={{ __html: item.dis }}></p>
                                
                                        {/* Points list */}
                                        <ul className="space-y-2.5 mt-8">
                                          {item.points?.map((list, i) => (
                                            <li key={i} className="flex items-center gap-3 text-[#015190]">
                                           
                                                {/* <img src="./svg/check.svg" alt="icon" className="w-5 h-5" /> */}
                                                <LucideIcons.Check/>
                                             
                                
                                              <span className="text-base text-[16px] font-normal font-secondary leading-none tracking-[0.0em]">
                                                {list.label || list}
                                              </span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                        <Button
                                            icon="CircleArrowOutUpRight"
                                            iconSize="20px"
                                            // href=""
                                            btnText="Learn More"
                                            className="text-[16px]  w-[100%] shadow-[0px_30px_12px_0px_#00000005] mt-0 py-5 px-4 font-primary font-[600] leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                        />
                                    </div>


            
                                    )
                             
                            })
                        }
        </div>

    </section>
    <section className='py-[90px] md:px-0 px-5 pb-[200px] text-center md:rounded-t-[100px] rounded-t-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
                 <SectionHeading
                            title="Deployment comparison"
                            subtitle='Compare security, scalability, control, and maintenance across deployment options'
                            titleClassName="sm:text-[48px]"
                            subtitleClassName=" sm:text-[16px] text-[#FFFFFF]"
                        />

                  
                    <div className="max-w-[1236px]  rounded-2xl mt-[60px] mx-auto border border-[1px] border-[#838383] rounded-2xl p-[1px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(131,131,131,0.1)_100%)]">
                 

                            {/* Header */}
                            <div className="grid grid-cols-4 gap-6 py-6 border-b border-white/10">
                                <div className="bg-[#6AC0E6] bg-clip-text text-transparent font-medium text-[20px] ">Feature</div>
                                <div className="bg-[#6AC0E6] bg-clip-text text-transparent font-medium  text-[20px] text-center">Cloud</div>
                                <div className="bg-[#6AC0E6] bg-clip-text text-transparent font-medium text-[20px]  text-center">Hybrid</div>
                                <div className="bg-[#6AC0E6] bg-clip-text text-transparent font-medium  text-[20px] text-center">On-Premise</div>
                            </div>

                            {/* Security Model */}
                            <div className="grid grid-cols-4 gap-6 py-5 border-b border-white/5">
                                <div className="text-white/80">Security model</div>
                                <div className="text-center">
                                <span className="inline-block px-4 font-[12px] py-2 text-xs rounded-full bg-[#FFFFFF1F] text-[#6AC0E6] border border-white/10">
                                    Shared responsibility
                                </span>
                                </div>
                                <div className="text-center">
                                <span className="inline-block px-4 font-[12px] py-2 text-xs rounded-full bg-[#FFFFFF1F] text-[#6AC0E6] border border-white/10">
                                    Customer controlled
                                </span>
                                </div>
                                <div className="text-center">
                                <span className="inline-block px-4 font-[12px] py-2 text-xs rounded-full bg-[#FFFFFF1F] text-[#6AC0E6] border border-white/10">
                                    Full control
                                </span>
                                </div>
                            </div>

                            {/* Maintenance Effort */}
                            <div className="grid grid-cols-4 gap-6 py-5 border-b border-white/5">
                                <div className="text-white/80">Maintenance effort</div>
                                <div className="text-center text-[#6AC0E6] text-lg"><LucideIcons.Check className='m-auto'/></div>
                                <div className="text-center text-[#6AC0E6] text-lg"><LucideIcons.Check className='m-auto'/></div>
                                <div className="text-center text-[#6AC0E6] text-lg"><LucideIcons.Minus className='m-auto'/></div>
                            </div>

                            {/* Scalability */}
                            <div className="grid grid-cols-4 gap-6 py-5 border-b border-white/5">
                                <div className="text-white/80">Scalability</div>
                                <div className="text-center text-[#6AC0E6] text-lg"><LucideIcons.Minus className='m-auto'/></div>
                                <div className="text-center text-[#6AC0E6] text-lg"><LucideIcons.Check className='m-auto'/></div>
                                <div className="text-center text-[#6AC0E6] text-lg"><LucideIcons.Check className='m-auto'/></div>
                            </div>

                            {/* Maintenance */}
                            <div className="grid grid-cols-4 gap-6 py-5 border-b border-white/5">
                                <div className="text-white/80">Maintenance</div>
                                <div className="text-center text-white/80">Fully Managed</div>
                                <div className="text-center text-white/80">Shared</div>
                                <div className="text-center text-white/80">Customer Managed</div>
                            </div>

                            {/* Compliance */}
                            <div className="grid grid-cols-4 gap-6 py-5">
                                <div className="text-white/80">Compliance</div>
                                <div className="text-center text-white/80">SOC 2, GDPR</div>
                                <div className="text-center text-white/80">Custom + Standard</div>
                                <div className="text-center text-white/80">Full Custom</div>
                            </div>

                          
                        </div>
                    
                   

       
    </section>
      <section className='mt-[-100px] '>

     <CtaSection wrapperClassName="mt-[-0px]" {...PLANING_CTA_CONFIG} />
      </section>

            <FooterSection/>
  
    
    </>
  )
}

export default DeploymentOptionsPage