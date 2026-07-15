import React from 'react'
import MainBanner from '../components/services/MainBanner';
import { HEADER , CARD_CONFIG, KEY_FEATURE_CONFIG} from "@/config/Declarative_Context_Protocol_config";
import Navbar from "@/components/Navbar.jsx";
import FeatureCard from "@/components/card/FeaturedCard.jsx";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection"; 
import Button from '../components/ui/Button';


//    {
//   text: "Documentation",
//   className:
//     "py-5 px-6  font-primary font-[600] text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
// hoverIcon: false,
//   iconSize: "20px",
//   icon:"Eye",
//   href: "",
// },
// {
//   text: "Documentation",
//   className:
//     "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-[600] leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
//   href: "",
//   icon: "CircleArrowOutUpRight",
//   iconSize: "20px",
// }
   

const Declarative_Context_Protocol = () => {
    const { cards } = CARD_CONFIG;
  return (
    <>
          <Navbar
            wrapperClassName="fixed top-0 left-0"
            disableScrollHide={false}
            linkClassName="text-dark"
            iconClassName="text-dark"
          />
          <MainBanner  data={HEADER} />
          <div className="flex mt-1 lg:px-0 pt-2 px-6 flex-wrap  gap-6 lg:pt-2 justify-center max-w-[1200px] mx-auto mb-[50px]">
            {cards.map((card) => (
                <FeatureCard key={card.id} {...card} />
            ))}
            </div>
               <div className="flex justify-center lg:flex-row  flex-col gap-4 mb-[90px]  px-6">
                 <div className="bg-[#015190] overflow-hidden   rounded-lg  p-0.5">
                   <Button
                        icon="Eye"
                        iconSize="20px"
                        hoverIcon= {false}
                        btnText="Documentation"
                        className="text-[#015190] bg-white p-2.5 font-dm-sans font-semibold leading-[1.2] tracking-[0.02em]"
                    />
                    </div>
                       <div className="bg-[radial-gradient(66.19%_497.1%_at_50%_50%,#015190_0%,_#015190_50.32%,_#6AC0E6_100%)] overflow-hidden   rounded-lg  p-0.5">
                   <Button
                        icon="CircleArrowOutUpRight"
                        iconSize="20px"
                        btnText="View Policy Recipe"
                        className="text-[#fff] p-2.5 font-dm-sans font-semibold leading-[1.2] tracking-[0.02em]"
                    />
                    </div>
                     
            </div>
            <UspServices data={KEY_FEATURE_CONFIG} />
         

        
     

            <section className="py-[100px]">
                   <div className="relative text-center px-4 lg:px-0  z-10">
              <h1 class="font-primary text-[#015190] font-medium  leading-[1.2] tracking-[2%] text-[32px] sm:text-[40px]   sm:max-w-[1000px] mx-auto tracking-[0.02em]">
                Enterprise Governance
              </h1>

              <p class="font-secondary font-medium text-[18px] leading-[1.4] tracking-[2%] text-center mt-2  sm:max-w-[950px] mx-auto  text-[#838383]">
              Built for the most demanding compliance requirements with <br /> enterprise-grade security and governance frameworks
              </p>
            </div>
            <div className="max-w-5xl mx-auto lg:mt-[80px] mt-[40px]  px-5 ">
                <div className="flex justify-between lg:flex-row flex-col">
                    <div className="soc2 min-w-[419px]">    
                        <div className="flex mb-5">
                            <span className='inline-block lg:me-6 me-2 mt-2'>
                                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="38.4" height="38.4" rx="19.2" fill="url(#paint0_linear_650_409)"/>
                            <path d="M16.8031 19.1992L18.4031 20.7992L21.6031 17.5992M27.2031 19.1992C27.2031 23.6175 23.6214 27.1992 19.2031 27.1992C14.7848 27.1992 11.2031 23.6175 11.2031 19.1992C11.2031 14.7809 14.7848 11.1992 19.2031 11.1992C23.6214 11.1992 27.2031 14.7809 27.2031 19.1992Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_650_409" x1="0.0112518" y1="19.2049" x2="38.4" y2="19.2049" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#6AC0E6"/>
                            <stop offset="1" stop-color="#015190"/>
                            </linearGradient>
                            </defs>
                            </svg>

                            </span>
                            <div className='inline-block [text-wrap-style:pretty]'>
                                <h3 className='text-[#015190] text-[20px] font-primary font-[600] mb-2'>Security Compliant</h3>
                                <p className='text-[16px] font-primary font-[500] text-[#626161] '>Comprehensive security controls and continuous monitoring</p>
                            </div>
                        </div>
                          <div className="flex mb-5">
                            <span className='inline-block lg:me-6 me-2 mt-2'>
                                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="38.4" height="38.4" rx="19.2" fill="url(#paint0_linear_650_409)"/>
                            <path d="M16.8031 19.1992L18.4031 20.7992L21.6031 17.5992M27.2031 19.1992C27.2031 23.6175 23.6214 27.1992 19.2031 27.1992C14.7848 27.1992 11.2031 23.6175 11.2031 19.1992C11.2031 14.7809 14.7848 11.1992 19.2031 11.1992C23.6214 11.1992 27.2031 14.7809 27.2031 19.1992Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_650_409" x1="0.0112518" y1="19.2049" x2="38.4" y2="19.2049" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#6AC0E6"/>
                            <stop offset="1" stop-color="#015190"/>
                            </linearGradient>
                            </defs>
                            </svg>

                            </span>
                            <div className='inline-block [text-wrap-style:pretty] lg:w-[100%] w-[70%]'>
                                <h3 className='text-[#015190] text-[20px] font-primary font-[600] mb-2'>GDPR Ready</h3>
                                <p className='text-[16px] font-primary font-[500] text-[#626161] '>Privacy-by-ready with automated data protection</p>
                            </div>
                        </div>
                          <div className="flex mb-5">
                            <span className='inline-block lg:me-6 me-2 mt-2'>
                                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="38.4" height="38.4" rx="19.2" fill="url(#paint0_linear_650_409)"/>
                            <path d="M16.8031 19.1992L18.4031 20.7992L21.6031 17.5992M27.2031 19.1992C27.2031 23.6175 23.6214 27.1992 19.2031 27.1992C14.7848 27.1992 11.2031 23.6175 11.2031 19.1992C11.2031 14.7809 14.7848 11.1992 19.2031 11.1992C23.6214 11.1992 27.2031 14.7809 27.2031 19.1992Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_650_409" x1="0.0112518" y1="19.2049" x2="38.4" y2="19.2049" gradientUnits="userSpaceOnUse">
                         <stop stop-color="#6AC0E6"/>
                            <stop offset="1" stop-color="#015190"/>
                            </linearGradient>
                            </defs>
                            </svg>

                            </span>
                            <div className='inline-block [text-wrap-style:pretty]'>
                                <h3 className='text-[#015190] text-[20px] font-primary font-[600] mb-2'>Zero Trust Architecture</h3>
                                <p className='text-[16px] font-primary font-[500] text-[#626161] '>Never trust always verify with continuous authentication</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="lg:min-w-[390px] border border-1 border-[#C6C6C6] rounded-[16px] p-[20px]">
                        <h3 className='text-[#015190] text-[20px] font-primary font-[600]'>Live Network Status</h3>
                        <ul className='mt-8'>
                            <li className='flex justify-between mb-3'><p className='text-[16px] font-primary font-[500] text-[#626161] '>Active agents</p> <span className='text-[16px] font-primary font-[500] text-[#015190]'>1,247</span></li>
                            <li className='flex justify-between mb-3'><p  className='text-[16px] font-primary font-[500] text-[#626161] '>Policy handshakes</p> <span className='text-[16px] font-primary font-[500] text-[#015190]'>98.7%</span></li>
                            <li className='flex justify-between mb-3'><p  className='text-[16px] font-primary font-[500] text-[#626161] '>Security incidents</p> <span className='text-[16px] font-primary font-[500] text-[#015190]'>0</span></li>
                            <li className='flex justify-between mb-3'><p  className='text-[16px] font-primary font-[500] text-[#626161] '>Compliance score</p> <span className='text-[16px] font-primary font-[500] text-[#015190]'>100%</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            </section>
                     <FooterSection />
          
    </>
  )
}

export default Declarative_Context_Protocol