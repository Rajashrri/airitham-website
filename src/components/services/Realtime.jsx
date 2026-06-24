import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";

const Realtime = ({ data }) => {
  const { title, subtitle, cards } = data;
  return (
    <section className="relative max-w-6xl  mx-auto py-24 px-5 md:px-0 pb-0">

      {/* Section Heading */}
      <SectionHeading
        titleClassName="text-[#015190] capitalize"
        title={title}
        subtitleClassName="text-dark"
        subtitle={subtitle}
        wrapperClassName="w-full sm:max-w-[909px] mx-auto mb-15"
      />

      {/* Center Line */}
      {/* <div className="absolute left-1/2 top-[200px] h-[calc(100%-200px)] w-[2px] bg-[#F2B6BE] -translate-x-1/2" /> */}

      <div className="flex flex-col lg:gap-[100px] gap-[100px] max-w-[700px] scale-[0.9] mt-[-60px] m-auto py-[80px] bg-[#E9F6FB] shadow-[0px_0px_8px_4px_#01519080] rounded-[24px] px-[18px] lg:px-[0]  relative">
        {cards.map((step, index) => (
          <div key={step.id} className={`relative border bg-[#fff] border-[1px] border-[#D9D9D9] px-[50px] rounded-[16px] py-[10px] lg:w-[450px] m-auto  flex flex-col justify-center items-start  justify-center`}>
              {/* CENTER NODE */}
            <div className={`absolute top-[-20px] z-10 flex flex-col items-center  left-0 w-full   m-auto  `}>
              <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] text-white text-[14px] font-semibold">
                {step.id}
              </div>

            

            </div>

            <div className=" m-auto text-left relative">
          
              <h3 className="font-primary mt-3  text-center font-semibold text-[20px] text-[#015190] relative " dangerouslySetInnerHTML={{ __html: step.title }} />
              <p className="mt-2  lg:w-[350px] text-center text-[16px] text-[#626161] leading-[1.6]">
                {step.description}
              </p>
               {/* Arrow */}
              {index !== cards.length - 1 && (
                <div className=" m-auto mt-4 relative">
                  <span className="absolute bottom-[-20px] left-[51.2%] -translate-x-1/1 w-3 h-3  " >
                  <svg width="18" height="64" viewBox="0 0 18 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.66406 1.5C6.16406 1.5 4.16406 3.5 4.16406 6C4.16406 8.5 6.16406 10.5 8.66406 10.5C11.1641 10.5 13.1641 8.5 13.1641 6C13.1641 3.5 11.1641 1.5 8.66406 1.5Z" fill="white"/>
                    <path d="M8.66406 64L17.3243 49H0.0038085L8.66406 64ZM4.16406 6H5.66406C5.66406 4.32843 6.99249 3 8.66406 3V1.5V0C5.33564 0 2.66406 2.67157 2.66406 6H4.16406ZM8.66406 1.5V3C10.3356 3 11.6641 4.32843 11.6641 6H13.1641H14.6641C14.6641 2.67157 11.9925 0 8.66406 0V1.5ZM13.1641 6H11.6641C11.6641 7.67157 10.3356 9 8.66406 9V10.5V12C11.9925 12 14.6641 9.32843 14.6641 6H13.1641ZM8.66406 10.5V9C6.99249 9 5.66406 7.67157 5.66406 6H4.16406H2.66406C2.66406 9.32843 5.33564 12 8.66406 12V10.5ZM8.66406 10.5H7.16406V50.5H8.66406H10.1641V10.5H8.66406Z" fill="url(#paint0_linear_2510_1093)"/>
                    <defs>
                    <linearGradient id="paint0_linear_2510_1093" x1="4.1667" y1="32.758" x2="13.1641" y2="32.758" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6AC0E6"/>
                    <stop offset="1" stop-color="#015190"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    </span>
                </div>
              )}
            </div>
          


          </div>
        ))}
      </div>
    </section>
  )
}

export default Realtime