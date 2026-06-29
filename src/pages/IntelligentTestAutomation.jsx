import InfoCard from "../components/card/InfoCard";
import InsightCard from "../components/card/InsightCard";
import SectionHeading from "../components/common/SectionHeading";
import Navbar from "../components/Navbar";
import MainBanner from "../components/services/MainBanner";
import FeatureCard from "@/components/card/FeaturedCard";
import FooterSection from "@/components/home/FooterSection";
import TimeLine2 from "../components/services/TimeLine2";
import UspServices2 from "../components/services/UspServices2";
import { Atom, Repeat2, Eye, Check, ShieldCheck, Plug, LockOpen, UserRoundPen,  } from 'lucide-react';
const IntelligentTestAutomation = () => {


    return (
        <div className="bg-[#E9F6FB] menuwhitepage">
            <Navbar
                wrapperClassName="relative "
                disableScrollHide={true}
                linkClassName="text-black"
                iconClassName="invert-0"
            />
            <section className=' py-[100px] rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                <span class="bg-[#42ABDF40] taxt-center m-auto  mb-8
                                                             w-fit p-0  rounded-[100px] px-[15px] border border[1px] border-[#42ABDF40] flex justify-center items-center ">
                    <img src="./svg/lock.svg" alt="" /><span class="font-secondary  block text-[12px]   bg-[#6AC0E6]
                                                            bg-clip-text p-2
                                                            text-transparent font-[600]">AI-Powered Testing Platform</span></span>
                <MainBanner data={REFLECTIVE_MEMORY_HEADER} />
                <div className="tags flex md:flex-row flex-col justify-center items-center gap-[40px] justify-center mt-[60px]">
                    <span className='text-[14px] text-[#6AC0E6] font-[500] font-secondary'>    <Atom className='inline-flex me-2 text-[14px]' />No credit card required</span>
                    <span className='text-[14px] text-[#6AC0E6] font-[500] font-secondary'>    <Repeat2 className='inline-flex me-2 text-[14px]' />14-day free trial</span>
                    <span className='text-[14px] text-[#6AC0E6] font-[500] font-secondary'>    <Eye className='inline-flex me-2 text-[14px]' />Setup in minutes</span>
                </div>
            </section>
            <section className="relative bg1 py-[90px] px-5 ">
                {/* <h4 className="bg-[#0151901A] text-[#015190] text-[12px] w-fit m-auto font-secondary rounded-[100px] px-4 mb-6 p-3">What it does</h4> */}
                <SectionHeading
                    subtitle="Our platform combines machine learning with advanced test orchestration to create, execute, and maintain test suites that evolve with your application. Eliminate brittle tests and reduce maintenance overhead by up to 80%."
                    subtitleClassName=" font-secondary text-[#626161]"
                    titleClassName="font-primary  font-[600]  text-[#015190] captialize"
                    title="Autonomous testing infrastructure"
                    wrapperClassName="max-w-[733px] m-auto"
                    spacing="space-y-4"
                />
                <div className="flex gap-4 flex-wrap justify-center mt-12">
                    {FEATURE_CARDS.map((item, index) => (
                        <FeatureCard key={item.id || index} {...item} />
                    ))}
                </div>


            </section>

            <UspServices2 data={USP_CONFIG}/>
            <UspServices2 data={Pipeline}/>

            <section className="py-[90px] mb-[60px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)] md:rounded-[100px] rounded-[50px]">
          
       <SectionHeading
                    subtitle="Real-world results from teams across key industries"
                    subtitleClassName=" font-secondary text-[#C6C6C6]"
                    titleClassName="font-primary  font-[600]  text-[#fff] captialize"
                    title="Trusted by Leading Teams"
                    wrapperClassName="max-w-[733px] m-auto"
                    spacing="space-y-4"
                />

                <div className="max-w-[1224px] mt-[60px] px-5 m-auto grid grid-cols-12 gap-6">
                    <div className="lg:col-span-6 col-span-12 border py-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] px-5 border-[1px] border-[#D9D9D9] rounded-[16px]">
                        <img src="./svg/store.svg" alt="" />
                        <h3 className="text-[24px] font-primary font-[600] text-[#fff] mt-[30px]">E-commerce platform</h3>
                        <p className="text-[14px] text-[#D9D9D9] font-[500] font-secondary mt-2">A major online retailer automated their entire checkout flow testing across 15 payment gateways and 8 locales. Self-healing tests adapted to frequent UI changes during holiday campaigns, maintaining 99.8% uptime during peak traffic.</p>
                        <div className="mt-8 flex gap-6 flex-wrap">
                            <div >
                                <h2 className="bg-[#6AC0E6] 
                                    bg-clip-text text-transparent text-[32px] font-primary font-[600]">250+</h2>
                                    <p className="text-[16px] font-[400] font-primary text-[#fff]">Test scenarios</p>
                            </div>
                            <div >
                                <h2 className="bg-[#6AC0E6] 
                                    bg-clip-text text-transparent text-[32px] font-primary font-[600]">12 min</h2>
                                    <p className="text-[16px] font-[400] font-primary text-[#fff]">Full suite runtime</p>
                            </div>
                            <div >
                                <h2 className="bg-[#6AC0E6] 
                                    bg-clip-text text-transparent text-[32px] font-primary font-[600]">$2.4M</h2>
                                    <p className="text-[16px] font-[400] font-primary text-[#fff]">Revenue protected</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 col-span-12 border py-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] px-5 border-[1px] border-[#D9D9D9] rounded-[16px]">
                        <img src="./svg/landmark.svg" alt="" />
                        <h3 className="text-[24px] font-primary font-[600] text-[#fff] mt-[30px]">Financial services</h3>
                        <p className="text-[14px] text-[#D9D9D9] font-[500] font-secondary mt-2">A fintech company deployed comprehensive API and security testing for their mobile banking app. Intelligent test generation covered edge cases that manual QA missed, preventing three critical security vulnerabilities from reaching production.</p>
                        <div className="mt-8 flex gap-6 flex-wrap">
                            <div >
                                <h2 className="bg-[#6AC0E6] 
                                    bg-clip-text text-transparent text-[32px] font-primary font-[600]">1,200+</h2>
                                    <p className="text-[16px] font-[400] font-primary text-[#fff]">API endpoints</p>
                            </div>
                            <div >
                                <h2 className="bg-[#6AC0E6] 
                                    bg-clip-text text-transparent text-[32px] font-primary font-[600]">100%</h2>
                                    <p className="text-[16px] font-[400] font-primary text-[#fff]">Compliance rate</p>
                            </div>
                            <div >
                                <h2 className="bg-[#6AC0E6] 
                                    bg-clip-text text-transparent text-[32px] font-primary font-[600]">3</h2>
                                    <p className="text-[16px] font-[400] font-primary text-[#fff]">Breaches prevented</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 col-span-12 border py-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] px-5 border-[1px] border-[#D9D9D9] rounded-[16px]">
                        <img src="./svg/heart-pulse.svg" alt="" />
                        <h3 className="text-[24px] font-primary font-[600] text-[#fff] mt-[30px]">Healthcare SaaS</h3>
                        <p className="text-[14px] text-[#D9D9D9] font-[500] font-secondary mt-2">A medical records platform achieved HIPAA compliance testing automation with comprehensive data validation and security checks. Parallel execution reduced their release cycle from 2 weeks to 3 days while maintaining regulatory standards.</p>
                        <div className="mt-8 flex gap-6 flex-wrap">
                            <div >
                                <h2 className="bg-[#6AC0E6] 
                                    bg-clip-text text-transparent text-[32px] font-primary font-[600]">500+</h2>
                                    <p className="text-[16px] font-[400] font-primary text-[#fff]">Compliance tests</p>
                            </div>
                            <div >
                                <h2 className="bg-[#6AC0E6] 
                                    bg-clip-text text-transparent text-[32px] font-primary font-[600]">83 %</h2>
                                    <p className="text-[16px] font-[400] font-primary text-[#fff]">Time saved</p>
                            </div>
                            <div >
                                <h2 className="bg-[#6AC0E6] 
                                    bg-clip-text text-transparent text-[32px] font-primary font-[600]">Zero</h2>
                                    <p className="text-[16px] font-[400] font-primary text-[#fff]">Audit findings</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 col-span-12 border py-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] px-5 border-[1px] border-[#D9D9D9] rounded-[16px]">
                        <img src="./svg/gamepad-2.svg" alt="" />
                        <h3 className="text-[24px] font-primary font-[600] text-[#fff] mt-[30px]">Gaming platform</h3>
                        <p className="text-[14px] text-[#D9D9D9] font-[500] font-secondary mt-2">A multiplayer gaming service automated cross-platform testing across PC, console, and mobile. Real-time monitoring detected performance regressions instantly, ensuring smooth gameplay for 5 million concurrent users during launches.</p>
                        <div className="mt-8 flex gap-6 flex-wrap">
                            <div >
                                <h2 className="bg-[#6AC0E6] 
                                    bg-clip-text text-transparent text-[32px] font-primary font-[600]">18</h2>
                                    <p className="text-[16px] font-[400] font-primary text-[#fff]">Platforms tested</p>
                            </div>
                            <div >
                                <h2 className="bg-[#6AC0E6] 
                                    bg-clip-text text-transparent text-[32px] font-primary font-[600]">5M</h2>
                                    <p className="text-[16px] font-[400] font-primary text-[#fff]">Concurrent users</p>
                            </div>
                            <div >
                                <h2 className="bg-[#6AC0E6] 
                                    bg-clip-text text-transparent text-[32px] font-primary font-[600]">99.9%</h2>
                                    <p className="text-[16px] font-[400] font-primary text-[#fff]">Uptime achieved</p>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
            <FooterSection/>
        </div>
    )
}



export default IntelligentTestAutomation

export const Pipeline = {
  title: "Measurable impact on your pipeline",
  subtitle: "Real metrics from production deployments across enterprise teams",
  bodyclass: false,
  // tags:"Key benefits",

  cards: [
    {
      id: 1,
      icon: "ShieldCheck",
      bigheading:"94%",
   
      title: "Test coverage",
      discColor: "#626161",
      cardClassName:"bg-[#fff] w-full sm:w-[322px] ",
      textColor: "#000",
      description:
        "Comprehensive coverage across UI, API, and integration layers with minimal configuration",
      points: {
        labels: [
          {
            text: "+40% vs. traditional testing",
            icon: {
              name: "ArrowUp",
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
      icon: "Clock",
      title: "Faster execution",
      discColor: "#626161",
      bigheading:"10x",
      cardClassName:"bg-[#fff] w-full sm:w-[322px] ",
      textColor: "#000",
      description:
        "AI-optimized test orchestration and parallelization for rapid feedback",

        points: {
        labels: [
          {
            text: "Average runtime: under 8 minutes",
            icon: {
              name: "Clock",
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
      icon: "PiggyBank",
      title: "Cost reduction",
      discColor: "#626161",
       bigheading:"67%",
      cardClassName:"bg-[#fff] w-full sm:w-[322px] ",
      textColor: "#000",
      description:
        "Reduce maintenance overhead with self-healing scripts and smart test pruning.",
        points: {
        labels: [
          {
            text: "ROI achieved in 3 months",
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
      icon: "TriangleAlert",
      title: "Risk mitigation",
      discColor: "#626161",
       bigheading:"89%",
      cardClassName:"bg-[#fff] w-full sm:w-[322px] ",
      textColor: "#000",
      description:
        "Catch critical bugs before production with predictive failure detection and smart alerting",
        points: {
        labels: [
          {
            text: "Zero critical production leakages",
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
export const USP_CONFIG = {
  title: "Simple Three-Step Process",
  subtitle: "From integration to execution, our platform streamlines your entire testing workflow",
  bodyclass: "bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] text-white md:rounded-[100px] rounded-[50px]",
  // tags:"How it works",

  cards: [
    {
      id: 1,
      icon: "Plug",
      num:"1",
      title: "Connect your repository",
      iconColor:"#6AC0E6",
      discColor: "#C6C6C6",
      cardClassName:"mt-12 md:mt-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[390px] ",
      textColor: "#fff",
      description:
        "Integrate with GitHub, GitLab, or Bitbucket in seconds. Our platform automatically discovers your application structure and existing tests.",
      points: {
        labels: [
          {
            text: "One-click OAuth integration",
            icon: {
              name: "Check",
              color: "#6AC0E6",
            },
          },
          {
            text: "Automatic dependency detection",
            icon: {
              name: "Check",
              color: "#6AC0E6",
            },
          },
          {
            text: "Secure credential management",
            icon: {
              name: "Check",
              color: "#6AC0E6",
            },
          },
        
        ],


        // TEXT COLOR / GRADIENT
        textGradientColor: "linear-gradient(#6AC0E6)",

      }
        
    
    },
     {
      id: 2,
      icon: "Settings",
      title: "Configure test strategy",
      discColor: "#C6C6C6",
      iconColor:"#6AC0E6",
       num:"2",
      cardClassName:"mt-12 md:mt-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[390px] ",
      textColor: "#fff",
      description:
        "Define test parameters, execution environments, and coverage goals. AI suggests optimal configurations based on your codebase.",

        points: {
        labels: [
          {
            text: "Smart test prioritization",
            icon: {
              name: "Check",
              color: "#6AC0E6",
            },
          },
          {
            text: "Environment orchestration",
            icon: {
              name: "Check",
              color: "#6AC0E6",
            },
          },
          {
            text: "Browser/device matrix setup",
            icon: {
              name: "Check",
              color: "#6AC0E6",
            },
          },
        
        ],


        // TEXT COLOR / GRADIENT
        textGradientColor: "linear-gradient(#6AC0E6)",

      }
    
    },
     {
      id: 3,
      icon: "CirclePlay",
      title: "Execute & monitor",
      discColor: "#C6C6C6",
      iconColor:"#6AC0E6",
       num:"3",
      cardClassName:"mt-12 md:mt-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[390px] ",
      textColor: "#fff",
      description:
        "Tests run automatically on every commit with real-time monitoring. Get instant feedback with detailed reports and video recordings.",
    points: {
        labels: [
          {
            text: "Live execution dashboard",
            icon: {
              name: "Check",
              color: "#6AC0E6",
            },
          },
          {
            text: "Automated failure triage",
            icon: {
              name: "Check",
              color: "#6AC0E6",
            },
          },
          {
            text: "Slack/Teams notifications",
            icon: {
              name: "Check",
              color: "#6AC0E6",
            },
          },
        
        ],


        // TEXT COLOR / GRADIENT
        textGradientColor: "linear-gradient(#6AC0E6)",

      }
 
    
    }
   
  ],
};



export const REFLECTIVE_MEMORY_HEADER = {
    heading: "Intelligent test <br/> automation",
    headclass: " text-white",
    headingclass:"text-[#fff]",
    paragraph:
        "Accelerate software delivery with self-healing tests that adapt to changes automatically",
    //   backgroundImage: "/bg/gradient.png",
    buttons: [
        {
            text: "Request Demo",
            className:
                "py-5 px-6  font-primary font-[600] text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
            icon: "CircleArrowOutUpRight",
            hoverIcon: true,
            iconSize: "20px",
            href: "",
        },
        {
            text: "View Architecture",
            className:
                "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-[600] leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
            href: "/platform-architecture",
            icon: "CircleArrowOutUpRight",
            iconSize: "20px",
        }

    ],
};
export const FEATURE_CARDS = [
    {
        id: 1,
        icon: "WandSparkles",
        iconColor: "#015190",
        // hasBg: true,
        bgColor: "linear-gradient(90deg,#FFA68D,#FD3A84)",
        title: "Self-healing tests",
        description: "Automatically adapts to UI changes, locator updates, and application modifications without manual intervention.",
        textColor: "#1E1E1E",
        discColor: "#626161",
        cardClassName: "shadow-[ 0px_26px_16px_0px_#0151900D] w-full sm:w-[340px]  bg-[#fff]"

    },

    {
        id: 2,
        icon: "Brain",
        // hasBg: false,
         iconColor: "#015190",
        title: "Intelligent analysis",
        description: "AI-driven root cause analysis identifies real failures from flaky tests and provides actionable insights instantly.",
        textColor: "#1E1E1E",
        discColor: "#626161",
        cardClassName: "shadow-[ 0px_26px_16px_0px_#0151900D] w-full sm:w-[340px]  bg-[#fff] "

    },

    {
        id: 3,
        icon: "Rocket",
         iconColor: "#015190",
        // hasBg: true,
        bgColor: "linear-gradient(180deg,#00273A,#000000)",
        title: "Parallel execution",
        description: "Distribute tests across cloud infrastructure for 10x faster feedback loops and seamless CI/CD integration.",
        textColor: "#1E1E1E",
        discColor: "#626161",
        cardClassName: "shadow-[ 0px_26px_16px_0px_#0151900D] w-full sm:w-[340px] bg-[#fff] "
    }
];