import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection";
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import CtaSection from "../components/common/CtaSection";
import FeatureCard from "./../components/card/FeaturedCard";
import { Security_HEADER } from "./../config/securitybydesignConfig"
import { Lock } from 'lucide-react';
import * as LucideIcons from "lucide-react";
import Button from '../components/ui/Button';

const SecuritybyDesignPage = () => {
      const type =[
        {
            id:1,
            title:"Tenant Isolation",
            dis:"Complete logical and physical separation between tenants with dedicated resources, network segmentation, and isolated data processing pipelines.",
            points:["Dedicated compute instances", "Network-level isolation", "Separate data stores"],
            icon:"VectorSquare"
        },
        {
            id:2,
            title:"Encryption",
            dis:"End-to-end encryption for data at rest and in transit using industry-standard AES-256 encryption with automated key rotation and management.",
            points:["AES-256 encryption", "TLS 1.3 in transit", "Automated key rotation"],
            icon:"Waypoints"
        },
        {
            id:3,
            title:"Role-Based Access",
            dis:"Granular permission system with role-based access control, multi-factor authentication, and principle of least privilege enforcement.",
            points:["Granular permissions", "Multi-factor authentication", "Least privilege principle"],
            icon:"RotateCcw"
        },
        {
            id:3,
            title:"Audit Logs",
            dis:"Comprehensive activity logging with immutable audit trails, real-time monitoring, and automated anomaly detection for security events.",
            points:["Immutable audit trails", "Real-time monitoring", "Anomaly detection"],
            icon:"RotateCcw"
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
            <section className='md:py-[150px] py-[100px] text-center rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
                <h4 class="bg-[linear-gradient(#42ABDF40)]
                            w-fit py-2 px-1 rounded-[100px] m-auto px-[20px] my-3 flex items-center gap-2 border border[1px] border-[#797979] "><Lock className='text-[#6AC0E6] h-[19px]' /> <span class="font-secondary text-[12px]   bg-[linear-gradient(#6AC0E6)] font-[500]
                            bg-clip-text
                            text-transparent">Security Architecture</span></h4>
                <MainBanner data={Security_HEADER} />
            </section>
            <section className='py-[90px] md:px-0 px-5 '>
                  <SectionHeading
                        title="Security Principles"
                        subtitle='Our security framework is built on four fundamental pillars that ensure comprehensive <br/>protection across all system layers.'
                        titleClassName="sm:text-[48px]"
                        subtitleClassName=" sm:text-[16px] text-[#626161]"
                    />
                    <div className="max-w-[1221px] m-auto flex flex-wrap gap-8 mt-16">
                            {
                            type.map((item,index, id)=>{
                                    const Icon = LucideIcons?.[item.icon];
                                    return(
                                           <div id={index} className="w-[590px] rounded-2xl bg-[#fff] shadow-[0px_26px_16px_0px_#0151900D]  gap-[24px] p-5 px-6 flex flex-col items-start">
                                      
                                      <div className="">
                                          
                                          {Icon && <Icon size={32} className="text-[#015190]" />}
                                      </div>
                                
                                      <div className="sidecard-group sapce-y-6">
                                        <h3 className="text-[24px] font-primary font-[600] tracking-[0.02em] leading-[1.2] text-[#1e1e1e] mb-[10px]">
                                          {item.title}
                                        </h3>
                                        <p className='text-[#626161] text-[14px] font-secondary font-[500]'>{item.dis}</p>
                                
                                        {/* Points list */}
                                        <ul className="space-y-2.5 mt-5">
                                          {item.points?.map((list, i) => (
                                            <li key={i} className="flex items-center gap-3 text-[#015190]">
                                           
                                                <img src="./svg/circle-check1.svg" alt="icon" className="w-5 h-5" />
                                                {/* <LucideIcons.Check/> */}
                                             
                                
                                              <span className="text-base text-[16px] font-normal font-secondary leading-none tracking-[0.0em]">
                                                {list.label || list}
                                              </span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      
                                    </div>


            
                                    )
                             
                            })
                        }
                    </div>
            </section>
            <section className='py-[90px] md:px-0 px-5  mb-[60px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)] md:rounded-[100px] rounded-[50px]'>
                <div className="max-w-[1200px] m-auto grid grid-cols-12">
                    <div className="md:col-span-5 col-span-12">
                        <h2 className='font-primary text-[40px] md:text-left text-center font-[600] text-[#fff]'>Compliance Readiness</h2>
                        <p className='text-[#D9D9D9] text-[16px] md:text-left text-center font-primary'>SOC2, GDPR, HIPAA, ISO-aligned architecture ensures your organization meets the most stringent regulatory requirements from day one.</p>
                    </div>
                    <div className="col-span-12">
                        <div className="md:grid flex flex-col grid-cols-12 gap-16">
                            <div className="md:col-span-6  col-span-12 mt-8">
                                <div className="md:grid flex flex-col grid-cols-12 gap-6">
                                <div className="col-span-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] rounded-[16px] border border-[1px] py-6 border-[#D9D9D9]">
                                        <img src="/svg/badge.png" className='m-auto' alt="" />
                                        {/* <LucideIcons.Badge color='#6AC0E6'/> */}
                                        <h2 className='text-[24px] mt-3 font-primary text-center text-[#fff] font-[600]'>SOC 2</h2>
                                        <p className='text-[#D9D9D9] font-secondary text-center mt-1 text-[14px]'>Type II Compliant</p>                                        
                                    </div>
                                    <div className="col-span-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] rounded-[16px] border border-[1px] py-6 border-[#D9D9D9]">
                                        <img src="/svg/circle-question-mark.png" className='m-auto' alt="" />
                                        <h2 className='text-[24px] mt-3 font-primary text-center text-[#fff] font-[600]'>GDPR</h2>
                                        <p className='text-[#D9D9D9] font-secondary text-center mt-1 text-[14px]'>Privacy Ready</p>                                        
                                    </div>
                                    <div className="col-span-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] rounded-[16px] border border-[1px] py-6 border-[#D9D9D9]">
                                        <img src="/svg/user-lock.png" className='m-auto' alt="" />
                                        <h2 className='text-[24px] mt-3 font-primary text-center text-[#fff] font-[600]'>HIPAA</h2>
                                        <p className='text-[#D9D9D9] font-secondary text-center mt-1 text-[14px]'>Healthcare Aligned</p>                                        
                                    </div>
                                    <div className="col-span-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] rounded-[16px] border border-[1px] py-6 border-[#D9D9D9]">
                                        <img src="/svg/award.png" className='m-auto' alt="" />
                                        <h2 className='text-[24px] mt-3 font-primary text-center text-[#fff] font-[600]'>ISO 27001</h2>
                                        <p className='text-[#D9D9D9] font-secondary text-center mt-1 text-[14px]'>Security Standards</p>                                        
                                    </div>
                                    <div className="col-span-12">
                                        <Button
                                          btnText="View Compliance Details"
                                            className=
                                                "text-[16px]  min-w-[228px] py-5 px-8 font-primary font-[600] leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                            href= ""
                                            icon= "CircleArrowOutUpRight"
                                            iconSize= "20px"
                                        />
                                    </div>

                                </div>

                            </div>
                            <div className="md:col-span-6 col-span-12  px-6 py-6 border-[#D9D9D9] border border-[1px] rounded-[24px]">
                                 <h2 className='text-[24px]  font-primary text-left text-[#fff] font-[600]'>Security Features</h2>
                                 <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(131,131,131,0.1)_100%)] py-4 px-6 mt-5 flex gap-5 items-center rounded-[16px]">
                                    <div className="">
                                        {/* <img src="/svg/fingerprint-pattern.png" alt="" /> */}
                                        <LucideIcons.FingerprintIcon color='#6AC0E6'/>
                                    </div>
                                    <div className="">
                                        <h3 className='text-[20px] font-[600] font-primary text-[#fff]'>Zero Trust Architecture</h3>
                                        <p className='text-[#999999] font-secondary text-[14px]'>Never trust, always verify</p>
                                    </div>

                                 </div>

                                 <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(131,131,131,0.1)_100%)] py-4 px-6 mt-3 flex gap-5 items-center rounded-[16px]">
                                    <div className="">
                                        <img src="/svg/eye.svg" alt="" className='h-[24px]' />
                                    </div>
                                    <div className="">
                                        <h3 className='text-[20px] font-[600] font-primary text-[#fff]'>24/7 Monitoring</h3>
                                        <p className='text-[#999999] font-secondary text-[14px]'>Continuous threat detection</p>
                                    </div>

                                 </div>

                                 <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(131,131,131,0.1)_100%)] py-4 px-6 mt-3 flex gap-5 items-center rounded-[16px]">
                                    <div className="">
                                        {/* <img src="/svg/hard-drive.png" alt="" /> */}
                                        <LucideIcons.HardDrive color='#6AC0E6'/>
                                    </div>
                                    <div className="">
                                        <h3 className='text-[20px] font-[600] font-primary text-[#fff]'>Secure Infrastructure</h3>
                                        <p className='text-[#999999] font-secondary text-[14px]'>Hardened cloud environment</p>
                                    </div>

                                 </div>

                                 <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(131,131,131,0.1)_100%)] py-4 px-6 mt-3 flex gap-5 items-center rounded-[16px]">
                                    <div className="">
                                        {/* <img src="/svg/history.png" alt="" /> */}
                                        <LucideIcons.History color='#6AC0E6'/>
                                    </div>
                                    <div className="">
                                        <h3 className='text-[20px] font-[600] font-primary text-[#fff]'>Incident Response</h3>
                                        <p className='text-[#999999] font-secondary text-[14px]'>Automated threat mitigation</p>
                                    </div>

                                 </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <FooterSection/>

        </>
    )
}

export default SecuritybyDesignPage

