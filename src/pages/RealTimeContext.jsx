import React from 'react'
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import FooterSection from "@/components/home/FooterSection"; 
import UspServices from '../components/services/UspServices';
import { REAL_TIME_CONTEXT_HEADER} from "@/config/servicesConfig";
import { CORE_MODULE_CONFIG , TIMELINE_SECTION_CONFIG, KEY_FEATURES_CONFIG} from "@/config/servicesConfig";
import Realtime from '../components/services/Realtime';

const RealTimeContext = () => {
  return (
    <>
      <Navbar
        wrapperClassName="fixed top-0 left-0"
        disableScrollHide={false}
        linkClassName="text-dark"
        iconClassName="text-dark"
      />
      <MainBanner  data={REAL_TIME_CONTEXT_HEADER} />
      <div className="imgbox  h-[360px] w-[360px] lg:w-[794px] overflow-hidden bg-[#D9D9D9] rounded-[24px] m-auto mt-[60px] mb-[30px]">
         <img className="w-full" src="/automation/Real-time-Context-Distribution-Across-Federated-Systems.webp" alt="" />
      </div>
      <UspServices data={CORE_MODULE_CONFIG} />
      <Realtime data={TIMELINE_SECTION_CONFIG} />
      <UspServices data={KEY_FEATURES_CONFIG} />
         <FooterSection />

    </>
  )
}

export default RealTimeContext