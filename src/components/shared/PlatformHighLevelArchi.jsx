import * as Icons from "lucide-react";
import {
  
  PLATFORM_HL_ARCHITECTURE_CONFIG,
   
} from "../../config/platformArchitectureConfig";
const LucideIcon = ({ name, size, color, strokeWidth }) => {
  const Icon = Icons[name];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={strokeWidth} color={color} />;
};

export default function PlatformHighLevelArchi() {
  return (
    <div className="flex flex-col w-full items-center ">
      {PLATFORM_HL_ARCHITECTURE_CONFIG.map((layer, index) => (
        <div key={layer.id} className="w-full  relative">
          {/* Layer Card */}

          <div className="rounded-3xl bg-gradient-to-r
        from-[rgba(255,166,141,0.6)]
        to-[rgba(253,58,132,0.6)] space-y-4  border border-[#d4d4d4] p-6">
            {/* Header */}
            <div className="flex rounded-2xl bg-[#fff]  items-start p-4 border-light-sm justify-between">
              <div className="space-y-2">
                <h3 className="font-primary font-medium text-[#1E1E1E] text-[20px] leading-[1.2] tracking-[0.02em] capitalize">
                  {layer.title}
                </h3>
                <p className="font-secondary font-medium text-[16px] leading-[1.4] tracking-[0.02em] text-[#626161]">
                  {layer.subtitle}
                </p>
              </div>

              {/* Layer Icon */}
              <div className="size-12 flex items-center justify-center rounded-md bg-pink-50">
                <img
                  src={layer.layerIcon.src}
                  className={`w-[${layer.layerIcon.size}px] h-[${layer.layerIcon.size}px]`}
                  alt={layer.title}
                />
              </div>
            </div>

            {/* Items */}
            <div className="flex gap-4">
              {layer.items.map((item) => (
                <div
                  key={item.id}
                  className=" flex-1  space-y-4  rounded-3xl border-light-sm p-5 bg-white"
                >
                  <LucideIcon
                    name={item.icon}
                    size={item.size}
                    color={item.color}
                    strokeWidth={1.5}
                  />

                  <span className="text-sm font-medium text-gray-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Connector */}
          {index !== PLATFORM_HL_ARCHITECTURE_CONFIG.length - 1 && (
            <img className="mx-auto relative -mt-2" src="/svg/arrow.svg" />
          )}
        </div>
      ))}
    </div>
  );
}