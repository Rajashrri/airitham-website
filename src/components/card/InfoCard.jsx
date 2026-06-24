import React from "react";
import * as LucideIcons from "lucide-react";

const InfoCard = ({
  iconName,
  label, // renamed from title
  description,
  iconSize = 32,
  iconWrapperClass = "text-pink-500", // now matches your config
  cardClassName = "",
}) => {
  const Icon = LucideIcons[iconName];

  return (
    <div className={` rounded-xl p-4 flex flex-col gap-[24px] shadow-sm ${cardClassName}`}>
      {Icon && <Icon className={`${iconWrapperClass} mb-3`} size={iconSize} strokeWidth="1.5" />}
      <div className="space-y-2">
        <h3 className="font-primary text-[#1e1e1e] font-semibold text-[24px] leading-[24px] tracking-[0.02em] capitalize
">{label}</h3>
      <p className="font-secondary font-medium text-[#999999] text-[14px] leading-[140%] tracking-[0.04em]
">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
