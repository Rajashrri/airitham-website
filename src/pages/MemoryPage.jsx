import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection"; 
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import {Memory_HEADER , PLANING_CTA_CONFIG} from "./../config/memoryConfig"

import CtaSection from "@/components/common/CtaSection";
import PlatformSynergy from "../components/services/PlatformSynergy";
import * as LucideIcons from "lucide-react";

const MemoryPage = () => {
  
    const type =[
        {
            id:1,
            title:"Vector memory",
            dis:"Semantic recall powered by high-dimensional embeddings. Retrieve contextually similar information based on meaning rather than exact matches.",
            points:["Semantic similarity search", "Fast retrieval at scale", "Context-aware matching"],
            icon:"VectorSquare"
        },
        {
            id:2,
            title:"Graph memory",
            dis:"Relationships & flows mapped as interconnected knowledge graphs. Understand how concepts, entities, and events relate to each other.",
            points:["Entity relationship mapping", "Multi-hop reasoning", " Flow visualization"],
            icon:"Waypoints"
        },
        {
            id:3,
            title:"Temporal memory",
            dis:"Historical learning that tracks changes over time. Capture evolution, trends, and temporal patterns in your data and interactions.",
            points:["Time-series tracking", "Pattern evolution", "Historical context"],
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
        <section className='py-[150px] text-center rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
   
            <MainBanner data={Memory_HEADER} />
        </section>
       <section className='py-[90px]'>
        <div className="max-w-[1240px] m-auto px-4 sm:px-6">
  <SectionHeading
    title="Memory types"
    subtitle="Three distinct approaches to intelligent context retention."
    titleClassName="sm:text-[48px] text-[#015190]"
    subtitleClassName="sm:text-[16px] text-[#626161]"
  />

  <div className="mt-[40px] flex flex-wrap md:flex-nowrap justify-center gap-4">
    {type.map((item, index) => {
      const Icon = LucideIcons?.[item.icon];
      return (
        <div
          key={index}
          id={index}
          className="md:w-[400px] w-full rounded-2xl space-y-6 border shadow-[0px_12px_12px_0px_#01519017] border-[#E5E5E5] p-5 px-6 flex flex-col"
        >
          {/* Icon */}
          {Icon && <Icon size={24} className="text-[#015190]" />}

          {/* Content */}
          <div className="flex flex-col flex-1">
            <h3 className="text-[24px] font-primary font-[600] tracking-[0.02em] leading-[1.2] text-[#1e1e1e] mb-2">
              {item.title}
            </h3>
            <p className="text-[#626161] text-[16px] font-secondary font-[500]">
              {item.dis}
            </p>

            {/* Points list pushed to bottom */}
            <ul className="mt-auto space-y-2.5 pt-6">
              {item.points?.map((list, i) => (
                <li key={i} className="flex items-center gap-3 text-[#015190]">
                  <img src="/svg/circle-check1.svg" className="w-5 h-5" />
                  <span className="text-base text-[16px] font-normal font-secondary leading-none tracking-[0em]">
                    {list.label || list}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    })}
  </div>
</div>


       </section>
        <section className='py-[90px] px-5 rounded-[50px] md:rounded-[100px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)]'>
            <div className='max-w-[1240px] m-auto '>
                <SectionHeading
                    title="Why graph-rag?"
                    subtitle='Transform how your AI systems understand, remember, and reason about information.'
                    titleClassName=" text-[#fff]"
                    subtitleClassName="  text-[#D9D9D9]"
                />
                <div className="mt-[40px]">
                    <img className='m-auto' src="/topics/why-graph.webp" alt="" />
                </div>
<div className="flex flex-wrap  justify-center gap-4 mt-[40px]">
  {/* Card 1 */}
  <div className=" w-full sm:w-[400px] border-[1px] border-[#D9D9D9] p-5 rounded-[16px]">
    <div className="icon h-[48px] w-[48px] rounded-[4px] flex items-center justify-center bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)]">
      <LucideIcons.ShieldCheck className="text-[#6AC0E6]" />
    </div>
    <h3 className="text-[#fff] text-[24px] font-primary font-[600] mb-[14px] mt-6">
      Reduced hallucinations
    </h3>
   <div>
     <p className="text-[14px] font-secondary text-[#D9D9D9]">
      Ground AI responses in verified, interconnected facts.

      Graph-RAG ensures every answer traces back to concrete relationships and validated data sources, dramatically reducing false or invented information.
    </p>
   </div>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-[400px] border-[1px] border-[#D9D9D9] p-5 rounded-[16px]">
    <div className="icon h-[48px] w-[48px] rounded-[4px] flex items-center justify-center bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)]">
      <LucideIcons.Route className="text-[#6AC0E6]" />
    </div>
    <h3 className="text-[#fff] text-[24px] font-primary font-[600] mb-[14px] mt-6">
      Complete traceability
    </h3>
    <p className="text-[14px] font-secondary text-[#D9D9D9]">
      Follow the reasoning path from question to answer.
      Visualize how information flows through your knowledge graph, making AI decision-making transparent, auditable, and trustworthy for critical applications.
    </p>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-[400px] border-[1px] border-[#D9D9D9] p-5 rounded-[16px]">
    <div className="icon h-[48px] w-[48px] rounded-[4px] flex items-center justify-center bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)]">
      <LucideIcons.Link className="text-[#6AC0E6]" />
    </div>
    <h3 className="text-[#fff] text-[24px] font-primary font-[600] mb-[14px] mt-6">
      Context continuity
    </h3>
    <p className="font-[14px] font-secondary text-[#D9D9D9]">
      Maintain coherent understanding across conversations and sessions.
      Graph-RAG preserves relationships and context over time, enabling your AI to build on previous interactions and evolve its understanding naturally.
    </p>
  </div>
</div>

            </div>
        </section>
        <section className='py-[90px]'>
              <SectionHeading
                title="Technical Advantages"
                // subtitle='Three distinct memory types working together seamlessly'
                titleClassName="sm:text-[48px] text-[#015190]"
                // subtitleClassName=" sm:text-[16px] text-[#626161]"
            />
          <div className="max-w-[1128px] m-auto mt-[80px] flex flex-wrap justify-center gap-4 gap-y-10">
  {/* Card 1 */}
  <div className="w-[250px] sm:w-[280px] md:w-[260px] lg:w-[260px] text-center">
    <div className="rounded-[4px] m-auto bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] h-[50px] w-[50px] flex justify-center items-center">
      <LucideIcons.Zap className="text-[#fff]" />
    </div>
    <h3 className="text-[24px] mt-6 leading-[1.2] text-[#1E1E1E] font-primary font-[600]">
      Fast retrieval
    </h3>
    <p className="text-[#626161] text-[14px] font-secondary font-[500] mt-2">
      Sub-second query <br /> response times
    </p>
  </div>

  {/* Card 2 */}
  <div className="w-[250px] sm:w-[280px] md:w-[260px] lg:w-[260px] text-center">
    <div className="rounded-[4px] m-auto bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] h-[50px] w-[50px] flex justify-center items-center">
      <LucideIcons.Expand className="text-[#fff]" />
    </div>
    <h3 className="text-[24px] mt-6 leading-[1.2] text-[#1E1E1E] font-primary font-[600]">Scalable</h3>
    <p className="text-[#626161] text-[14px] font-secondary font-[500] mt-2">
      Billions of nodes and edges
    </p>
  </div>

  {/* Card 3 */}
  <div className="w-[250px] sm:w-[280px] md:w-[260px] lg:w-[260px] text-center">
    <div className="rounded-[4px] m-auto bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] h-[50px] w-[50px] flex justify-center items-center">
      <LucideIcons.Layers2 className="text-[#fff]" />
    </div>
    <h3 className="text-[24px] leading-[1.2] mt-6 text-[#1E1E1E] font-primary font-[600]">Multi-modal</h3>
    <p className="text-[#626161] text-[14px] font-secondary font-[500] mt-2">
      Text, images, and <br /> structured data
    </p>
  </div>

  {/* Card 4 */}
  <div className="w-[250px] sm:w-[280px] md:w-[260px] lg:w-[260px] text-center">
    <div className="rounded-[4px] m-auto bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] h-[50px] w-[50px] flex justify-center items-center">
      <LucideIcons.Settings className="text-[#fff]" />
    </div>
    <h3 className="text-[24px] leading-[1.2] mt-6 text-[#1E1E1E] font-primary font-[600]">Flexible</h3>
    <p className="text-[#626161] text-[14px] font-secondary font-[500] mt-2">
      Adapt to any domain <br />or use case
    </p>
  </div>
</div>


        </section>
        <CtaSection wrapperClassName="mt-[-100px]" {...PLANING_CTA_CONFIG} />
        <FooterSection/>

    </>
  )
}

export default MemoryPage