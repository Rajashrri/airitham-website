import React from "react";
import * as LucideIcons from "lucide-react";

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
}) => {
  const IconComponent = LucideIcons[icon];

  // Determine final icon color
  const finalIconColor = hasBg ? "#FFFFFF" : iconColor || "#015190";

  return (
    <div
      className={`core-feature-card transition-shadow justify-between duration-300 
        hover:shadow-[0px_0px_40px_2px_#01519040] shrink-0 
        ${cardClassName ? cardClassName : "w-full sm:w-[340px] min-h-[258px]"} 
        rounded-3xl border border-[#9d9d9d] p-5 gap-12 flex flex-col`}
    >
      {/* Card Icon */}
      {IconComponent ? (
        <div
          className={`rounded-[16px] ${
            hasBg
              ? "flex items-center justify-center w-[66px] h-[66px]"
              : "w-auto h-auto"
          }`}
          style={{
            backgroundColor: hasBg ? bgColor || "#015190" : "transparent",
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
      <div className="feature-card-content">
        <h2
          className="font-primary font-[500] text-[24px] leading-[1.2] "
          style={{ color: textColor || "#1E1E1E" }}
        >
          {title}
        </h2>

        <p
          className="font-secondary text-[18px] leading-[1.4] pt-4 "
          style={{ color: discColor || "#626161" }}
        >
          {description}
        </p>
      </div>

      {/* Points */}
      {points?.labels && (
        <ul className="points space-y-2">
          {points.labels.map((item, index) => {
            const isGradient = points.textGradientColor?.includes("gradient");

            const PointIcon =
              points.icon?.name && LucideIcons[points.icon.name];

            return (
              <li key={index} className="flex items-start gap-2">
                {/* Left indicator */}
                {PointIcon ? (
                  <PointIcon
                    size={16}
                    className="mt-1 shrink-0"
                    color={points.icon.color || "#015190"}
                  />
                ) : (
                  <span
                    className="mt-2 h-2 w-2 rounded-full shrink-0"
                    style={{ background: points.discGradientColor }}
                  />
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
