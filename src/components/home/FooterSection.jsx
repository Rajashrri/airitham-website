import React from "react";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();
const FooterSection = () => {
  return (
    <footer
      className="w-full text-white"
      style={{
        background: "linear-gradient(180deg, #042539 0%, #000000 100%)",
      }}
    >
      <div className="px-5 py-12">
        
        {/* MAIN WRAPPER */}
        <div className=" flex justify-between flex-wrap lg:flex-nowrap ">
          
          {/* LEFT TEXT BLOCK */}
          {/* <div className="text-inter-16 leading-[1.2]  max-w-[247px] flex-shrink-0">
           AIRITHM powers enterprise-grade autonomous testing and intelligent platforms for confident software releases.
          </div> */}

          {/* RIGHT NAVIGATION BLOCK */}
          <div className="flex w-[100%] flex-wrap md:justify-between px-6 gap-10 text-[14px] leading-[22px]">
            
            {/* Column 1 */}
            <div className="flex  flex-col gap-4 ">
              <h3 className="text-inter-20 font-semibold leading-[1.2]">  <Link onClick={() => window.scrollTo(0, 0)} to="/ai-automation">AI Test Platform</Link></h3>
              <h4 className="text-inter-18  font-semibold leading-[1.2]">
                <Link onClick={() => window.scrollTo(0, 0)} to="/core-test">aiRM.CoreQ</Link>
              </h4>
              <ul className="space-y-3.5 text-inter-16">
                <li> <Link onClick={() => window.scrollTo(0, 0)} to="/intelligent-test-automation" className="flex gap-3">
                  
                    <div>
                      <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">Intelligent Test Automation</h3>

                    </div>
                  </Link></li>
                <li>  <Link onClick={() => window.scrollTo(0, 0)} to="/knowledge-base-creation-from-self-learning" className="flex gap-3 mt-3">
                   
                    <div>
                      <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">Knowledge Base Creation</h3>

                    </div>
                  </Link></li>
                <li> <Link onClick={() => window.scrollTo(0, 0)} to="/how-autonomous-testing-works" className="flex gap-3 mt-3">
                    
                    <div>
                      <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">How Autonomous Testing Works</h3>

                    </div>
                  </Link></li>
        
              </ul>
               <h4 className="text-inter-18 mt-3 font-semibold leading-[1.2]">
               <Link onClick={() => window.scrollTo(0, 0)} to="/neuro-test">aiRM.EvalQ</Link>
              </h4>
              <ul className="space-y-3.5 text-inter-16">
                <li>
                   <Link onClick={() => window.scrollTo(0, 0)} to="/testing-ai-systems-at-interprise-scale" className="flex gap-3">
                  
                    <div>
                      <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">Testing AI Systems at Enterprise Scale</h3>

                    </div>
                  </Link>
                </li>
                <li>    <Link onClick={() => window.scrollTo(0, 0)} to="/llm-based-evaluation" className="flex gap-3 mt-3">
                  
                    <div>
                      <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">LLM Based Evaluation</h3>

                    </div>
                  </Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 ">
              <h4 className="text-inter-20 font-semibold leading-[1.2]">
               <Link onClick={() => window.scrollTo(0, 0)} to="/context-intelligence-platform">aiRM.LumiQ</Link>
              </h4>
              <ul className="space-y-3.5 text-inter-16">
                <li>       <Link onClick={() => window.scrollTo(0, 0)} to="/real-time-context" className="flex gap-3">
                
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">LumiQ Broadcast</h3>
                    {/* <p className="text-[14px] text-[#797979] font-secondary font-[400]">Ensure smooth synchronization of agents and devices with secure, scalable, event-driven AI across organizations.</p> */}
                  </div>
                </Link></li>
                <li>
                    <Link onClick={() => window.scrollTo(0, 0)} to='/context-capsules' className="flex gap-3 mt-3">
                 
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">LumiQ Capsules</h3>
                    {/* <p className="text-[14px] text-[#797979] font-secondary font-[400]">Portable, scoped context units with persona, tools, and time-bound memory for AIRITHM’s Agentic Memory Engine</p> */}
                  </div>
                </Link>
                </li>
                <li>                <Link onClick={() => window.scrollTo(0, 0)} to="/declarative-context-protocol" className="flex gap-3 mt-3">
                  
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">LumiQ Protocol</h3>
                    {/* <p className="text-[14px] text-[#797979] font-secondary font-[400]">Enterprise-grade governance framework for multiagent AI systems. </p> */}
                  </div>
                </Link></li>
                <li><Link onClick={() => window.scrollTo(0, 0)} to='/reflective-memory' className="flex gap-3 mt-3">
            
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">LumiQ Reflect</h3>
                    {/* <p className="text-[14px] text-[#797979] font-secondary font-[400]">An AI that evolves through self-analysis, reflection, and intelligent adaptation.</p> */}
                  </div>
                </Link></li>
                <li>    <Link onClick={() => window.scrollTo(0, 0)} to="/temporal-context-memory" className="flex gap-3 mt-3">
                  
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">LumiQ Memory</h3>
                    {/* <p className="text-[14px] text-[#797979] font-secondary font-[400]">Dual-tier storage enhances memory architecture for better contextual understanding and retrieval performance.</p> */}
                  </div>
                </Link></li>
                <li> <Link onClick={() => window.scrollTo(0, 0)} to="/hybrid-attention-memory-network" className="flex gap-3 mt-3">
               
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">LumiQ Nexus</h3>
                    {/* <p className="text-[14px] text-[#797979] font-secondary font-[400]">Revolutionary AI routing engine with policy-gated multi-head attention mechanism.</p> */}
                  </div>
                </Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 ">
              <h4 className="text-inter-20 font-semibold leading-[1.2]">
                <Link onClick={() => window.scrollTo(0, 0)} to="">AI Governance</Link>
              </h4>
              <ul className="space-y-3.5 text-inter-16">
                <li> <Link onClick={() => window.scrollTo(0, 0)} className="flex gap-3" to="/ci-cd-devops-integration">
                
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">CI/CD & Devops Integration</h3>

                  </div>
                </Link></li>
                <li>      <Link onClick={() => window.scrollTo(0, 0)} className="flex gap-3 mt-3" to="/two-platforms-one-intelligence-loop">
                  
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">Two Platforms.
                      One Intelligence Loop</h3>

                  </div>
                </Link></li>
                <li> <Link onClick={() => window.scrollTo(0, 0)} className="flex gap-3  mt-3" to="/security">
              
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">Security</h3>

                  </div>
                </Link></li>
              </ul>

               <h4 className="text-inter-20 font-semibold leading-[1.2] mt-3">
              <Link onClick={() => window.scrollTo(0, 0)} to="/platform-capabilities">Platform Capabilities</Link>
              </h4>
              <ul>
                <li>
                          <Link onClick={() => window.scrollTo(0, 0)} className="flex gap-3 " to="/platform-deployment">
                
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">Platform Deployment</h3>

                  </div>
                </Link>
                </li>
                <li>
                   <Link onClick={() => window.scrollTo(0, 0)} className="flex gap-3 mt-3" to="/platform-integrations">
              
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">Platform Integrations</h3>

                  </div>
                </Link>
                </li>
                <li>
                          <Link onClick={() => window.scrollTo(0, 0)} className="flex gap-3 mt-3" to="/test-analytics-insights">
                  
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#fff]">Test Analytics & Insights</h3>

                  </div>
                </Link>
                </li>
              </ul>
            </div>

              {/* Column 5 */}
            <div className="flex flex-col gap-4 ">
              <h4 className="text-inter-20 font-semibold leading-[1.2]">
                <Link onClick={() => window.scrollTo(0, 0)} to="/resources">Resources</Link>
              </h4>
              <ul className="space-y-3.5 text-inter-16 text-white/90">
                <li><Link onClick={() => window.scrollTo(0, 0)} to="/blog">Blog</Link></li>
                <li><Link onClick={() => window.scrollTo(0, 0)} to="/resources">Whitepapers</Link></li>
                <li><Link onClick={() => window.scrollTo(0, 0)} to="/resources">Case Studies</Link></li>
                <li><Link onClick={() => window.scrollTo(0, 0)} to="/resources">Benchmarks</Link></li>
                <li><Link onClick={() => window.scrollTo(0, 0)} to="/resources">Webinars & Events</Link></li>
                <li><Link onClick={() => window.scrollTo(0, 0)} to="/resources">FAQs</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-4 ">
              <h4 className="text-inter-20 font-semibold leading-[1.2]">
                Quick Link
              </h4>
              <ul className="space-y-3.5 text-inter-16">
                <li>          <Link onClick={() => window.scrollTo(0, 0)}
                  to="/company"
                  className="w-full flex justify-between items-center"
                >
                
                    Company
                  


                </Link></li>
                <li> <Link onClick={() => window.scrollTo(0, 0)}
                  to="/pricing"

                  className="w-full flex justify-between items-center"
                >
                 
                    Pricing
           


                </Link></li>
                <li>  <Link onClick={() => window.scrollTo(0, 0)}
                  to="/contact-us"

                  className="w-full flex justify-between items-center"
                >
                
                    Contact
                


                </Link></li>
                <li><Link onClick={() => window.scrollTo(0, 0)}
                  to="/demo"

                  className="w-full flex justify-between items-center"
                >
                
                    Book A Demo
                


                </Link></li>
                
              </ul>
            </div>

          
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="max-w-[1440px] mx-auto mt-[60px] text-[#FFF9F9] text-[14px]">
          Copyright © {year} AIRITHM. All Rights Reserved. 
        </div>
      </div>

      {/* SVG WAVE */}
      <div className="w-full overflow-hidden">
        <img
          src="./svg/footer-airithm-logo.svg"
          alt="footer shape"
          className="w-full"
        />
      </div>
    </footer>
  );
};




export default FooterSection;
