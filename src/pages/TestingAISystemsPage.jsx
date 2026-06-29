import InfoCard from "../components/card/InfoCard";
import InsightCard from "../components/card/InsightCard";
import SectionHeading from "../components/common/SectionHeading";
import Navbar from "../components/Navbar";
import MainBanner from "../components/services/MainBanner";
import FeatureCard from "@/components/card/FeaturedCard";
import FooterSection from "@/components/home/FooterSection";
import TimeLine2 from "../components/services/TimeLine2";
import UspServices2 from "../components/services/UspServices2";
import { Atom, Repeat2, Eye, Check, ShieldCheck, Plug, LockOpen, UserRoundPen, TriangleAlert, ChartSpline, Star, Bug, } from 'lucide-react';
import UspServices from "../components/services/UspServices";
import CtaSection from "../components/common/CtaSection";
import { useState } from "react";
const TestingAISystemsPage = () => {

    const [activeRange, setActiveRange] = useState("7d");

  

    return (
        <>
            <Navbar
                wrapperClassName="relative "
                disableScrollHide={true}
                linkClassName="text-black"
                iconClassName="invert-0"
            />
            <section className='  px-5 md:py-[100px] py-[80px] rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                <span class="bg-[#42ABDF40] taxt-center m-auto  mb-8
                                                             w-fit p-0  rounded-[100px] px-[15px] border border[1px] border-[#797979] flex justify-center items-center ">
                    <span class="font-secondary  block text-[12px]   bg-[#6AC0E6]
                                                            bg-clip-text p-2
                                                            text-transparent font-[600]">Enterprise AI Validation</span></span>
                <MainBanner data={Testing_HEADER} />

                <div className="px-7 py-6 md:gap-5 gap-3 mt-[60px] grid grid-cols-12 max-w-[680px] rounded-[24px] border border-[1px] border-[#D9D9D9] m-auto mt-[60px ]" >
                    <div className="md:col-span-4 col-span-12  text-center rounded-[16px] border border-[1px] border-[#D9D9D9] bg-[#FFFFFF0D] p-4">
                        <div className="h-[40px] m-auto  w-[40px] rounded-[4px] justify-center items-center bg-[#42ABDF40] flex flex-col">
                            <img src="./svg/brain.svg" className="h-[24px]" alt="" />
                        </div> 
                        <h2 className="text-[16px] font-primary font-[500] text-[#fff] mt-1">Input</h2>

                    </div>
                    <div className="md:col-span-4 col-span-12  text-center rounded-[16px] border border-[1px] border-[#D9D9D9] bg-[#FFFFFF0D] p-4">
                        <div className="h-[40px] m-auto  w-[40px] rounded-[4px] justify-center items-center bg-[#42ABDF40] flex flex-col">
                            <img src="./svg/network.svg" className="h-[24px]" alt="" />
                        </div> 
                        <h2 className="text-[16px] font-primary font-[500] text-[#fff] mt-1">Reasoning</h2>

                    </div>
                    <div className="md:col-span-4 col-span-12  text-center rounded-[16px] border border-[1px] border-[#D9D9D9] bg-[#FFFFFF0D] p-4">
                        <div className="h-[40px] m-auto  w-[40px] rounded-[4px] justify-center items-center bg-[#42ABDF40] flex flex-col">
                            <img src="./svg/circle-check-lg.svg" className="h-[24px]" alt="" />
                        </div> 
                        <h2 className="text-[16px] font-primary font-[500] text-[#fff] mt-1">Output</h2>

                    </div>
                    <div className="col-span-12 flex justify-between rounded-[16px] border border-[1px] border-[#D9D9D9] bg-[#FFFFFF0D] p-4">
                       
                        <h2 className="text-[16px] font-primary font-[500] text-[#fff] ">Accuracy score</h2>
                        <span className="bg-[#6AC0E6]
                        bg-clip-text text-transparent text-[16px] font-secondary">94.2%</span>

                    </div>
                    <div className="col-span-12 flex justify-between rounded-[16px] border border-[1px] border-[#D9D9D9] bg-[#FFFFFF0D] p-4">
                       
                        <h2 className="text-[16px] font-primary font-[500] text-[#fff] ">Faithfulness</h2>
                        <span className="bg-[#6AC0E6]
                        bg-clip-text text-transparent text-[16px] font-secondary">97.8%</span>

                    </div>
                    <div className="col-span-12 flex justify-between rounded-[16px] border border-[1px] border-[#D9D9D9] bg-[#FFFFFF0D] p-4">
                       
                        <h2 className="text-[16px] font-primary font-[500] text-[#fff] ">Hallucination rate</h2>
                        <span className="bg-[#6AC0E6]
                        bg-clip-text text-transparent text-[16px] font-secondary">2.1%</span>

                    </div>

                </div>
             
            </section>
            <UspServices data={USP_CONFIG}/>
            <UspServices  data={Testing_USP_CONFIG}/>
            <section className="mt-[-100px] relative z-10 md:rounded-[100px] rounded-[50px] bg-[#fff] py-[90px]">
                   <SectionHeading
                        title="How autonomous AI testing works"
                        subtitle='Intelligent, continuous validation that learns and adapts with your AI systems'
                        titleClassName="sm:text-[48px] text-[#015190]"
                        subtitleClassName=" sm:text-[16px] text-[#626161]"
                    />
                      <ProcessFlow />

            </section>
             <UspServices2  data={Evaluation_Dimensions_CONFIG}/>
             <UspServices2  data={Enterprise_Use_Cases}/>
             <UspServices  data={Enterprise_Grade_AI_Governance}/>
             <section className="py-[90px] px-5 bg-[#fff] relative z-11 mt-[-100px] rounded-[100px]">
                  <SectionHeading
                        title="How Autonomous AI Testing Works"
                        subtitle='Intelligent, continuous validation that learns and adapts with your AI systems'
                        titleClassName="sm:text-[48px] text-[#015190]"
                        subtitleClassName=" sm:text-[16px] text-[#626161]"
                    />

                    <div className="max-w-[1175px] px-5 m-auto grid grid-cols-12 mt-[60px] pt-6 gap-4 bg-[radial-gradient(66.19%_497.1%_at_50%_50%,_#015190_0%,_#015190_50.32%,_#6AC0E6_100%)] rounded-[24px] py-4">
                      <div className="lg:col-span-3 md:col-span-4 col-span-12 px-5 py-3 bg-[#fff] border-1 border-[#D9D9D9] rounded-[16px]">
                        <TriangleAlert className="text-[#015190]"/>
                        <h3 className="text-[24px] font-primary text-[#1E1E1E] font-[600] mt-5">Hallucination rate</h3>
                        <h2 className="text-[36px] text-[#015190] font-primary font-[600] mt-4">2.1%</h2>
                        <p className="text-[#626161] text-[20px] font-secondary"> 0.4% from last week</p>
                      </div>
                          <div className="lg:col-span-3 md:col-span-4 col-span-12 px-5 py-3 bg-[#fff] border-1 border-[#D9D9D9] rounded-[16px]">
                        <ChartSpline className="text-[#015190]"/>
                        <h3 className="text-[24px] font-primary text-[#1E1E1E] font-[600] mt-5">Drift index</h3>
                        <h2 className="text-[36px] text-[#015190] font-primary font-[600] mt-4">0.08</h2>
                        <p className="text-[#626161] text-[20px] font-secondary">Stable over 30 days</p>
                      </div>
                          <div className="lg:col-span-3 md:col-span-4 col-span-12 px-5 py-3 bg-[#fff] border-1 border-[#D9D9D9] rounded-[16px]">
                        <Star className="text-[#015190]"/>
                        <h3 className="text-[24px] font-primary text-[#1E1E1E] font-[600] mt-5">Quality score</h3>
                        <h2 className="text-[36px] text-[#015190] font-primary font-[600] mt-4">94.7</h2>
                        <p className="text-[#626161] text-[20px] font-secondary">+1.2 pts this month</p>
                      </div>
                          <div className="lg:col-span-3 md:col-span-4 col-span-12 px-5 py-3 bg-[#fff] border-1 border-[#D9D9D9] rounded-[16px]">
                        <Bug className="text-[#015190]"/>
                        <h3 className="text-[24px] font-primary text-[#1E1E1E] font-[600] mt-5">Regressions</h3>
                        <h2 className="text-[36px] text-[#015190] font-primary font-[600] mt-4">3</h2>
                        <p className="text-[#626161] text-[20px] font-secondary">Critical: 0 | High: 1</p>
                      </div>
                      <div className="col-span-12">
                        <img src="/topics/img11.png" alt="" />
                      </div>

                    </div>

                     <div className="bg-white relative px-6  rounded-xl max-w-[1200px] m-auto  mt-[60px]">
      
      {/* Filter Buttons */}
      <div className="flex gap-3 mb-4 md:absolute right-8 top-6 z-10">
        {["7d", "30d", "90d"].map((range) => (
          <button
            key={range}
            onClick={() => setActiveRange(range)}
            className={`px-4 py-1 rounded-full text-[12px] font-medium transition text-[#015190] bg-[#42ABDF40]

               `}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Title */}
   

      {/* Images */}
      <div className="relative">
        {activeRange === "7d" && (
          <div
            className="w-full rounded-lg h-[500px] w-full bg-[#F7F7F7] border border-[#D9D9D9] p-5"   
          >   
            <h2 className="text-lg font-semibold mb-4 text-[24px] font-primary">
              Quality score trends ({activeRange === "7d" ? "7 Days" : activeRange === "30d" ? "30 Days" : "90 Days"})
            </h2>
            <img src="/home/7days.jpeg" className="h-[100%] w-[100%] object-cover" alt="" />
          </div>
        )}

        {activeRange === "30d" && (
              <div
            className="w-full rounded-lg h-[500px] w-full bg-[#F7F7F7] border border-[#D9D9D9] p-5"   
          >   
            <h2 className="text-lg font-semibold mb-4 text-[24px] font-primary">
              Quality score trends ({activeRange === "7d" ? "7 Days" : activeRange === "30d" ? "30 Days" : "90 Days"})
            </h2>
               <img src="/home/30days.jpeg" className="h-[100%] w-[100%] object-cover" alt="" />
          </div>
        )}

        {activeRange === "90d" && (
             <div
            className="w-full rounded-lg h-[500px] w-full bg-[#F7F7F7] border border-[#D9D9D9] p-5"   
          >   
            <h2 className="text-lg font-semibold mb-4 text-[24px] font-primary">
              Quality score trends ({activeRange === "7d" ? "7 Days" : activeRange === "30d" ? "30 Days" : "90 Days"})
            </h2>
               <img src="/home/90days.jpeg" className="h-[100%] w-[100%] object-cover" alt="" />
          </div>
        )}
      </div>
    </div>


             </section>
             <UspServices2  data={Related_Resources}/>
              <CtaSection wrapperClassName="mt-[-100px]" {...TEST_ANALYTICS_CTA_CONFIG} />
              <FooterSection/>
             
        </>
    )
}

export default TestingAISystemsPage

export const TEST_ANALYTICS_CTA_CONFIG = {
  heading: "Ready to validate your AI <br/> systems with confidence?",
  paragraph:
    "Join leading enterprises using autonomous testing to ensure AI <br/> reliability, safety, and compliance",
  backgroundImage: "/bg/gradient.png",
  buttons: [
    {
      text: "Talk to an AI Architect",
      className:
        "py-5 px-6 min-w-[253px]   font-primary font-semibold text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
      icon: "Play",
      hoverIcon: false,
      iconSize: "20px",
      href: "",
    },
    {
      text: "Request AI Testing Demo ",
      className:
        "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-semibold leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      href: "/demo",
      icon: "CircleArrowOutUpRight",
      iconSize: "20px",
    },
  ],
};

export const Related_Resources = {
  title: "Related resources",
  subtitle: "Deep dive into AI testing methodologies and best practices",
   bodyclass: "bg-[linear-gradient(360deg,#042539_0%,#000000_100%)] text-white !rounded-b-none md:rounded-t-[100px] rounded-t-[50px] !pb-[200px]",


  cards: [
    {
      id: 1,
      icon: "FileText",
      iconColor: "#6AC0E6",
      title: "LLM testing framework",
      bigheading:"Whitepaper",
      bigheadingclass:"!text-[16px] mb-2 text-[#626161]",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[300px]",
      textColor: "#fff",
      description:
        "Comprehensive guide to evaluating large language models",
    
    },
    {
      id: 2,
      icon: "ChartBar",
         iconColor: "#6AC0E6",
      title: "RAG system evaluation",
      bigheading:"Benchmark",
      bigheadingclass:"!text-[16px] mb-2 text-[#626161]",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[300px]",
      textColor: "#fff",
      description:
        "Industry benchmarks for retrieval-augmented generation",
     
        
    
    },
    {
      id: 3,
      icon: "Newspaper",
         iconColor: "#6AC0E6",
      title: "Detecting hallucinations",
      bigheading:"Blog",
      bigheadingclass:"!text-[16px] mb-2 text-[#626161]",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[300px]",
      textColor: "#fff",
      description:
        "Techniques for identifying ungrounded AI outputs",
     
        
    
    },
    {
      id: 4,
        icon: "Network",
           iconColor: "#6AC0E6",
      title: "Testing architecture",
      bigheading:"Architecture",
      bigheadingclass:"!text-[16px] mb-2 text-[#626161]",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[300px]",
      textColor: "#fff",
      description:
        "Reference architecture for autonomous AI testing",
    },
    
   
  ],
};


export const ProcessFlow = () => {
      
const steps = [
  {
    id: 1,
    title: "Capture",
    desc: "AI inputs & context",
  },
  {
    id: 2,
    title: "Generate",
    desc: "Evaluation scenarios",
  },
  {
    id: 3,
    title: "Execute",
    desc: "AI interactions",
  },
  {
    id: 4,
    title: "Score",
    desc: "LLM-based judges",
  },
  {
    id: 5,
    title: "Track",
    desc: "Drift & regressions",
  },
  {
    id: 6,
    title: "Learn",
    desc: "Continuous memory",
  },
];
  return (
    <div className="px-5 mt-[50px]  ">
      
      <div className="relative flex lg:gap-0 gap-18 lg:flex-row flex-col m-auto max-w-[1320px] bg-[#F9F9F9] lg:py-[100px] py-[50px] rounded-[24px] items-center justify-center  shadow-[0px_0px_8px_4px_#01519080]">


        {steps.map((step, index) => (
          <div key={step.id} className={`${index !== steps.length - 1 && index % 2 === 0 ? "":"justify-end"} relative lg:w-[220px] lg:h-[310px] flex gap-0 flex-col items-center text-center`}>
            {/* Number Circle */}
            <div className="z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] text-white font-semibold text-[24px] shadow-md">
              {step.id}
            </div>

            {/* Content */}
            <h3 className="mt-4 text-[24px] font-primary font-semibold text-[#1E1E1E]">
              {step.title}
            </h3>
            <p className="mt-1 text-[20px] font-secondary text-[#626161]">
              {step.desc}
            </p>

            {/* Arrow Down (Zig-Zag effect like image) */}
            {index !== steps.length - 1 && index % 2 === 0 &&   index <= steps.length - 3 &&(
              <div className="absolute right-[-80px] top-[18px] lg:block hidden " >
                <svg width="158" height="194" viewBox="0 0 158 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1.5C3.5 1.5 1.5 3.5 1.5 6C1.5 8.5 3.5 10.5 6 10.5C8.5 10.5 10.5 8.5 10.5 6C10.5 3.5 8.5 1.5 6 1.5Z" fill="white"/>
                    <path d="M82 6H83.5C83.5 5.17157 82.8284 4.5 82 4.5V6ZM82 185H80.5C80.5 185.828 81.1716 186.5 82 186.5V185ZM158 185L143 176.34V193.66L158 185ZM1.5 6H3C3 4.32843 4.32843 3 6 3V1.5V0C2.67157 0 0 2.67157 0 6H1.5ZM6 1.5V3C7.67157 3 9 4.32843 9 6H10.5H12C12 2.67157 9.32843 0 6 0V1.5ZM10.5 6H9C9 7.67157 7.67157 9 6 9V10.5V12C9.32843 12 12 9.32843 12 6H10.5ZM6 10.5V9C4.32843 9 3 7.67157 3 6H1.5H0C0 9.32843 2.67157 12 6 12V10.5ZM10.5 6V7.5H82V6V4.5H10.5V6ZM82 6H80.5V185H82H83.5V6H82ZM82 185V186.5H144.5V185V183.5H82V185Z" fill="url(#paint0_linear_2502_967)"/>
                    <defs>
                    <linearGradient id="paint0_linear_2502_967" x1="1.54586" y1="93.2736" x2="158" y2="93.2736" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6AC0E6"/>
                    <stop offset="1" stop-color="#015190"/>
                    </linearGradient>
                    </defs>
                </svg>
              </div>
            )}
            {/* {index !== steps.length - 1 && index % 2 !== 0 && (
              <div className="absolute right-[-40px] top-[-22px] h-10 w-10 border-r-2 border-t-2 border-blue-400" ></div>
            )} */}
            {index !== steps.length - 1 && index % 2 !== 0  &&(
              <div className="absolute right-[-80px] top-[20px] lg:block hidden " >
                <svg width="148" height="188" viewBox="0 0 148 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 177.16C3.5 177.16 1.5 179.16 1.5 181.66C1.5 184.16 3.5 186.16 6 186.16C8.5 186.16 10.5 184.16 10.5 181.66C10.5 179.16 8.5 177.16 6 177.16Z" fill="white"/>
                    <path d="M77 181.66V183.16C77.8284 183.16 78.5 182.489 78.5 181.66H77ZM77 8.66016V7.16016C76.1716 7.16016 75.5 7.83173 75.5 8.66016H77ZM148 8.66016L133 -9.82285e-05V17.3204L148 8.66016ZM1.5 181.66H3C3 179.989 4.32843 178.66 6 178.66V177.16V175.66C2.67157 175.66 0 178.332 0 181.66H1.5ZM6 177.16V178.66C7.67157 178.66 9 179.989 9 181.66H10.5H12C12 178.332 9.32843 175.66 6 175.66V177.16ZM10.5 181.66H9C9 183.332 7.67157 184.66 6 184.66V186.16V187.66C9.32843 187.66 12 184.989 12 181.66H10.5ZM6 186.16V184.66C4.32843 184.66 3 183.332 3 181.66H1.5H0C0 184.989 2.67157 187.66 6 187.66V186.16ZM10.5 181.66V183.16H77V181.66V180.16H10.5V181.66ZM77 181.66H78.5V8.66016H77H75.5V181.66H77ZM77 8.66016V10.1602H134.5V8.66016V7.16016H77V8.66016Z" fill="url(#paint0_linear_2502_968)"/>
                    <defs>
                    <linearGradient id="paint0_linear_2502_968" x1="1.54293" y1="97.433" x2="148" y2="97.433" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6AC0E6"/>
                    <stop offset="1" stop-color="#015190"/>
                    </linearGradient>
                    </defs>
                </svg>
              </div>
            )}
              {index === steps.length - 2 && (
              <div className="absolute right-[-110px] top-[15px] lg:block hidden " >
                <svg width="179" height="151" viewBox="0 0 179 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1.5C3.5 1.5 1.5 3.5 1.5 6C1.5 8.5 3.5 10.5 6 10.5C8.5 10.5 10.5 8.5 10.5 6C10.5 3.5 8.5 1.5 6 1.5Z" fill="white"/>
                    <path d="M170 6H171.5C171.5 5.17157 170.828 4.5 170 4.5V6ZM170 151L178.66 136H161.34L170 151ZM1.5 6H3C3 4.32843 4.32843 3 6 3V1.5V0C2.67157 0 0 2.67157 0 6H1.5ZM6 1.5V3C7.67157 3 9 4.32843 9 6H10.5H12C12 2.67157 9.32843 0 6 0V1.5ZM10.5 6H9C9 7.67157 7.67157 9 6 9V10.5V12C9.32843 12 12 9.32843 12 6H10.5ZM6 10.5V9C4.32843 9 3 7.67157 3 6H1.5H0C0 9.32843 2.67157 12 6 12V10.5ZM10.5 6V7.5H170V6V4.5H10.5V6ZM170 6H168.5V137.5H170H171.5V6H170Z" fill="url(#paint0_linear_2502_971)"/>
                    <defs>
                    <linearGradient id="paint0_linear_2502_971" x1="1.54937" y1="76.2693" x2="170" y2="76.2693" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6AC0E6"/>
                    <stop offset="1" stop-color="#015190"/>
                    </linearGradient>
                    </defs>
                </svg>

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export const Enterprise_Use_Cases = {
  title: "Enterprise Use Cases",
  subtitle: "Validate AI systems across mission-critical business applications",
  bodyclass: "bg-[#fff] text-black mt-[-90px] !px-5 ",
  // tags:"How it works",
    bggradient:"bg-[radial-gradient(66.19%_497.1%_at_50%_50%,_#015190_0%,_#015190_50.32%,_#6AC0E6_100%)] rounded-[24px] px-5 py-5 max-w-auto lg:max-w-[1270px] ",

  cards: [
    {
      id: 1,
      icon: "Headset",
      title: "AI customer support validation",
      discColor: "#626161",
      cardClassName:"bg-[#fff] w-full sm:w-[600px] min-h-[258px]",
      textColor: "#000",
      description:
        "Ensure chatbots and virtual agents deliver accurate, helpful, and safe customer interactions.",
      points: {
        labels: [
          {
            text: "Intent classification accuracy",
            icon: {
              name: "Check",
              color: "#015190",
            },
          },
           {
            text: "Response quality & relevance",
            icon: {
              name: "Check",
              color: "#015190",
            },
          },
           {
            text: "Escalation appropriateness",
            icon: {
              name: "Check",
              color: "#015190",
            },
          },
       
        
        ],


        // TEXT COLOR / GRADIENT
        textGradientColor: "#015190",

      }
        
    
    },
     {
      id: 2,
      icon: "Brain",
      title: "AI decision support systems",
      discColor: "#626161",
      cardClassName:"bg-[#fff] w-full sm:w-[600px] min-h-[258px]",
      textColor: "#000",
      description:
        "Validate AI recommendations in high-stakes domains like finance, healthcare, and legal.",

 points: {
        labels: [
          {
            text: "Recommendation accuracy",
            icon: {
              name: "Check",
              color: "#015190",
            },
          },
          {
            text: "Bias & fairness monitoring",
            icon: {
              name: "Check",
              color: "#015190",
            },
          },
          {
            text: "Explainability & audit trails",
            icon: {
              name: "Check",
              color: "#015190",
            },
          },
         
        
        ],


        // TEXT COLOR / GRADIENT
        textGradientColor: "#015190",

      }
    
    },
     {
      id: 3,
      icon: "Search",
      title: "Rag-powered search & knowledge assistants",
      discColor: "#626161",
      cardClassName:"bg-[#fff] w-full sm:w-[600px] min-h-[258px]",
      textColor: "#000",
      description:
        "Test retrieval accuracy and generation quality for enterprise knowledge systems.",
 points: {
        labels: [
          {
            text: "Retrieval precision & recall",
            icon: {
              name: "Check",
              color: "#015190",
            },
          },
                {
            text: "Answer faithfulness",
            icon: {
              name: "Check",
              color: "#015190",
            },
          },
                {
            text: "Source attribution verification",
            icon: {
              name: "Check",
              color: "#015190",
            },
          },
          
        
        ],


        // TEXT COLOR / GRADIENT
        textGradientColor: "#015190",

      }
 
    
    },
     {
      id: 4,
      icon: "FileCheck",
      title: "Compliance-sensitive AI workflows",
      discColor: "#626161",
      cardClassName:"bg-[#fff] w-full sm:w-[600px] min-h-[258px]",
      textColor: "#000",
      description:
        "Ensure AI systems meet regulatory requirements and internal governance policies.",
 points: {
        labels: [
          {
            text: "Policy adherence validation",
            icon: {
              name: "Check",
              color: "#015190",
            },
          },
                {
            text: "Risk threshold monitoring",
            icon: {
              name: "Check",
              color: "#015190",
            },
          },
                {
            text: "Audit-ready documentation",
            icon: {
              name: "Check",
              color: "#015190",
            },
          },
          
        
        ],


        // TEXT COLOR / GRADIENT
        textGradientColor: "#015190",

      }
 
    
    }
   
  ],
};


export const Evaluation_Dimensions_CONFIG = {
  title: "Evaluation dimensions",
  subtitle: "Multi-dimensional scoring that captures every aspect of AI quality",
   bodyclass: "bg-[linear-gradient(360deg,#042539_0%,#000000_100%)] text-white !rounded-b-none md:rounded-t-[100px] rounded-t-[50px] !pb-[200px]",


  cards: [
    {
      id: 1,
      icon: "Target",
      iconColor:"#6AC0E6",
      title: "Accuracy",
      bigheading:"96.4%",
      bigheadingclass:"bg-[#6AC0E6] bg-clip-text text-transparent",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[437px] min-h-[258px]",
      textColor: "#fff",
      description:
        "How correctly the AI system produces expected outputs",
      points: {
        labels: [
          {
            text: "Measured: Output correctness vs. ground truth",
          },
          {
            text: "Scored: Semantic similarity + fact verification",
          },
        ],

        // TEXT COLOR / GRADIENT
        textGradientColor: "#6AC0E6",

      }
        
    
    },
     {
      id: 2,
      icon: "Link",
      title: "Faithfulness",
            iconColor:"#6AC0E6",
      bigheading:"98.2%",
      bigheadingclass:"bg-[#6AC0E6] bg-clip-text text-transparent",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[437px] min-h-[258px]",
      textColor: "#fff",
      description:
        "How well outputs stay grounded in source context",
      points: {
        labels: [
          {
            text: "Measured: Context adherence + source attribution",
          },
          {
            text: "Scored: Claim verification against sources",
          },
        ],

        // TEXT COLOR / GRADIENT
        textGradientColor: "#6AC0E6",

      }
        
    
    },
     {
      id: 3,
      icon: "ShieldCheck",
      title: "Robustness",
            iconColor:"#6AC0E6",
      bigheading:"93.7%",
      bigheadingclass:"bg-[#6AC0E6] bg-clip-text text-transparent",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[437px] min-h-[258px]",
      textColor: "#fff",
      description:
        "Stability across edge cases and adversarial inputs",
      points: {
        labels: [
          {
            text: "Measured: Performance under stress conditions",
          },
          {
            text: "Scored: Failure rate + recovery capability",
          },
        ],

        // TEXT COLOR / GRADIENT
        textGradientColor: "#6AC0E6",

      }
        
    
    },
     {
      id: 4,
      icon: "Scale",
      title: "Bias & fairness",
            iconColor:"#6AC0E6",
      bigheading:"95.1%",
      bigheadingclass:"bg-[#6AC0E6] bg-clip-text text-transparent",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[437px] min-h-[258px]",
      textColor: "#fff",
      description:
        "Equitable treatment across demographic groups",
      points: {
        labels: [
          {
            text: "Measured: Output parity across segments",
          },
          {
            text: "Scored: Demographic disparity metrics",
          },
        ],

        // TEXT COLOR / GRADIENT
        textGradientColor: "#6AC0E6",

      }
        
    
    },
    {
      id: 5,
      icon: "Menu",
      title: "Consistency",
            iconColor:"#6AC0E6",
      bigheading:"97.3%",
      bigheadingclass:"bg-[#6AC0E6] bg-clip-text text-transparent",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[437px] min-h-[258px]",
      textColor: "#fff",
      description:
        "Stable outputs for similar inputs over time",
      points: {
        labels: [
          {
            text: "Measured: Output variance for similar queries",
          },
          {
            text: "Scored: Temporal + contextual stability",
          },
        ],

        // TEXT COLOR / GRADIENT
        textGradientColor: "#6AC0E6",

      }
        
    
    },
    {
      id: 6,
      icon: "Lightbulb",
      title: "Explainability",
            iconColor:"#6AC0E6",
      bigheading:"91.8%",
      bigheadingclass:"bg-[#6AC0E6] bg-clip-text text-transparent",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[437px] min-h-[258px]",
      textColor: "#fff",
      description:
        "Clarity of reasoning and decision pathways",
      points: {
        labels: [
          {
            text: "Measured: Reasoning transparency",
          },
          {
            text: "Scored: Chain-of-thought clarity + traceability",
          },
        ],

        // TEXT COLOR / GRADIENT
        textGradientColor: "#6AC0E6",

      }
        
    
    },
   
  ],
};


export const Enterprise_Grade_AI_Governance = {
  title: "Enterprise-grade AI governance",
  subtitle: "Built-in compliance, explainability, and auditability for regulated industries",
  bodyclass: "bg-[linear-gradient(360deg,#042539_0%,#000000_100%)] text-white !rounded-b-none md:rounded-t-[100px] rounded-t-[50px] !pb-[200px]",

  cards: [
    {
      id: 1,
      icon: "FileText",
      title: "Complete audit trails",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[600px] w-[100%]",
      description:
        "Every AI interaction, evaluation, and decision is logged with full context and traceability.",
      points: {
        labels: ["Immutable test execution records","Timestamped model & prompt versions","User action attribution"],
        showDisc: true, // ✅ disc visible
        textGradientColor:
          "#6AC0E6",
        discGradientColor:
          "#6AC0E6",
        
      },
    },

    {
      id: 2,
      icon: "Lightbulb",
      title: "Explainable scoring",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[600px] w-[100%]",
      description:
        "Human-readable explanations for every evaluation score and decision.",
      points: {
        labels: ["Natural-language rationales", "Evidence highlighting", "Transparent scoring methodology"],
        showDisc: true, // ❌ text only, no disc
        textGradientColor:
          "#6AC0E6",
        discGradientColor:
          "#6AC0E6",
      },
    },

    {
      id: 3,
      icon: "GitMerge",
      title: "Model & prompt versioning",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[600px] w-[100%]",
      description:
        "Track and manage changes to AI systems with Git-like version control.",
      points: {
        labels: ["Automated version tagging", "Diff comparisons across versions", "Safe rollback capability"],
        showDisc: false,
        textGradientColor:
        "#6AC0E6",
        discGradientColor:
        "#6AC0E6",
        
      },
    },
    {
      id: 4,
      icon: "FileCheck",
      title: "Regulatory readiness",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[600px] w-[100%] ",
      description:
        "Pre-configured compliance frameworks for global AI regulations.",
      points: {
        labels: ["EU AI Act alignment", "Security Compliant / ISO compliance", "Industry-specific governance frameworks"],
        showDisc: false,
        textGradientColor:
        "#6AC0E6",
        discGradientColor:
        "#6AC0E6",
        
      },
    },
  ],
};

export const Testing_USP_CONFIG = {
  title: "Comprehensive AI system validation",
  subtitle: "End-to-end validation from input to impact across every dimension that matters",
  bodyclass: "bg-[linear-gradient(360deg,#042539_0%,#000000_100%)] text-white !rounded-b-none rounded-t-[100px] !pb-[200px]",
 

  cards: [
    {
      id: 1,
      icon: "CheckCheck",
      title: "Functional correctness",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[600px] w-[100%]",
      description:
        "Validate that AI outputs meet business requirements and user expectations",
      points: {
        labels: ["Intent recognition accuracy","Task completion validation","Output format compliance"],
        showDisc: true, // ✅ disc visible
        textGradientColor:
          "#6AC0E6",
        discGradientColor:
          "#6AC0E6",
        
      },
    },

    {
      id: 2,
      icon: "ShieldCheck",
      title: "Safety & reliability",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[600px] w-[100%]",
      description:
        "Ensure AI systems operate safely within defined boundaries",
      points: {
        labels: ["Harmful content detection", "Boundary violation monitoring", "Failure mode analysis"],
        showDisc: true, // ❌ text only, no disc
               textGradientColor:
          "#6AC0E6",
        discGradientColor:
          "#6AC0E6",
      },
    },

    {
      id: 3,
      icon: "ClockFading",
      title: "Performance consistency",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[600px] w-[100%]",
      description:
        "Monitor AI behavior stability across time, contexts, and scenarios",
      points: {
        labels: ["Response time tracking", "Quality score trends", "Edge case handling"],
        showDisc: false,
                textGradientColor:
          "#6AC0E6",
        discGradientColor:
          "#6AC0E6",
        
      },
    },
    {
      id: 4,
      icon: "FileCheck",
      title: "Governance & auditability",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[600px] w-[100%]",
      description:
        "Maintain compliance and explainability for enterprise AI systems",
      points: {
        labels: ["Complete audit trails", "Decision explainability", "Regulatory compliance"],
        showDisc: false,
               textGradientColor:
          "#6AC0E6",
        discGradientColor:
          "#6AC0E6",
        
      },
    },
  ],
};



export const USP_CONFIG = {
  title: "Why traditional testing fails for AI systems",
  subtitle: "AI systems require fundamentally different validation approaches than deterministic software",
  bodyclass: "",
   bggradient:"bg-[radial-gradient(66.19%_497.1%_at_50%_50%,_#015190_0%,_#015190_50.32%,_#6AC0E6_100%)] rounded-[24px]",

  cards: [
    {
      id: 1,
      icon: "Dices",
      title: "Non-deterministic outputs",
      discColor: "#626161",
      iconColor:"#015190",
      cardClassName:"bg-[#fff] w-full md:w-[23%] ",
      textColor: "#000",
      description:
        "Same input can produce different valid outputs, making traditional assertion-based testing impossible.",
     
        
    
    },
     {
      id: 2,
      icon: "ChartSpline",
      iconColor:"#015190",
      title: "Configure test strategy",
      discColor: "#626161",
      cardClassName:"bg-[#fff] w-full md:w-[23%] ",
      textColor: "#000",
      description:
        "AI decisions are based on confidence scores and learned patterns, not fixed logic paths.",
    
    },
     {
      id: 3,
      icon: "Database",
      title: "Data & prompt sensitivity",
      discColor: "#626161",
      iconColor:"#015190",
      cardClassName:"bg-[#fff] w-full md:w-[23%] ",
      textColor: "#000",
      description:
        "Minor changes in input context or phrasing can significantly alter AI behavior and outputs.",
    
    },
     {
      id: 4,
      icon: "RefreshCcw",
      title: "Continuous evolution",
      discColor: "#626161",
      iconColor:"#015190",
      cardClassName:"bg-[#fff] w-full md:w-[23%] ",
      textColor: "#000",
      description:
        "Models update, data drifts, and prompts change requiring ongoing validation, not one-time testing.",
    
    }
   
  ],
};




export const Testing_HEADER = {
    heading: "Testing AI systems<br/> at enterprise scale",
    headclass: " text-white",
    headingclass:"text-[#fff]",
    paragraph:
        "A comprehensive approach to validating AI behavior, reliability, and safety in production <br/> environments.",
    //   backgroundImage: "/bg/gradient.png",
    buttons: [
        {
            text: "View Evaluation Architecture",
            className:
                "py-5 px-8  font-primary font-[600] text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
            icon: "CircleArrowOutUpRight",
            hoverIcon: true,
            iconSize: "20px",
            href: "",
        },
        {
            text: "Request AI Testing Demo",
            className:
                "text-[16px]  min-w-[228px] py-5 px-6 font-primary font-[600] leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
            href: "/demo",
            icon: "CircleArrowOutUpRight",
            iconSize: "20px",
        }

    ],
};