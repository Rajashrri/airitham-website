import FeatureCard from "@/components/card/FeaturedCard";
import SectionHeading from "@/components/common/SectionHeading";
import CtaSection from "@/components/common/CtaSection";
import MainBanner from "../components/services/MainBanner";
import Navbar from "@/components/Navbar.jsx";
import FooterSection from "@/components/home/FooterSection";
import { at_HEADER,  benifits_Config  } from "./../config/autonomoustestingConfig"
import { Check } from "lucide-react";


const AutonomousTestingPage = () => {
      const { cards } = benifits_Config
    return (
        <>
            <Navbar
                wrapperClassName="fixed top-0 left-0"
                disableScrollHide={false}
                linkClassName="text-dark"
                iconClassName="text-dark"
            />
            <div className='lg:mt-[100px] mt-[100px] rounded-[50px] lg:py-[150px] py-[90px] lg:px-0 px-4 bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                {/* <p className='font-secondary font-[600] text-[18px] text-[#fff] text-center mb-[15px]'>Two Platforms. One Vision.</p> */}
                <MainBanner data={at_HEADER} />
                <div className="max-w-[676px] grid lg:gap-6 gap-12 grid-cols-12 m-auto bg-[#FFFFFF1A] border border-[1px] border-[#FFFFFF1A] py-8 px-5 rounded-[24px] mt-[60px]">
                    <div className="lg:col-span-6 col-span-12 px-5">
                        <h3 className="text-[20px] font-primary bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent font-[600]">Legacy testing</h3>

                        <ul className="mt-5">
                            <li className="flex gap-5  mb-[14px]"><img className="size-6" src="/svg/code-xml.svg" alt="" /><span className="text-[#D9D9D9] font-[16px] font-[600] font-secondary">Manual scripts</span></li>
                            <li className="flex gap-5  mb-[14px]"><img className="size-6" src="/svg/wrench.svg" alt="" /><span className="text-[#D9D9D9] font-[16px] font-[600] font-secondary">Constant maintenance</span></li>
                            <li className="flex gap-5 "><img className="size-6" src="/svg/clock.svg" alt="" /><span className="text-[#D9D9D9] font-[16px] font-[600] font-secondary">Time intensive</span></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-6 col-span-12 px-5">
                        <h3 className="text-[20px] font-primary bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent font-[600]">Autonomous testing</h3>

                        <ul className="mt-5">
                            <li className="flex gap-5  mb-[14px]"><img className="size-6" src="/svg/brain.svg" alt="" /><span className="text-[#D9D9D9] font-[16px] font-[600] font-secondary">AI-powered</span></li>
                            <li className="flex gap-5  mb-[14px]"><img className="size-6" src="/svg/wand-sparkles.svg" alt="" /><span className="text-[#D9D9D9] font-[16px] font-[600] font-secondary">Self-healing</span></li>
                            <li className="flex gap-5  "><img className="size-6" src="/svg/rocket.svg" alt="" /><span className="text-[#D9D9D9] font-[16px] font-[600] font-secondary">Continuous learning</span></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="py-[80px] pb-[150px] lg:px-0 px-6">
                <SectionHeading
                    titleClassName=" text-[#00273A] text-center"
                    title="Quick comparison summary"
                    subtitle="Executive overview for decision makers"
                    
                    subtitleClassName=" text-[#626161] "
                />

                <div className="max-w-7xl flex flex-wrap mx-auto gap-[40px] justify-center max-w-[1080px] m-auto mt-12 ">
                    <div className="max-w-[500px] w-full border border-[#D9D9D9] rounded-[16px] p-4 shadow-[0px_12px_12px_0px_#01519017]">
                        <h3 className="text-[#1E1E1E] text-[24px] mb-[1px] font-primary">Autonomous testing</h3>
                        <p className="text-[#626161] text-[16px]">Next-generation testing approach</p>

                        <ul className="mt-[30px]">
                            <li className="text-[#015190] text-[18px] items-center font-secondary flex gap-3 mb-2"><span className=""><img className="size-6" src="/svg/circle-check1.svg" alt="" /></span>Self-learning test generation</li>
                            <li className="text-[#015190] text-[18px] items-center font-secondary flex gap-3 mb-2"><span className=""><img className="size-6" src="/svg/circle-check1.svg" alt="" /></span>No script maintenance</li>
                            <li className="text-[#015190] text-[18px] items-center font-secondary flex gap-3 mb-2"><span className=""><img className="size-6" src="/svg/circle-check1.svg" alt="" /></span>Continuous evaluation</li>
                            <li className="text-[#015190] text-[18px] items-center font-secondary flex gap-3"><span className=""><img className="size-6" src="/svg/circle-check1.svg" alt="" /></span>Scales with system complexity</li>
                        </ul>
                    </div>
                    <div className=" max-w-[500px] w-full border border-[#D9D9D9] shadow-[0px_12px_12px_0px_#01519017] rounded-[16px] p-4 px-5">
                        <h3 className="text-[#1E1E1E] text-[24px] mb-[1px] font-primary">Traditional testing</h3>
                        <p className="text-[#626161] text-[16px]">Legacy script-based approach</p>

                        <ul className="mt-[30px]">
                            <li className="text-[#015190] text-[18px] items-center font-secondary flex gap-3 mb-2"><span className=""><img className="size-6" src="/svg/triangle-alert.svg" alt="" /></span>Manual script creation</li>
                            <li className="text-[#015190] text-[18px] items-center font-secondary flex gap-3 mb-2"><span className=""><img className="size-6" src="/svg/triangle-alert.svg" alt="" /></span>Constant maintenance overhead</li>
                            <li className="text-[#015190] text-[18px] items-center font-secondary flex gap-3 mb-2"><span className=""><img className="size-6" src="/svg/triangle-alert.svg" alt="" /></span>Limited adaptability</li>
                            <li className="text-[#015190] text-[18px] items-center font-secondary flex gap-3 mb-2"><span className=""><img className="size-6" src="/svg/triangle-alert.svg" alt="" /></span>High long-term costs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-[-50px] px-5 lg:rounded-t-[100px] rounded-t-[50px] pb-[200px] py-[100px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)]">
                <SectionHeading
                    titleClassName=" text-[#fff] "
                    title="Side-by-side feature comparison"
                    subtitle="Detailed technical comparison"
                    
                    subtitleClassName=" text-[#fff] "
                />
                <div className="max-w-[941px] rounded-[16px] border border-[1px] border-[#838383]  m-auto mt-[40px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(131,131,131,0.1)_100%)]">
                    <table class="w-full text-left text-sm md:text-base">
                        <thead>
                            <tr class=" p-2 sm:px-6 sm:py-5">
                                <th class="p-2 sm:px-6 sm:py-5 font-[20px] font-[600] text-[#6AC0E6] ">Feature</th>
                                <th class="p-2 sm:px-6 sm:py-5 font-[20px] font-[600]  text-[#6AC0E6]  text-center">
                                    traditional testing
                                </th>
                                <th class="p-2 sm:px-6 sm:py-5 font-[20px] font-[600]  text-[#6AC0E6]  text-center">
                                    autonomous testing
                                </th>
                            </tr>
                        </thead>

                        <tbody class="text-white/90">

                            <tr class="">
                                <td class="p-2 sm:px-6 sm:py-5 font-medium">Test creation</td>
                                <td class="p-2 sm:px-6 sm:py-5 text-center">
                                    <img src="/svg/check.svg" alt="" className="m-auto" />
                                    <div class="text-xs sm:text-[16px] mt-1">Ai-generated</div>
                                </td>
                                <td class="p-2 sm:px-6 sm:py-5 text-center">
                                    <img src="/svg/x.svg" alt="" className="m-auto" />
                                    <div class="text-xs sm:text-[16px] mt-1">Manual scripts</div>
                                </td>
                            </tr>


                            <tr class="">
                                <td class="p-2 sm:px-6 sm:py-5 font-medium">Maintenance effort</td>
                                <td class="p-2 sm:px-6 sm:py-5 text-center">
                                    <img src="/svg/check.svg" alt="" className="m-auto" />
                                    <div class="text-xs sm:text-[16px] mt-1">Self-healing</div>
                                </td>
                                <td class="p-2 sm:px-6 sm:py-5 text-center">
                                    <img src="/svg/x.svg" className="m-auto" alt="" />
                                    <div class="text-xs sm:text-[16px] mt-1">High manual effort</div>
                                </td>
                            </tr>


                            <tr class="">
                                <td class="p-3 sm:px-6 sm:py-5 font-medium">Scalability</td>
                                <td class="p-3 sm:px-6 sm:py-5 text-center">
                                    <img src="/svg/check.svg" alt="" className="m-auto" />
                                    <div class="text-xs sm:text-[16px] mt-1">Infinite scale</div>
                                </td>
                                <td class="p-3 sm:px-6 sm:py-5 text-center">
                                    <img src="/svg/minus.svg" alt="" className="m-auto" />
                                    <div class="text-xs sm:text-[16px] mt-1">Limited</div>
                                </td>
                            </tr>


                            <tr class="">
                                <td class="p-3 sm:px-6 sm:py-5 font-medium">AI & LLM support</td>
                                <td class="p-3 sm:px-6 sm:py-5 text-center">
                                    <img src="/svg/check.svg" alt="" className="m-auto" />
                                    <div class="text-xs sm:text-[16px] mt-1">Native integration</div>
                                </td>
                                <td class="p-3 sm:px-6 sm:py-5 text-center">
                                    <img src="/svg/x.svg" className="m-auto" alt="" />
                                    <div class="text-xs sm:text-[16px] mt-1">Not available</div>
                                </td>
                            </tr>


                            <tr class="">
                                <td class="p-3 sm:px-6 sm:py-5 font-medium">Time to value</td>
                                <td class="p-3 sm:px-6 sm:py-5 text-center">
                                    <img  src="/svg/check.svg" alt="" className="m-auto" />
                                    <div class="text-xs sm:text-[16px] mt-1">Immediate</div>
                                </td>
                                <td class="p-2 sm:px-6 sm:py-5 text-center">
                                    <img src="/svg/x.svg" className="m-auto" alt="" />
                                    <div class="text-xs sm:text-[16px] mt-1">Weeks/months</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="lg:rounded-[100px] rounded-[50px] px-5 mt-[-100px] py-[80px] bg-[#fff]">
                <SectionHeading
                    titleClassName="font-primary font-medium text-[32px] sm:text-[40px] leading-[1.2] tracking-[0.02em] text-[#00273A] text-center"
                    title="How each approach works"
                    subtitle="Process visualization and workflow comparison"
                    
                    subtitleClassName=" text-[#626161] "
                />
                <div className="max-w-[941px] shadow-[0px_0px_8px_4px_#01519080] rounded-[24px] pt-[40px]  space-y-12 m-auto mt-[60px] mx-auto lg:gap-0 gap-6 grid grid-cols-12">
                    <div className="lg:col-span-6 col-span-12 flex flex-col  text-center">
                        <h3 className="text-[#015190]  text-[24px] font-[600] font-primary">
                            Traditional testing flow
                        </h3>
                        <div >
                            <div className="relative mt-[40px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[12px] svgarroe before:h-[40px] ">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-[50%] w-[24px] h-[24px] m-auto" >1</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Manual requirement analysis</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[12px] svgarroe before:h-[40px] ">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-[50%] w-[24px] h-[24px] m-auto" >2</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Script creation & coding</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[12px] svgarroe before:h-[40px] ">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-[50%] w-[24px] h-[24px] m-auto" >3</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Test execution</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[12px] svgarroe before:h-[40px] ">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-[50%] w-[24px] h-[24px] m-auto" >4</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Script breakage & debugging</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                           ">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-[50%] w-[24px] h-[24px] m-auto" >5</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Manual fixes & Updates  </h3>
                            </div>
                        </div>
                    </div>
                     <div className="lg:col-span-6  col-span-12 flex flex-col text-center">
                        <h3 className="text-[#015190] text-[24px] font-[600] font-primary">Autonomous testing flow</h3>
                        <div className="lg:pb-0 pb-7">
                            <div className="relative mt-[40px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[12px] svgarroe before:h-[40px] ">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-[50%] w-[24px] h-[24px] m-auto" >1</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">AI system learning</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[12px] svgarroe before:h-[40px] ">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-[50%] w-[24px] h-[24px] m-auto" >2</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Automated test generation</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[12px] svgarroe before:h-[40px] ">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-[50%] w-[24px] h-[24px] m-auto" >3</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Intelligent agent execution</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[12px] svgarroe before:h-[40px] ">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-[50%] w-[24px] h-[24px] m-auto" >4</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">LLM-based evaluation</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                           ">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-[50%] w-[24px] h-[24px] m-auto" >5</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Continuous optimization </h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className=" lg:rounded-t-[100px] rounded-t-[50px] pb-[200px] px-5 lg:px-0 py-[100px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)]">
                <SectionHeading
                    titleClassName=" text-[#FFFFFF] "
                    title="Where traditional testing breaks down"
                    subtitle="Honest technical analysis of legacy limitations"
                   
                    subtitleClassName=" text-[#FFFFFF] "
                />
                <div className="max-w-[824px] m-auto grid justify-center grid-cols-12 gap-[30px]  mt-[60px]">
                    <div className="lg:col-span-6 col-span-12 py-4 px-7 rounded-[16px] border border-[1px] border-[#999999] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(153,153,153,0.1)]">
                        <img src="/svg/wrench.svg" alt="" className="h-[32px]"/>
                        <h3 className="text-[#FFFFFF] text-[24px] font-primary mt-5">Maintenance overhead</h3>
                        <ul className="list-disc pl-5 marker:text-[#6AC0E6] mt-[20px]">
                            <li className="text-[16px] font-secondary mb-[8px]  bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Constant script updates</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">UI changes break tests</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Version compatibility</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Resource intensive</li>
                        </ul>

                    </div>
                    <div className="lg:col-span-6 col-span-12 py-4 px-7 rounded-[16px] border border-[1px] border-[#999999] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(153,153,153,0.1)]">
                        <img src="/svg/triangle-alertlight.svg" alt="" className="h-[32px]"/>
                        <h3 className="text-[#FFFFFF] text-[24px] font-primary mt-5">Brittleness</h3>
                        <ul className="list-disc pl-5 marker:text-[#6AC0E6] mt-[20px]">
                            <li className="text-[16px] font-secondary mb-[8px]  bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Selector dependency</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Hard-coded waits</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Environment sensitivity</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Fragile assertions</li>
                        </ul>

                    </div>
                    <div className="lg:col-span-6 col-span-12 py-4 px-7 rounded-[16px] border border-[1px] border-[#999999] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(153,153,153,0.1)]">
                        <img src="/svg/chart-linedark.svg" alt="" className="h-[32px]"/>
                        <h3 className="text-[#FFFFFF] text-[24px] font-primary mt-5">Scaling challenges</h3>
                        <ul className="list-disc pl-5 marker:text-[#6AC0E6] mt-[20px]">
                            <li className="text-[16px] font-secondary mb-[8px]  bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Linear cost growth</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Team dependency</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Knowledge silos</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Technical debt</li>
                        </ul>

                    </div>
                    <div className="lg:col-span-6 col-span-12 py-4 px-7 rounded-[16px] border border-[1px] border-[#999999] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(153,153,153,0.1)]">
                        <img src="/svg/grid/bot.svg" alt="" className="h-[32px]"/>
                        <h3 className="text-[#FFFFFF] text-[24px] font-primary mt-5">AI limitations</h3>
                        <ul className="list-disc pl-5 marker:text-[#6AC0E6] mt-[20px]">
                            <li className="text-[16px] font-secondary mb-[8px]  bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">No learning capability</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Static rule-based</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Version compatibility</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-[linear-gradient(#6AC0E6)] bg-clip-text text-transparent">Manual adaptation</li>
                        </ul>

                    </div>
                </div>
            </div>
             <section className='py-[80px] p-5 mt-[-100px] bg-[#fff]
                            lg:rounded-t-[100px] rounded-t-[50px]'>
                            <SectionHeading
                                title="Where autonomous testing excels"
                                subtitle='Key advantages of the autonomous approach'
                                titleClassName=" text-[#00273A]"
                                subtitleClassName="  text-[#626161]"
                            />
            
                            <div class="flex flex-wrap  gap-6 pt-10 justify-center max-w-7xl mx-auto">
                                {
                                    cards.map((item, index) => (
                                        <div class={`core-feature-card background: linear-gradient(
                                    180deg,
                                    rgba(255, 255, 255, 0.1) 0%,
                                    rgba(153, 153, 153, 0.1) 100%
                                    );
                                    transition-shadow duration-300   hover:shadow-[0px_0px_40px_2px_#D9D9D9] shrink-0  md:w-[350px] w-[100%] bg-[#fff]  gap-[80px]  rounded-3xl border border-[1px] border-[#D9D9D9] p-4 gap-12 flex flex-col ${item.cardClass}`}>
                                              <div class="feature-card-content1 mt-auto space-y-6">
    <img src={item.img} alt="" />
    <div className="content">
      <h2 class="text-[#1E1E1E] font-primary mb-2 text-[24px] font-medium leading-[1.2]">
        {item.title}
      </h2>
      <p class="font-secondary text-[14px] text-[#A1A1A1] leading-[1.4]">
        {item.description}
      </p>
    </div>
  </div>
                                        </div>
            
                                    ))
                                }
            
                            </div>
                        </section>
                        <FooterSection/>

        </>
    )
}

export default AutonomousTestingPage