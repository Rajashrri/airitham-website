import React from "react";
import * as LucideIcons from "lucide-react";

const InsightCard = ({
  iconName,
  iconSize = 40,
  value,
  label,
  description,
  cardClassName = "",
  iconWrapperClass = "",
  flag, // new prop for top-right badge
}) => {
  const Icon = LucideIcons[iconName];

  return (
    <div className={`relative bg-white rounded-xl p-6 border-light-sm ${cardClassName}`}>
      {/* Flag / Badge */}
      <div className="flex justify-between items-start">
       

      {/* Icon */}
      <div className={`mb-6 ${iconWrapperClass}`}>
        {Icon && <Icon size={iconSize} strokeWidth="1.5" />}
      </div>

       {flag && (
        <div
          className={` ${flag.className}`}
        >
          {flag.text}
        </div>
      )}
      </div>

      {/* Content */}
      <div className="space-y-[24px]">
        {/* Number + Label */}
        <div className="space-y-2">
          <div className="font-primary font-medium lg:text-[64px] text-[40px] leading-[100%] tracking-[2%] capitalize">
            {value}
          </div>
          <div className="font-inter font-medium text-[14px] leading-[140%] tracking-[4%] capitalize">
            {label}
          </div>
        </div>

        {/* Description */}
        <div className="font-inter text-[#999999] font-medium text-[16px] leading-[140%] tracking-[4%]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
