import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";

const TimeLine = ({ data }) => {
      const { title, subtitle, cards } = data;
  return (
     <section className="relative max-w-6xl mx-auto py-24 pb-0">
      
      {/* Section Heading */}
      <SectionHeading
        titleClassName="text-dark "
        title={title}
        subtitleClassName="text-dark"
        subtitle={subtitle}
        wrapperClassName="w-full sm:max-w-[909px] mx-auto mb-20"
      />

      {/* Center Line */}
      {/* <div className="absolute left-1/2 top-[200px] h-[calc(100%-200px)] w-[2px] bg-[#F2B6BE] -translate-x-1/2" /> */}

      <div className="flex flex-col lg:gap-5 gap-[50px] px-[18px] lg:px-[0]  relative">
        {cards.map((step, index) => (
          <div key={step.id}   className={`relative flex items-start ${
                step.align === "left" ? "lg:justify-start" : "lg:justify-end"
            } justify-center`}>
            
            {/* LEFT CONTENT */}
            {step.align === "left" && (
              <div className="lg:w-[40%] w-[100%]  lg:pr-10 text-right ">
                <div className="flex lg:hidden items-center m-auto justify-center w-[64px] h-[64px] rounded-full bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] text-white text-[24px] font-semibold">
                {step.id}
              </div>
              {step.title  && (

                <h3 dangerouslySetInnerHTML={{ __html:step.title }}  className="font-primary mt-3 text-center lg:text-end font-semibold text-[20px] sm:text-[24px] text-[#015190]  relative before:hidden  lg:before:block before:content-[''] before:absolute before:right-[-24%] before:top-1/2 before:w-[80px] before:h-[3px] before:bg-[#D9D9D9]"/>
              )

              }
               
                <p className="mt-2 lg:w-[350px] text-center lg:text-end  lg:m-auto mr-0 text-[16px] sm:text-[20px] text-[#626161] leading-[1.6]">
                  {step.description}
                </p>
              </div>
            )}

            {/* CENTER NODE */}
            <div className={`relative z-10 lg:flex flex-col items-center hidden  ${    step.align === "left" ? "lg:right-[-83px]" : "lg:left-[-83px]"}`}>
              <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] text-white text-[24px] font-semibold">
                {step.id}
              </div>

              {/* Arrow */}
              {index !== cards.length - 1 && (
                <div className="w-[3px] h-25 mt-4 bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] relative">
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 border-r-3 border-b-3 border-[#015190] rotate-45" />
                </div>
              )}
            </div>

            {/* RIGHT CONTENT */}
            {step.align === "right" && (
              <div className="lg:w-[40%] w-[100%]  lg:pl-10 text-left relative">
                <div className="flex lg:hidden items-center m-auto justify-center w-[64px] h-[64px] rounded-full bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] text-white text-[24px] font-semibold">
                {step.id}
              </div>
                <h3 className="font-primary mt-3 lg:text-left text-center font-semibold text-[20px] sm:text-[24px] text-[#015190] relative before:content-[''] before:absolute before:left-[-24%] before:top-1/2 before:w-[80px] before:h-[3px] before:bg-[#D9D9D9]" dangerouslySetInnerHTML={{ __html:step.title }} />
                <p className="mt-2  lg:w-[350px] lg:text-left text-center text-[16px] sm:text-[20px] text-[#626161] leading-[1.6]">
                  {step.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TimeLine