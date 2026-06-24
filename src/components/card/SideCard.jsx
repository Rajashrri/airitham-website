import * as LucideIcons from "lucide-react";

const SideCard = ({ title, icon, iconSrc, iconSize, points }) => {
  const Icon = LucideIcons?.[icon];

  return (
    <div className=" w-full sm:w-[300px] rounded-lg sm:rounded-3xl border border-[#E5E5E5] gap-6 p-4 flex flex-col items-start">
      {/* Card icon */}
      <div className="">
        {iconSrc ? (
          <img src={iconSrc} alt="icon" className="w-6 h-6" />
        ) : (
          Icon && <Icon size={iconSize || 24} className="text-[#015190]" />
        )}
      </div>

      <div className="sidecard-group space-y-2">
        <h3 className="text-[24px] capitalize font-primary font-medium tracking-[0.02em] leading-[1.2] text-[#1e1e1e]">
          {title}
        </h3>

        {/* Points list */}
        <ul className="space-y-2.5">
          {points?.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-[#015190]">
              {item.iconSrc ? (
                <img src={item.iconSrc} alt="icon" className="w-5 h-5" />
              ) : (
                <LucideIcons.Check size={20} />
              )}

              <span className="text-base font-normal font-secondary leading-none tracking-[0.0em]">
                {item.label || item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideCard;
