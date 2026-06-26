import React from "react";
import * as LucideIcons from "lucide-react";
import {CircleArrowOutUpRight} from "lucide-react"

const FeatureCard2 = ({
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
  bigheading,
  bigheadingclass,
  num,
  linkText = "Learn More",
}) => {
  const IconComponent = LucideIcons[icon];
  const ArrowIconComponent = LucideIcons["ArrowRight"];

  // Determine final icon color
  const finalIconColor = hasBg ? "#FFFFFF" : iconColor || "#015190";

  return (
    <div
      className={`relative core-feature-card transition-shadow justify-between duration-300 
        hover:shadow-[0px_0px_40px_2px_#01519040] shrink-0 
        ${cardClassName ? cardClassName : "w-full sm:w-[340px] "} 
        rounded-3xl border border-[#9d9d9d] p-5 gap-[0px] flex flex-col`}
      
    >  
    
    {
          num && (
            <h2 className="absolute md:top-[-40px] top-[-20px] text-[#fff] md:h-[64px] h-[40px] md:w-[64px] w-[40px] left-[40%] rounded-[100%] flex justify-center items-center md:text-[24px] text-[18px] font-primary bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]">
              {num}
            </h2>
          )
        }
      {/* Card Icon */}
      {IconComponent ? (
        <div
          className={`rounded-2xl ${
            hasBg
              ? "flex items-center justify-center w-[66px] h-[66px]"
              : "w-auto h-auto"
          }`}
          style={{
            background: hasBg ? bgColor || "#015190" : "transparent",
          }}
        >
          <IconComponent size={32} color={finalIconColor} />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-300">
          {/* fallback empty */}
        </div>
      )}

      {/* Content */}
      <div className="feature-card-content mt-[24px]">
        {
          bigheading && (
            <h1 className={`${bigheadingclass} text-[32px]  mb-[18px] font-primary font-[600]`}>{bigheading}</h1>
          )
        }
        <h2
          className="font-primary font-medium text-[24px]  leading-[1.2] "
          style={{ color: textColor || "#1E1E1E" }}
        >
          {title}
        </h2>
        


        <p
          className="font-secondary text-[14px] leading-[1.4] pt-[14px] "
          style={{ color: discColor || "#626161" }}
        >
          {description}
        </p>
      </div>

      {showLink && href && (
        <a
          href={href}
          className="text-[#015190] flex gap-2 items-center leading-[1.4] tracking-[0.02em] font-semibold text-[18px] font-secondary"
        >
          {linkText}
          { linkicon !== "CircleArrowOutUpRight"?
          <ArrowIconComponent size={22} strokeWidth={2} /> :
          <CircleArrowOutUpRight size={20}/>

          }
        </a>
      )}

      {/* Points */}
    
      {points?.labels && (
        <ul className="points space-y-2 mt-4">
          {points.labels.map((item, index) => {
            const isGradient =
              typeof points.textGradientColor === "string" &&
              points.textGradientColor.includes("gradient");

            const ItemIcon =
              item.icon?.name && LucideIcons[item.icon.name];

            return (
              <li key={index} className={`flex items-start  ${ItemIcon ? "gap-2" : ""}  ${points.discGradientColor && ItemIcon ? "gap-2" : ""} font-[600]`}>
                {/* Icon */}
                {ItemIcon ? (
                  <ItemIcon
                    size={16}
                    className="mt-1 shrink-0"
                    color={item.icon.color || "#015190"}
                  />
                ) : (
                  <span
                    className={`${points.discGradientColor ? "h-2 w-2" : "none h-0 w-0"} mt-2  rounded-full shrink-0`}
                    style={{ background: points.discGradientColor }}
                  ></span>
                )}

                {/* Text */}
                <span
                  className={isGradient ? "bg-clip-text text-transparent" : ""}
                  style={
                    isGradient
                      ? { backgroundImage: points.textGradientColor }
                      : { color: points.textGradientColor }
                  }
                >
                  {item.text}
                </span>
              </li>
            );
          })}
        </ul>
      )}

    </div>
  );
};

export default FeatureCard2;
