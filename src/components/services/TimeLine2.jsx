import React from "react";
import SectionHeading from "@/components/common/SectionHeading";

const TimeLine2 = ({ data }) => {
    const { title, subtitle, cards } = data;
    return (
        <section className="relative md:rounded-[100px] rounded-[50px] z-12 md:py-28 pt-[90px] bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] pb-[200px]">
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

                <div className="flex px-5 flex-col md:gap-[140px] gap-[100px] relative">
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
                                <div className="absolute md:block hidden  md:left-1/2 left-auto md:-translate-x-1/2 -translate-x-0 z-10">
                                    <div className="w-[64px] h-[64px] rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] flex items-center justify-center text-[24px] font-semibold text-white">
                                        {step.id}
                                    </div>

                                    <div className={`${index === cards.length - 1 ? "hidden" : "md:flex hidden justify-center mt-4"} `}>
                                        <svg width="12" height="209" viewBox="0 0 12 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.77344 209L11.5469 199H-6.53267e-05L5.77344 209ZM5.77344 0H4.77344V200H5.77344H6.77344V0H5.77344Z" fill="#D9D9D9" fill-opacity="0.5" />
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