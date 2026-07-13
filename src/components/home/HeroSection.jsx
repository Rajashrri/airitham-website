
import Button from "../ui/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";

export default function HeroHeader() {

  const swiperRef = useRef(null);

  return (
    <header className="w-full text-white min-h-[904px]  rounded-b-[50px]  sm:rounded-b-[100px] overflow-hidden relative">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .hero-swiper .swiper-pagination {
            bottom: 30px !important;
          }
          
        `,
        }}
      />

      <Swiper
   loop={false}
  speed={800}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  modules={[Pagination, Autoplay]}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  className="hero-swiper w-full h-[904px]"
      >
        {/* Slide 2 */}

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/home/carousel/slider1.png")',
            }}
          >
            <div className="absolute inset-0 bg-black/5" />

            <div className="relative text-center px-4 lg:px-0  pt-[154px] md:pt-[220px]  z-10" 
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}>
              <h1 class="font-primary text-[40px] mx-auto  sm:w-fit leading-none sm:text-[58px] mb-[18px] tracking-[0.02em]">
                Enterprise Intelligence... Reimagined
              </h1>

              <p class="font-secondary font-medium text-[18px] leading-[1.4] tracking-[2%] text-center  sm:max-w-[750px] mx-auto text-[#C6C6C6]">
                Airithm is building the infrastructure layer for the agentic era with context intelligence to run agents reliably and an AI test platform to prove they are secure, aligned, and ready for production
                </p>

              <div className="flex mx-auto   flex-col-reverse   sm:flex-row justify-center items-stretch gap-4 mt-[30px] max-w-[300px] sm:max-w-full">
                <div className=" overflow-hidden   rounded-lg  p-0.5">
                  <Button
                      btnText="Join Partner Program"
                      className="w-full border border-[2px] border-[#015190] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white"
                      iconSize="20"
                       icon="CircleArrowOutUpRight"
                      useCommonSvg="true"
                     
                    />

                </div>

                <Button
                  btnText="Explore Products"
                  className="text-[16px]     bg-primary-gradient text-white"
                  iconSize="20"
                  icon="CircleArrowOutUpRight"
                   href="/ai-automation"
                  
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/home/carousel/slider2.webp")',
            }}
          >
            <div className="absolute inset-0 bg-black/5" />

            <div className="relative text-center px-4 lg:px-0  pt-[154px] md:pt-[220px]  z-10" 
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}>
              <h1 class="font-primary text-[40px] mx-auto  sm:w-fit leading-none sm:text-[58px] mb-[18px] tracking-[0.02em]">
              The Intelligence Control Plane <br /> for the Agentic Enterprise
              </h1>

              <p class="font-secondary font-medium text-[18px] leading-[1.4] tracking-[2%] text-center  sm:max-w-[750px] mx-auto text-[#C6C6C6]">
               A unified control plane that governs context, coordinates intelligent systems, and validates behavior across enterprise-scale agentic AI
              </p>

              <div className="flex mx-auto   flex-col-reverse   sm:flex-row justify-center items-stretch gap-4 mt-[30px] max-w-[300px] sm:max-w-full">
                <div className=" overflow-hidden   rounded-lg  p-0.5">
                  <Button
                      btnText=" Explore Platforms "
                      className="w-full border border-[2px] border-[#015190] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white"
                      iconSize="20"
                       icon="CircleArrowOutUpRight"
                      href="/agentic-architecture"
                      useCommonSvg="true"
                    />

                </div>

                <Button
                  btnText="Request Demo"
                  className="text-[16px]     bg-primary-gradient text-white"
                  iconSize="20"
                  href="/demo"
                  icon="CircleArrowOutUpRight"
                  
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

          <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/home/carousel/slider3.webp")',
            }}
          >
            <div className="absolute inset-0 bg-black/5" />

            <div className="relative text-center px-4 lg:px-0  pt-[154px] md:pt-[220px]  z-10" 
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}>
              <h1 class="font-primary text-[40px] mx-auto  sm:w-fit leading-none sm:text-[58px] mb-[18px] tracking-[0.02em]">
             Agentic Testing for Enterprise <br /> and AI Applications
              </h1>

              <p class="font-secondary font-medium text-[18px] leading-[1.4] tracking-[2%] text-center  sm:max-w-[750px] mx-auto text-[#C6C6C6]">
   A patent-pending unified platform that uses intelligent agents to test, evaluate, and validate modern software and AI applications autonomously
              </p>

              <div className="flex mx-auto   flex-col-reverse   sm:flex-row justify-center items-stretch gap-4 mt-[30px] max-w-[300px] sm:max-w-full">
                <div className="overflow-hidden   rounded-lg  p-0.5">
                  <Button
                      btnText="Explore AI Test Platform"
                      className="w-full border border-[2px] border-[#015190] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white"
                      iconSize="20"
                      href="/ai-automation"
                      useCommonSvg="true"
                       icon="CircleArrowOutUpRight"
                    />

                </div>

                <Button
                  btnText="Request Demo"
                  className="text-[16px]     bg-primary-gradient text-white"
                  iconSize="20"
                   href="/demo"
                  icon="CircleArrowOutUpRight"
                  
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

          <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/home/carousel/slider1.png")',
            }}
          >
            <div className="absolute inset-0 bg-black/5" />

            <div className="relative text-center px-4 lg:px-0  pt-[154px] md:pt-[220px]  z-10" 
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}>
              <h1 class="font-primary text-[40px] mx-auto  sm:w-fit leading-none sm:text-[58px] mb-[18px] tracking-[0.02em]">
           Context Intelligence <br /> for Reliable Autonomous AI
              </h1>

              <p class="font-secondary font-medium text-[18px] leading-[1.4] tracking-[2%] text-center  sm:max-w-[750px] mx-auto text-[#C6C6C6]">
          Built on patent-pending technology for governed memory, continuity, and shared context across enterprise intelligent systems
              </p>

              <div className="flex mx-auto   flex-col-reverse   sm:flex-row justify-center items-stretch gap-4 mt-[30px] max-w-[300px] sm:max-w-full">
                <div className=" overflow-hidden   rounded-lg  p-0.5">
                  <Button
                      btnText="Explore Context Intelligence"
                      className="w-full border border-[2px] border-[#015190] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white"
                      iconSize="20"
                       icon="CircleArrowOutUpRight"
                      useCommonSvg="true"
                       href="/context-intelligence-platform"
                    />

                </div>

                <Button
                  btnText="Request Demo"
                  className="text-[16px]     bg-primary-gradient text-white"
                  iconSize="20"
                  icon="CircleArrowOutUpRight"
                    href="/demo"
                  
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

             <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/home/carousel/slider2.webp")',
            }}
          >
            <div className="absolute inset-0 bg-black/5" />

            <div className="relative text-center px-4 lg:px-0  pt-[154px] md:pt-[220px]  z-10" 
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}>
              <h1 class="font-primary text-[40px] mx-auto  sm:w-fit leading-none sm:text-[58px] mb-[30px] tracking-[0.02em]">
                Two Platforms. <br/> One Intelligence Loop. 
              </h1>

              <p class="font-secondary font-medium text-[18px] leading-[1.4] tracking-[2%] text-center  sm:max-w-[750px] mx-auto text-[#C6C6C6]">
               Independently powerful platforms that can exchange governed intelligence signals to continuously improve trust, quality, and reliability
              </p>

              <div className="flex mx-auto flex-col-reverse sm:flex-row justify-center items-stretch gap-4 mt-[30px] max-w-[100%]">
                <div className="overflow-hidden   rounded-lg  p-0.5">
                  <Button
                      btnText="Explore the Architecture"
                      className="w-full border border-[2px] border-[#015190] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white"
                      iconSize="20"
                       icon="CircleArrowOutUpRight"
                      href="/system-architecture-overview"
                      useCommonSvg="true"
                    />

                </div>

                <Button
                  btnText="See How the Platforms Work Together"
                  className="text-[16px]     bg-primary-gradient text-white"
                  iconSize="20"
                  href="/two-platforms-one-intelligence-loop"
                  icon="CircleArrowOutUpRight"
                  
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

            <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/home/carousel/slider3.webp")',
            }}
          >
            <div className="absolute inset-0 bg-black/5" />

            <div className="relative text-center px-4 lg:px-0  pt-[154px] md:pt-[220px]  z-10" 
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}>
              <h1 class="font-primary text-[40px] mx-auto  sm:w-fit leading-none sm:text-[58px] mb-[18px] tracking-[0.02em]">
               The Enterprise Intelligence Loop
              </h1>

              <p class="font-secondary font-medium text-[18px] leading-[1.4] tracking-[2%] text-center  sm:max-w-[750px] mx-auto text-[#C6C6C6]">
              A unified architecture that connects context, control, and continuous validation to power governed, reliable autonomous ai across the agentic enterprise
              </p>

              <div className="flex mx-auto   flex-col-reverse   sm:flex-row justify-center items-stretch gap-4 mt-[30px] max-w-[300px] sm:max-w-full">
                <div className=" overflow-hidden   rounded-lg  p-0.5">
                  <Button
                      btnText="Explore Context Intelligence"
                      className="w-full font-primary  border border-[2px] border-[#015190] font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white"
                      iconSize="20"
                       icon="CircleArrowOutUpRight"
                      href="/"
                      useCommonSvg="true"
                    />

                </div>

                <Button
                  btnText="Request Demo"
                  className="text-[16px]     bg-primary-gradient text-white"
                  iconSize="20"
                  href="/demo"
                  icon="CircleArrowOutUpRight"
                  
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
}
