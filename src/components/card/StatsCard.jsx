import * as LucideIcons from "lucide-react";

const StatsCard = ({
  iconName,
  iconSize = 40,
  value, // <-- display value
  percentage, // <-- numeric for progress etc
  title,
  description,
  wrapperClass = "",
}) => {
  const Icon = LucideIcons[iconName];

  return (
    <div
      className={`
        md:w-[280px] w-[100%]
        rounded-[20px]
        bg-white

        transition-shadow duration-300
  hover:shadow-[0px_0px_40px_2px_#01519040] border border-[#D9D9D9]

        px-4 py-6
        text-center
        space-y-[40px]
        ${wrapperClass}
      `}
    >
      {/* Icon */}
      <div className="mx-auto flex w-[64px] h-[64px] items-center justify-center rounded-2xl bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]">
        {Icon && (
          <Icon
            style={{ width: iconSize, height: iconSize , strokeWidth:1 }}
            className="text-white"
            
          />
        )}
      </div>

      {/* Content */}
      <div className="space-y-[14px]">
        <div className="font-primary font-medium  text-[32px] leading-[100%] tracking-[0.02em] text-center
 capitalize">
          {value} {/* <-- fixed to show value */}
        </div>

        <div className="font-dm-sans font-semibold text-[24px] leading-[120%] tracking-[0.02em] text-[#1E1E1E] text-center capitalize">
          {title}
        </div>

        <p className="font-inter font-medium text-[14px] leading-[140%] tracking-[0.02em] text-gray-500 text-center capitalize">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
