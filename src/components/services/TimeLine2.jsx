import React from "react";
import SectionHeading from "@/components/common/SectionHeading";

const TimeLine2 = ({ data }) => {
    const { title, subtitle, cards } = data;
    return (
        <section className="relative md:rounded-[100px] rounded-[50px] z-12 md:py-28 pt-[90px] bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] md:pb-[200px] pb-[80px]">
            <div className="relative max-w-[1200px] mx-auto">

                <SectionHeading
                    title={title}
                    subtitle={subtitle}
                    titleClassName="text-white"
                    subtitleClassName="text-gray-400"
                    wrapperClassName="text-center mb-24"
                />

                {/* CENTER LINE */}
                {/* <div className="absolute left-1/2 top-[260px] h-[calc(100%-260px)] w-px bg-white/20 -translate-x-1/2" /> */}

                <div className="flex px-5 flex-col md:gap-[140px] gap-[30px] relative">
                    {cards.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <div
                                className={`relative h-[100%] flex md:flex-row gap-5 md:gap-0 flex-col items-start ${step.align === "left"
                                    ? "md:justify-start justify-center"
                                    : "md:justify-end justify-center"
                                    }`}
                            >
                                {/* LEFT CONTENT */}
                                {step.align === "left" && (
                                    <>
                              
                        
                                            <div className="w-[64px] h-[64px] m-auto mb-4 md:hidden block rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] flex items-center justify-center text-[24px] font-semibold text-white">
                                                {step.id}
                                            </div>

                                  
                                        <div className="md:w-[45%] w-[100%] md:text-right text-center md:pr-5 pr-0">
                                            <h3 className="text-[24px] font-[600] font-primary text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-400  text-[20px] leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                        </>
                          

                                )}

                                {/* CENTER NODE */}
                                <div className="md:absolute relative order-1 md:w-fit w-full   md:left-1/2 left-auto md:-translate-x-1/2 -translate-x-0 z-10">
                                    <div className="w-[64px] md:block hidden h-[64px] rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] flex items-center justify-center text-[24px] font-semibold text-white">
                                        {step.id}
                                    </div>

                                    <div className={`${index === cards.length - 1 ? "hidden" : "flex justify-center mt-4"} `}>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="213" viewBox="0 0 12 213" fill="none">
  <path d="M5.77344 1C4.10677 1 2.77344 2.33333 2.77344 4C2.77344 5.66667 4.10677 7 5.77344 7C7.4401 7 8.77344 5.66667 8.77344 4C8.77344 2.33333 7.4401 1 5.77344 1Z" fill="white"/>
  <path d="M5.77344 213L11.5469 203H-6.50883e-05L5.77344 213ZM2.77344 4H3.77344C3.77344 2.88562 4.65906 2 5.77344 2V1V0C3.55449 0 1.77344 1.78105 1.77344 4H2.77344ZM5.77344 1V2C6.88782 2 7.77344 2.88562 7.77344 4H8.77344H9.77344C9.77344 1.78105 7.99239 0 5.77344 0V1ZM8.77344 4H7.77344C7.77344 5.11438 6.88782 6 5.77344 6V7V8C7.99239 8 9.77344 6.21895 9.77344 4H8.77344ZM5.77344 7V6C4.65906 6 3.77344 5.11438 3.77344 4H2.77344H1.77344C1.77344 6.21895 3.55449 8 5.77344 8V7ZM5.77344 7H4.77344V204H5.77344H6.77344V7H5.77344Z" fill="#6AC0E6"/>
</svg>

                                    </div>
                                </div>

                                {/* RIGHT CONTENT */}
                                {step.align === "right" && (
                                    <>
                                        <div className="w-[64px] h-[64px] m-auto mb-4 md:hidden block rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] flex items-center justify-center text-[24px] font-semibold text-white">
                                                {step.id}
                                            </div>
                                
                                         <div className="md:w-[45%] w-[100%] md:text-left text-center md:pl-5 pl-0">
                                            <h3 className="text-[24px] font-[600] font-primary text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-400  text-[20px] leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </>


                                )}

                                {/* CARD BLOCK */}
                                {step.card && (
                                    <div
                                        className={`md:absolute  relative ${step.align === "left"
                                            ? "md:right-[12%] right-0"
                                            : "md:left-[12%] left-0"
                                            } top-0 md:w-[380px] w-[100%] border border-[1px] border-[#C6C6C6] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] rounded-[16px] p-4 backdrop-blur`}
                                    >
                                        {step.card}
                                    </div>
                                )}
                            </div>

                            {/* CROSS DIVIDER (between step 2 & 3 only) */}
                            {/* {index === 1 && (
                <div className="relative h-16">
                  <div className="absolute left-1/2 top-1/2 w-24 border-t border-dashed border-cyan-400/70 -translate-x-1/2" />
                  <div className="absolute left-1/2 top-1/2 h-24 border-l border-dashed border-cyan-400/70 -translate-x-1/2 -translate-y-1/2" />
                </div>
              )} */}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TimeLine2