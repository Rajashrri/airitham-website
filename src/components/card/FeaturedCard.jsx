import React from "react";
import * as LucideIcons from "lucide-react";
import {CircleArrowOutUpRight} from "lucide-react"

const FeatureCard = ({
  id,
  icon,
  iconColor,
  bgColor,
  hasBg = false,
  textColor,
  discColor,
  title,
  description,
  cardClassName,
  points,
  linkicon,
  showLink = false,
  href,
  linkText = "Learn More",
  

  linkIconType = "lucide",
  linkIconSrc,
  linkIconColor,
  linkTextClass, // ✅ ADD THIS
  
}) => {
  const IconComponent = LucideIcons[icon];
  const ArrowIconComponent = LucideIcons["ArrowRight"];

  // Determine final icon color
  const finalIconColor = hasBg ? "#FFFFFF" : iconColor || "#6AC0E6";

  return (
   <div
  className={`core-feature-card transition-shadow duration-300
  hover:shadow-[0px_0px_40px_2px_#01519040]
  shrink-0  !h-[-webkit-fill-available]
   rounded-lg sm:rounded-3xl border border-[#D9D9D9] space-y-5  p-4 flex flex-col
   ${cardClassName ? cardClassName : "w-full sm:w-[340px] "} `}
>

      {/* Card Icon */}
      {linkIconSrc ? (
        <div
          className={`rounded-2xl ${
            hasBg
              ? "flex items-center justify-center w-[66px] h-[66px]"
              : "w-auto h-auto"
          }`}
          style={{ background: hasBg ? bgColor || "transparent" : "transparent" }}
        >
          <img
            src={linkIconSrc}
            alt={title}
            className="size-6 object-contain"
          />
        </div>
      ) : IconComponent ? (
        <div
          className={`rounded-2xl ${
            hasBg
              ? "flex items-center justify-center w-[66px] h-[66px]"
              : "w-auto h-auto"
          }`}
          style={{
            background: hasBg ? bgColor || "#6AC0E6" : "transparent",
          }}
        >
          <IconComponent size={24} color={finalIconColor} />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-300">
          {/* fallback empty */}
        </div>
      )}

      {/* Content */}
      <div className="feature-card-content space-y-2">
        <h2
          className="font-primary font-medium text-[24px] leading-[1.2] capitalize"
          style={{ color: textColor || "#1E1E1E" }}  
        >
          {title}
        </h2>

        <p
          className="font-secondary text-[14px] text-[#A1A1A1] tracking-[0.02em] font-medium leading-[1.4]"
          style={{ color: discColor || "#626161" }}
            dangerouslySetInnerHTML={{ __html: description }}
        >
          {/* {description} */}
        </p>
      </div>

      {showLink && href && (
        <a
          href={href}
          className="text-[#015190] flex gap-2 items-center leading-[1.4] capitalize tracking-[0.02em] font-semibold text-[16px] font-secondary"
        >
          {linkText}
         {linkIconType === "gradient" && linkIconSrc ? (
      <img
        src={linkIconSrc}
        alt="arrow"
        className="w-5 h-5 object-contain"
      />
    ) : (
      <ArrowIconComponent
        size={22}
        strokeWidth={2}
        color={linkIconColor || "#6AC0E6"}
      />
    )}
        </a>
      )}

      {/* Points */}
      {points?.labels && (
        <ul className="points space-y-2  flex-1 flex flex-col justify-end ">
          {points.labels.map((item, index) => {
            const isGradient = points.textGradientColor?.includes("gradient");

            const PointIcon =
              points.icon?.name && LucideIcons[points.icon.name];

            return (
              <li key={index} className="flex  items-start gap-2">
              
                {PointIcon ? (
                  <PointIcon
                    size={16}
                    className="mt-1 shrink-0"
                    color={points.icon.color || "#6AC0E6"}
                  />
                ) : (
                  <span
                    className="mt-2 h-2 w-2 rounded-full shrink-0"
                    style={{ background: points.discGradientColor }}
                  />
                )}

            
                <span
                  className={isGradient ? "bg-clip-text text-transparent" : ""}
                  style={
                    isGradient
                      ? { backgroundImage: points.textGradientColor }
                      : { color: points.textGradientColor }
                  }
                >
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      )}
     

    </div>
  );
};

export default FeatureCard;
