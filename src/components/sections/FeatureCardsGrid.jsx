import React from "react";
import {TWO_AUTOMATION_FEATURES_CONFIG} from "@/config/twoplatformsoneintelligenceloopConfig"
export default function FeatureCardsGrid() {
  return (
    <div className="flex flex-wrap mt-20 items-start gap-6 justify-center">
      {TWO_AUTOMATION_FEATURES_CONFIG.map((feature, idx) => (
        <div
          key={idx}
          className="bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] rounded-xl p-5 gap-6 flex flex-col items-start shadow-lg w-[400px]"
        >
          {/* Icon */}
          <div className=" flex items-center justify-center">
            <img
              src={feature.iconSrc}
              alt={feature.title}
              style={{
                width: feature.iconSize,
                height: feature.iconSize,
              }}
            />
          </div>

          {/* Title */}
          <h3 className="font-primary text-left font-medium text-2xl text-white leading-none tracking-[0.02em] ">
            {feature.title}
          </h3>
          <div className="bg-[#D9D9D9] w-full h-[160px]">
            <img src={feature.src} alt="" className="h-full w-full object-cover" />
          </div>

          {/* List Items */}
          <div className="space-y-2 w-full">
            {feature.items.map((item, i) => (
              <div
                key={i}
                className=" w-full bg-inherit  text-left  font-primary font-medium text-base leading-none tracking-[0.04em] p-3 mae-gradient-text rounded-lg "
              >
                {item}
              </div>
            ))}
          </div>

          {/* Description */}
          {feature.description && (
            <p className="font-primary text-[#C6C6C6] font-medium text-sm leading-[1.4] tracking-[0.04em]">
              {feature.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
