import { useEffect, useState } from "react";
import { getTeamMembersApi } from "@/utils/frontApi"; // path apne project ke hisab se
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import FooterSection from "@/components/home/FooterSection"; 
import UspServices from '../components/services/UspServices';
import { Comapny_HEADER, KEY_FEATURES_CONFIG,  members_CONFIG , Drive_CONFIG , Company_CTA_CONFIG} from "../config/companyConfig"
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/card/FeaturedCard.jsx";
import { Check, FlaskConical, Link, Linkedin, Network, Twitter, X } from 'lucide-react';
import Button from '../components/ui/Button';
import CtaSection from "../components/common/CtaSection"
// import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const CompanyPage = ({locomotiveScroll }) => {

    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        el?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 500);
    }
  }, [location]);

    const { cards } = KEY_FEATURES_CONFIG;
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

const fetchMembers = async () => {
  try {
    const res = await getTeamMembersApi();

    console.log(res.data);

    if (res.data.success) {
      setMembers(res.data.data);
    }
  } catch (err) {
    console.log(err);
  }
};

return (
        <>
            <Navbar
                wrapperClassName="fixed top-0 left-0"
                disableScrollHide={false}
                linkClassName="text-dark"
                iconClassName="text-dark"
            />
            <div className='lg:mt-[100px] mt-[100px] rounded-[50px] lg:py-[150px] py-[100px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                <p className='font-secondary font-semibold text-[18px] text-white text-center mb-[15px]'>Two Platforms. One Vision.</p>
                <MainBanner data={Comapny_HEADER} />

            </div>
            <section className='py-20 px-5 md:px-0 '>
           <SectionHeading
                    title="Building tomorrow’s testing infrastructure"
                    subtitle={`We envision a world where software testing is fully autonomous, context-aware, and predictive where quality assurance evolves from reactive validation to proactive intelligence.
                    <br class="hidden md:block" />
                    Our dual-platform approach combines the precision of autonomous testing with the insight of context intelligence, creating a unified ecosystem that adapts, learns, and scales with your organization.`}
                    
                    titleClassName="text-[#015190]"
                    subtitleClassName="text-[#626161] max-w-[950px]"
                    />


                <div className="flex mt-5 flex-wrap  gap-6 pt-10 justify-center max-w-[1200px] mx-auto">
                    {cards.map((card) => (
                        <FeatureCard key={card.id} {...card} />
                    ))}
                </div>


            </section>
            <section className='py-[80px]  px-5 pb-[200px] rounded-t-[50px]  md:rounded-t-[100px] rounded-b-0 bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                {/* <p className='font-secondary font-semibold text-[18px] text-[#fff] text-center mb-[10px]'>Our Platforms</p> */}
                <SectionHeading
                    title="Two complementary solutions"
                    subtitle='Purpose-built platforms that work independently or together to transform <br class="md:block hidden "/> your testing and intelligence capabilities'
                    titleClassName=" text-[#fff]"
                    subtitleClassName="  text-[#C6C6C6] max-w-[950px]"
                />

                <div className="flex flex-wrap justify-center md:flex-nowrap gap-[30px] max-w-[1224px] mx-auto mt-[50px]" >
                    <div className="max-w-[600px] border border-[1px] border-[#505050] rounded-[16px] py-5 px-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] h-full">
                        <FlaskConical className=' text-[#6AC0E6] h-[32px]' />
                        <h2 className='font-primary mt-[30px] text-[24px] font-[600] text-[white]'>Autonomous Testing Platform</h2>
                        <h3 className='font-secandary mt-[14px]  bg-[#6AC0E6]
                            font-[600] bg-clip-text text-transparent text-[16px] font-[500]'>airithm.test</h3>
                        <p className='font-seconadry lg:text-[14px] text-[14px] mt-[14px] text-[#C6C6C6]'>Eliminate manual test maintenance with AI-powered autonomous testing. Our platform automatically generates, executes, and maintains test suites that evolve with your codebase.</p>
                       <div className='mt-auto'>

                         <ul className='mt-[20px]'>
                            <li className='text-[16px] mb-[10px] bg-[#6AC0E6]
                                font-[600] bg-clip-text text-transparent'><Check className='me-2 inline-flex text-[#6AC0E6]' /> Self-healing test scripts</li>
                            <li className='text-[16px] mb-[10px] bg-[#6AC0E6]
                            font-[600] bg-clip-text text-transparent'><Check className='me-2 inline-flex text-[#6AC0E6]' />Intelligent test generation</li>
                                <li className='text-[16px] mb-[10px] bg-[#6AC0E6]
                                font-[600] bg-clip-text text-transparent'><Check className='me-2 inline-flex text-[#6AC0E6]' /> Parallel execution at scale</li>
                            <li className='text-[16px] mb-[10px] bg-[#6AC0E6]
                                font-[600] bg-clip-text text-transparent'><Check className='me-2 inline-flex text-[#6AC0E6]' /> Visual regression detection</li>
                        </ul>
                        <Button
                            btnText="Learn More"
                            className=
                            "text-[16px]  min-w-[100%] mt-[30px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                            href="/ai-automation"
                            icon="CircleArrowOutUpRight"
                            iconSize="20px"
                        //   useCommonSvg="true"
                        />
                       </div>
                    </div>
                    <div className="max-w-[600px] border border-[1px] border-[#505050] rounded-[16px] py-4 px-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] h-full flex flex-col">
                        <Network className=' text-[#6AC0E6] h-[32px]' />
                        <h2 className='font-primary mt-[30px] text-[24px] font-[600] text-[white]'>Context Intelligence Platform</h2>
                        <h3 className='font-secandary mt-[14px]  bg-[#6AC0E6]
                            font-[600] bg-clip-text text-transparent text-[16px] font-[500]'>airithm.test</h3>
                        <p className='font-seconadry lg:text-[14px] text-[14px]  mt-[14px] text-[#C6C6C6]'>Understand the full context of your systems with deep behavioral analysis. Our platform maps dependencies, monitors patterns, and provides actionable intelligence for every decision.</p>
                       <div className=' mt-auto'>


                         <ul className='mt-[20px]'>
                            <li className='text-[16px] mb-[10px] bg-[#6AC0E6]
                                font-[600] bg-clip-text text-transparent'><Check className='me-2 inline-flex text-[#6AC0E6]' /> Real-time dependency mapping</li>
                            <li className='text-[16px] mb-[10px] bg-[#6AC0E6]
                                font-[600] bg-clip-text text-transparent'><Check className='me-2 inline-flex text-[#6AC0E6]' /> Behavioral pattern analysis</li>
                            <li className='text-[16px] mb-[10px] bg-[#6AC0E6]
                                font-[600] bg-clip-text text-transparent'><Check className='me-2 inline-flex text-[#6AC0E6]' /> Impact prediction engine</li>
                            <li className='text-[16px] mb-[10px] bg-[#6AC0E6]
                                font-[600] bg-clip-text text-transparent'><Check className='me-2 inline-flex text-[#6AC0E6]' />Cross-system intelligence</li>
                        </ul>
                        <Button
                            btnText="Learn More"
                            className=
                            "text-[16px]  min-w-[100%] mt-[30px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                            href="/context-intelligence-platform"
                            icon="CircleArrowOutUpRight"
                            iconSize="20px"
                        //   useCommonSvg="true"
                        />
                       </div>
                    </div>
                </div>
            </section>
            <section id='teamsection' className='py-[90px] rounded-t-[50px] md:rounded-t-[100px] lg:px-0 px-5 rounded-b-0  mt-[-100px] bg-[#fff] '>
                {/* <SectionHeading
                    title="Engineering the Future"
                    subtitle='Founder'
                    titleClassName="text-[#000]"
                    subtitleClassName=" text-[#626161] max-w-[100%]"
                />
              <div className="grid grid-cols-12 justify-center gap-6 mt-[60px] max-w-[1120px] mx-auto">
                <div className="md:col-span-3 col-span-12">
                    <img src="/founder.png" className='md:h-[373px] w-full object-cover rounded-[16px]' alt="" />
                </div>
                <div className="md:col-span-9 col-span-12">
                    <div className='flex justify-between items-center'>
                    <h3 className='text-[#015190] md:text-[36px] text-[28px] font-primary font-[600]'>Sucharitha Pati</h3>
                    <ul className='flex gap-3 items-center'>
                        <li><a className='text-[#015190]'><X/></a></li>
                        <li><a className='text-[#015190]'><Linkedin/></a></li>
                    </ul>
                    </div>
                    <p className='text-[#1E1E1E] text-[16px] font-secondary font-[500]'>Founder & CEO</p>
                    <p className='text-[#1E1E1E] text-[16px] font-secondary font-[500] mt-6'>Sucharitha is a senior engineering and technology leader with over 20 years of experience guiding enterprise-scale AI strategy, operating models, and governance across Fortune 500 companies and highly regulated sectors, including finance, healthcare, travel, and supply chain.</p>
                    <p className='text-[#1E1E1E] text-[16px] font-secondary font-[500] mt-6'>Sucharitha brings a proven ability to align advanced technology initiatives with business priorities, delivering scalable platforms, durable operating frameworks, and measurable enterprise value.</p>
                 </div>
                    
                </div>
                 

            </section>
            <section className='py-[90px] rounded-t-[50px] md:rounded-t-[100px] lg:px-0 px-5 rounded-b-0  mt-[-100px] bg-[#fff] '> */}
                 <SectionHeading
                    title="Built by visionaries"
                    subtitle='A team of industry veterans and innovators dedicated to reshaping software quality'
                    titleClassName="text-[#015190]"
                    subtitleClassName=" text-[#626161] max-w-[100%]"
                />
              <div className="grid grid-cols-12 justify-center gap-6 mt-[60px] max-w-[1110px] mx-auto">
               {members?.map((item) => (
  <div
    key={item._id}
    className="col-span-12 md:col-span-3 py-5 px-7  transition-all duration-300 border border-[1px] border-[#D9D9D9] hover:shadow-[0_0_40px_2px_#42abdf40] rounded-[24px]"
  >
    <img
      src={item.image}
      alt={item.name}
      className="h-[100px] w-[100px] object-cover rounded-[50%]"
    />

    <h2 className="font-primary mt-[35px] font-[600] text-[#015190] text-[24px]">
      {item.name}
    </h2>

    <h3 className="text-[#1E1E1E] text-[18px] font-secondary font-[500]">
      {item.designation}
    </h3>
  </div>
))}
                </div>
                 

            </section>
            <section className='py-[80px]  pb-[150px] rounded-t-[50px] md:rounded-t-[100px] rounded-b-0 bg-[linear-gradient(360deg,#000000_0%,#042539_100%)]

'>
                       {/* <p className='font-secondary font-[500] text-[18px] text-[#fff] text-center mb-[10px]'>Our Values</p> */}
                <SectionHeading
                    title="What drives Us"
                    // subtitle='Purpose-built platforms that work independently or together to transform <br/> your testing and intelligence capabilities'
                    titleClassName="sm:text-[48px] text-[#fff]"
                    subtitleClassName=" sm:text-[16px] text-[#C6C6C6] max-w-[950px]"
                />
                <div className="">
                    <UspServices data={Drive_CONFIG}/>
                </div>

            </section>
                <section className='py-[100px] pb-[200px] rounded-t-[50px] rounded-b-0  mt-[-100px] bg-[#fff] px-5 '>
                    {/* <p className='font-secondary font-[600] text-[18px] text-[#626161] text-center mb-[10px]'>Backed Up</p> */}
                <SectionHeading
                    title="World-class investors"
                    subtitle='Supported by leading venture capital firms and strategic partners who share our vision'
                    titleClassName="sm:text-[40px] text-[#015190]"
                    subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[100%]"
                />
                <div className="grid grid-cols-12 gap-6 mt-[60px] max-w-[880px] lg:px-0 mx-auto">
                    <div className="col-span-12 md:col-span-12 border border-[#C6C6C6] rounded-[16px] border-[1px]">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-3 text-center py-8">
                                <h2 className='text-[#015190] text-[24px] font-primary'>Sequoia</h2>
                                <p className='text-[#626161] text-[16px]'>Lead investor</p>
                            </div>
                            <div className="col-span-12 md:col-span-3 text-center py-8">
                                <h2 className='text-[#015190] text-[24px] font-primary'>a16z</h2>
                                <p className='text-[#626161] text-[16px]'>Series a</p>
                            </div>
                            <div className="col-span-12 md:col-span-3 text-center py-8">
                                <h2 className='text-[#015190] text-[24px] font-primary'>Accel</h2>
                                <p className='text-[#626161] text-[16px]'>Strategic partner</p>
                            </div>
                            <div className="col-span-12 md:col-span-3 text-center py-8">
                                <h2 className='text-[#015190] text-[24px] font-primary'>Index</h2>
                                <p className='text-[#626161] text-[16px]'>Growth stage</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-12 md:col-span-4 text-center py-8  border rounded-[16px] border-[#C6C6C6] border-[1px]">
                   <h2 className='text-[#015190] text-[24px] font-primary'>$45M</h2>
                                <p className='text-[#626161] text-[16px]'>Total funding raised</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 text-center py-8  border rounded-[16px] border-[#C6C6C6] border-[1px]">
                   <h2 className='text-[#015190] text-[24px] font-primary'>2020</h2>
                                <p className='text-[#626161] text-[16px]'>Year founded</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 text-center py-8  border rounded-[16px] border-[#C6C6C6] border-[1px]">
                   <h2 className='text-[#015190] text-[24px] font-primary'>120+</h2>
                                <p className='text-[#626161] text-[16px]'>Team members</p>
                    </div>
                  
                </div>
                 

            </section>
            {/* <div> */}
                <CtaSection wrapperClassName="mt-[-100px]" {...Company_CTA_CONFIG} />
            {/* </div> */}
            <FooterSection/>

        </>
    )
}

export default CompanyPage