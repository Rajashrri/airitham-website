import React,{useState} from 'react'
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import FooterSection from "@/components/home/FooterSection";
import UspServices from '../components/services/UspServices';
import Button from '../components/ui/Button';
import TimeLine from '../components/services/TimeLine';
import { Security_HEADER, CORE_MODULE_CONFIG, SECURITY_FAQ_CONFIG, SECURITY_CTA_CONFIG } from "./../config/securityConfig"
import { ShieldCheck, Lock, TvMinimalPlay, Check, Layers2, ChevronDown  } from 'lucide-react';
import SectionHeading from "@/components/common/SectionHeading";
import CtaSection from "../components/common/CtaSection"
const SecurityPage = () => {
     const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    return (
        <>
            <Navbar
                
               
            />
            <div className='md:mt-[100px] mt-[70px] rounded-t-[50px] py-[150px] pb-[150px] bg-[#000]'>
                {/* <p className='font-secondary font-[600] text-[18px] text-[#fff] text-center mb-[15px]'>Two Platforms. One Vision.</p> */}
                <MainBanner data={Security_HEADER} />
                <div className=" mt-[40px]">
                    <ul className="flex justify-center px-5 gap-5 md:flex-row flex-col">
                        <li className='bg-[#42ABDF40] border border-[1px] px-5 py-2  border-[#c6c6c630] md:rounded-[100px] rounded-lg md:h-auto w-full sm:w-fit h-[100px] md:m-0 m-auto flex justify-center items-center min-w-[200px]'><span className='bg-[#6AC0E6] bg-clip-text text-transparent font-[12px] font-[500] font-primary '>Security Compliance Ready</span></li>
                        <li className='bg-[#42ABDF40] border border-[1px] px-5 py-2  border-[#c6c6c630] md:rounded-[100px] rounded-lg md:h-auto w-full sm:w-fit h-[100px] md:m-0 m-auto flex justify-center items-center min-w-[200px]'><span className='bg-[#6AC0E6] bg-clip-text text-transparent font-[12px] font-[500] font-primary '>GDPR Aligned</span></li>
                        <li className='bg-[#42ABDF40] border border-[1px] px-5 py-2  border-[#c6c6c630] md:rounded-[100px] rounded-lg md:h-auto w-full sm:w-fit h-[100px] md:m-0 m-auto flex justify-center items-center min-w-[200px]'><span className='bg-[#6AC0E6] bg-clip-text text-transparent font-[12px] font-[500] font-primary '>HIPAA Capable</span></li>
                        <li className='bg-[#42ABDF40] border border-[1px] px-5 py-2  border-[#c6c6c630] md:rounded-[100px] rounded-lg md:h-auto w-full sm:w-fit h-[100px] md:m-0 m-auto flex justify-center items-center min-w-[200px]'><span className='bg-[#6AC0E6] bg-clip-text text-transparent font-[12px] font-[500] font-primary '>ISO Standards</span></li>
                    </ul>
                </div>
                <div className="max-w-[680px] m-auto mt-[60px] px-5 md:px-0 " >
                    <div className="border border-[1px] border-[#D9D9D9] rounded-[24px] px-4 py-4 grid grid-cols-12 gap-3">
                        <div className="md:col-span-4 col-span-12 bg-[#FFFFFF0D] border flex items-center flex-col gap-4  border-[1px] border-[#D9D9D9] text-center rounded-[16px]  py-4 ">
                            <span className='bg-[#42ABDF40] h-[40px] w-[40px] flex justify-center items-center'>
                                <ShieldCheck
                                    size={24}
                                    className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#6AC0E6]"
                                />

                            </span>
                            <h2 className='bg-[#6AC0E6] bg-clip-text text-transparent font-[20px] font-[600] font-primary'>Defense Layer</h2>

                        </div>
                        <div className="md:col-span-4 col-span-12 bg-[#FFFFFF0D] border flex items-center flex-col gap-4  border-[1px] border-[#D9D9D9] text-center rounded-[16px]  py-4 ">
                            <span className='bg-[#42ABDF40] h-[40px] w-[40px] flex justify-center items-center'>
                                <Lock
                                    size={24}
                                    className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#6AC0E6]"
                                />

                            </span>
                            <h2 className='bg-[#6AC0E6] bg-clip-text text-transparent font-[20px] font-[600] font-primary'>Encryption</h2>

                        </div>
                        <div className="md:col-span-4 col-span-12 bg-[#FFFFFF0D] border flex items-center flex-col gap-4  border-[1px] border-[#D9D9D9] text-center rounded-[16px]  py-4 ">
                            <span className='bg-[#42ABDF40] h-[40px] w-[40px] flex justify-center items-center'>
                                <TvMinimalPlay
                                    size={24}
                                    className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#6AC0E6]"
                                />

                            </span>
                            <h2 className='bg-[#6AC0E6] bg-clip-text text-transparent font-[20px] font-[600] font-primary'>Monitoring</h2>

                        </div>
                        <div className="col-span-12 bg-[#FFFFFF0D] border flex justify-between px-4 gap-4  border-[1px] border-[#D9D9D9] text-center rounded-[16px]  py-4 ">
                            <h2 className='bg-[#6AC0E6] bg-clip-text text-transparent font-[20px] font-[600] font-primary'>Zero-Trust Access</h2>
                            <Check
                                size={24}
                                className="bg-[#6AC0E6] bg-clip-text text-[#015190]"
                            />


                        </div>
                        <div className="col-span-12 border bg-[#FFFFFF0D] flex justify-between px-4 gap-4  border-[1px] border-[#D9D9D9] text-center rounded-[16px]  py-4 ">
                            <h2 className='bg-[#6AC0E6] bg-clip-text text-transparent font-[20px] font-[600] font-primary'>Tenant Isolation</h2>
                            <Check
                                size={24}
                                className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#015190]"
                            />


                        </div>
                        <div className="col-span-12 border bg-[#FFFFFF0D] flex justify-between px-4 gap-4  border-[1px] border-[#D9D9D9] text-center rounded-[16px]  py-4 ">
                            <h2 className='bg-[#6AC0E6] bg-clip-text text-transparent font-[20px] font-[600] font-primary'>Audit Logging</h2>
                            <Check
                                size={24}
                                className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#015190]"
                            />


                        </div>



                    </div>

                </div>

            </div>
            {/* <div className="py-[40px]">
                <ul className="flex justify-center md:flex-row flex-col text-center lg:px-0 px-5 gap-5">
                    <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]  px-7 py-3   rounded-[100px]'><span className='text-[#015190] font-[20px] font-secondary fonr-[600]'>Security Compliance Ready</span></li>
                    <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]  px-7 py-3   rounded-[100px]'><span className='text-[#015190] font-[20px] font-secondary fonr-[600]'>GDPR Aligned</span></li>
                    <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]  px-7 py-3   rounded-[100px]'><span className='text-[#015190] font-[20px] font-secondary fonr-[600]'>HIPAA Capable</span></li>
                    <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]  px-7 py-3   rounded-[100px]'><span className='text-[#015190] font-[20px] font-secondary fonr-[600]'>ISO Standards</span></li>
                </ul>

            </div> */}
            <div className=" rounded-t-[50px] mt-[-50px] pb-[200px] py-[80px] pb-[100px] bg-[linear-gradient(360deg,#000000_0%,#042539_100%)]">
                <SectionHeading
                    title="Defense-in-depth security architecture"
                    subtitle='Multi-layered security controls across platform, infrastructure, and operational layers ensure <br/> comprehensive protection.'
                    titleClassName="sm:text-[48px] text-[#fff]"
                    subtitleClassName=" sm:text-[16px] text-[#C6C6C6] max-w-[950px]"
                />
                <div className='max-w-[1080px] m-auto mt-[60px]  md:px-0 px-5'>
                    <div className="grid grid-cols-12 justify-center gap-8 w-[100%]">
                        <div className="md:col-span-7 col-span-12 border border-[1px] border-[#D9D9D9] py-6 px-6 rounded-[24px]">
                            <h3 className='text-[24px] font-primary text-[#fff] font-[600]'>Platform Security Layers</h3>
                            <div className='flex gap-4 mt-6 bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)] p-4 rounded-[16px]'>
                                <div className="mt-1">
                                    <span className='bg-[#42ABDF40] rounded-[4px] h-[40px] w-[40px] flex justify-center items-center'>
                                       


                                        <img src="/svg/grid/stack.svg" alt="" />

                                    </span>

                                </div>
                                <div className="">
                                    <h3 className='text-[20px] font-primary text-[#fff] font-[600]'>UI Layer Security</h3>
                                    <p className='text-[#999999] text-[16px]'>Role-based access controls, session management, and secure authentication flows.</p>

                                </div>
                            </div>
                            <div className='flex gap-4 mt-3 bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)] p-4 rounded-[16px]'>
                                <div className="mt-1">
                                    <span className='bg-[#42ABDF40] h-[40px] w-[40px] flex justify-center items-center rounded-[4px]'>
                                        <img src="/svg/lockbg.svg" alt="" />
                                    </span>

                                </div>
                                <div className="">
                                    <h3 className='text-[20px] font-primary text-[#fff] font-[600]'>API Security</h3>
                                    <p className='text-[#999999] text-[16px]'>OAuth 2.0, rate limiting, input validation, and comprehensive API audit trails.</p>

                                </div>
                            </div>
                            <div className='flex gap-4 mt-3 bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)] p-4 rounded-[16px]'>
                                <div className="mt-1">
                                    <span className='rounded-[4px] bg-[#42ABDF40] h-[40px] w-[40px] flex justify-center items-center'>
                                        <img src="/svg/grid/tv-minimal-play.svg" alt="" />

                                    </span>

                                </div>
                                <div className="">
                                    <h3 className='text-[20px] font-primary text-[#fff] font-[600]'>Agent Isolation</h3>
                                    <p className='text-[#999999] text-[16px]'>Sandboxed execution environments with strict resource and network controls.</p>

                                </div>
                            </div>

                        </div>
                        <div className="md:col-span-5 col-span-12 ">
                            <div className="border border-[1px] border-[#D9D9D9] py-6 px-6 rounded-[24px] bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]">
                                <h3 className='text-[20px] inline text-[#6AC0E6]'>Zero-trust Access</h3>
                                <ul className='mt-[40px]'>
                                    <li className='text-[16px] text-[#D9D9D9] flex justify-between font-[500] font-secondary mb-2'>Identity Verification <Check className='text-[#015190]' /></li>
                                    <li className='text-[16px] text-[#D9D9D9] flex justify-between font-[500] font-secondary mb-2'>Device Authentication <Check className='text-[#015190]' /></li>
                                    <li className='text-[16px] text-[#D9D9D9] flex justify-between font-[500] font-secondary mb-2'>Least Privilege <Check className='text-[#015190]' /></li>
                                </ul>
                            </div>
                            <div className="border mt-9 border-[1px] border-[#D9D9D9] py-6 px-6 rounded-[24px] bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]">
                                <h3 className='text-[20px] text-[#6AC0E6] inline font-[600]'>Encryption standard</h3>
                                <ul className='mt-[40px]'>
                                    <li className='text-[16px] text-[#D9D9D9] flex justify-between font-[500] font-secondary mb-2'>Stored Contexts <span className='bg-[#6AC0E6] bg-clip-text text-transparent'>2,468</span></li>
                                    <li className='text-[16px] text-[#D9D9D9] flex justify-between font-[500] font-secondary mb-2'>Embeddings<span className='bg-[#6AC0E6] bg-clip-text text-transparent'>1M+</span></li>
                                    <li className='text-[16px] text-[#D9D9D9] flex justify-between font-[500] font-secondary mb-2'>Retention<span className='bg-[#6AC0E6] bg-clip-text text-transparent'>1+ yr</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <UspServices data={CORE_MODULE_CONFIG} />
            <section className='bg-[linear-gradient(360deg,#000000_0%,#042539_100%)] mt-[-100px] py-[80px] pt-[220px] pb-[200px] relative z-[9] '>

                <SectionHeading
                    title="Built for regulated industries"
                    subtitle='Designed from the ground up to meet the stringent security and compliance requirements of healthcare, finance, and government sectors.'
                    titleClassName="sm:text-[48px] text-[#fff]"
                    subtitleClassName=" sm:text-[16px] text-[#D9D9D9] max-w-[587px]"
                />

                <div className="max-w-[1080px] m-auto mt-[60px]">
                    <div className="grid grid-cols-12 gap-8">
                        <div className="lg:col-span-4 border-[#ffffff3e] border p-4 rounded-[24px] col-span-12 text-center">
                            <h2 className='bg-[#6AC0E6] bg-clip-text text-transparent text-[24px] font-[600] font-primary'>Deployment Options</h2>
                            <p className='text-[#999999] max-w-[270px] m-auto mt-3 text-[14px] sm:text-[18px] font-seconadry font-[500]'>Cloud, On-Premises, Hybrid, Air-Gapped</p>
                        </div>
                        <div className="lg:col-span-4 border-[#ffffff3e] border p-4 rounded-[24px] col-span-12 text-center">
                            <h2 className='bg-[#6AC0E6] bg-clip-text text-transparent text-[24px] font-[600] font-primary'>Third-party Audits</h2>
                            <p className='text-[#999999] max-w-[270px] m-auto mt-3 text-[14px] sm:text-[18px] font-seconadry font-[500]'>Independent security assessments available</p>
                        </div>
                        <div className="lg:col-span-4 border-[#ffffff3e] border p-4 rounded-[24px] col-span-12 text-center">
                            <h2 className='bg-[#6AC0E6] bg-clip-text text-transparent text-[24px] font-[600] font-primary'>Security Questionnaires</h2>
                            <p className='text-[#999999] max-w-[270px] m-auto mt-3 text-[14px] sm:text-[18px] font-seconadry font-[500]'>Pre-completed vendor assessments</p>
                        </div>
                        <div className='flex gap-5 md:flex-row flex-col px-5 mt-10 justify-center col-span-12'>
                         <Button
                            btnText="Request Security Documentation"
                            className=
                            "py-5 px-6 min-w-[228px] font-primary font-[600] text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white"
                            href=""
                            icon=""
                            iconSize="20px"
                        //   useCommonSvg="true"
                        />
                         <Button
                            btnText="Schedule Security Review"
                            className=
                            "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-[600] leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                            href=""
                            icon=""
                            iconSize="20px"
                        //   useCommonSvg="true"
                        />
                        </div>
                    </div>

                </div>
            </section>
            <section className="py-20 bg-white relative z-[10] mt-[-100px] rounded-t-[50px] md:rounded-t-[100px] md:px-0 px-5">
        <SectionHeading
          title="Security FAQs"
          titleClassName="normal-case"
        
        />
        <div className="max-w-[800px] m-auto mt-[60px] " >
          {SECURITY_FAQ_CONFIG.map((item, index) => (
            <div
              key={item.id}
              className="border border-[#E6E6E6] rounded-[12px] mb-3 overflow-hidden bg-white"
            >
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <h3 className="font-primary text-[#015190] font-[600] md:text-[20px] text-[18px]   ">
                  {item.question}
                </h3>

                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 text-[#015190] ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-[500px] pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[#626161] text-[18px] leading-[1.6]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        
        </div>
      </section>


       <CtaSection {...SECURITY_CTA_CONFIG} />
       <FooterSection/>

        </>
    )
}

export default SecurityPage