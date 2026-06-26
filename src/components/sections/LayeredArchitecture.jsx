import React from "react";
import * as LucideIcons from "lucide-react";
import SectionHeading from "../common/SectionHeading";

import { TWO_AUTOMATION_LAYERS_CONFIG } from "@/config/twoplatformsoneintelligenceloopConfig"

const LayeredArchitecture = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto  max-w-7xl px-5 ">

        <SectionHeading title="Layered Intelligence Architecture" titleClassName=" font-medium    text-[#015190]
" titleSize=" text-[32px]  sm:text-[40px]" subtitle={"Each layer operates independently, but shares signals through governed interfaces."} subtitleClassName="   text-[#626161] text-center
" spacing="space-y-4" />




        <div className=" md:p-12 p-5 mt-8 md:my-[-60px] md:scale-[0.8] shadow-[0px_0px_8px_4px_#01519080] rounded-[24px]"> 
          {TWO_AUTOMATION_LAYERS_CONFIG.map((layer, index) => (
          <div key={layer.level} className="flex  flex-col items-center">
            {/* Layer Card */}
            <div className="w-full rounded-[24px] bg-[#42ABDF40]">
              <div className="md:p-6 p-4">
                {/* Header */}
                <div className="mb-6 rounded-2xl py-4 md:px-5 px-3  bg-white  flex md:flex-row flex-col-reverse md:gap-0 gap-5 items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="rounded-lg size-[50px] flex justify-center items-center bg-[#015190] font-inter font-medium md:text-[24px] text-[22px] leading-[140%] tracking-[0.04em] text-white">
                      {layer.level}
                    </span>
                    <h3 className="font-primary font-medium md:text-[20px] text-[18px] leading-[120%] tracking-[0.02em] text-[#1E1E1E]">
                      {layer.title}
                    </h3>
                  </div>

                  {/* Header Icon */}
                  <div className="rounded-lg bg-[#42ABDF40] size-12 flex items-center justify-center">
                    <img
                      src={layer.headerIconSrc}
                      alt={`${layer.title} icon`}
                      style={{
                        width: layer.headerIconSize,
                        height: layer.headerIconSize,
                      }}
                    />
                  </div>
                </div>

                {/* Items */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {layer.items.map((item) => {
                    const ItemIcon = item.icon ? LucideIcons[item.icon] : null;
                    return (
                      <div
                        key={item.label}
                        className="flex flex-col items-center gap-4 rounded-xl border border-black/10 bg-white py-5 text-center"
                      >
                        {layer.showBottomIcons && ItemIcon && (
                          <ItemIcon
                            className="text-[#015190]"
                            style={{ width: item.iconSize, height: item.iconSize }}
                          />
                        )}
                        <span className="font-secondary font-medium lg:text-[18px] text-[16px] leading-[140%] tracking-[0.02em] text-[#1E1E1E]">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>

            {/* Arrow */}
            {index !== TWO_AUTOMATION_LAYERS_CONFIG.length - 1 && (
              <img src="/svg/arrow.svg" />
            )}
          </div>
        ))}</div>
      </div>
    </section>
  );
};

export default LayeredArchitecture;
