import React from "react";
import * as LucideIcons from "lucide-react";

const CapabilityCard = ({
  title = "",
  description = "",
  icon,
  iconSize = 22,
  useGradientBg = false,
  roundPill = false,
}) => {
  const IconComponent = LucideIcons?.[icon];

  // Guard: if icon is invalid, do not render
  if (!IconComponent) return null;

  return (
    <div className="capability-card w-full max-w-[300px]   flex flex-col items-center space-y-5 text-center group">
      {/* Icon */}
      <div
        className={`
          w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]
          flex items-center justify-center
          transition-transform duration-300 ease-out
          group-hover:scale-105
          ${roundPill ? "rounded-full" : "rounded-md"}
          ${
            useGradientBg
              ? "bg-[linear-gradient(86deg,#015190_10.85%,#6AC0E6_84.93%)]"
              : "bg-[#015190]"
          }
        `}
      >


        <IconComponent
          size={iconSize}
          className="text-white"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl sm:text-2xl font-primary font-medium leading-[1.2] tracking-[0.02em] text-white whitespace-pre-line">
          {title}
        </h2>

        {description && (
          <p className=" text-[#C6C6C6] font-secondary text-[14px] text-[#A1A1A1] tracking-[0.02em] font-medium leading-[1.4] max-w-[260px]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CapabilityCard;
