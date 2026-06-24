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
    <div className="flex flex-col w-full items-center p-12 shadow-[0px_0px_8px_4px_#01519080] rounded-[24px] ">
      {PLATFORM_HL_ARCHITECTURE_CONFIG.map((layer, index) => (
        <div key={layer.id} className="w-full  relative">
          {/* Layer Card */}

          <div className="rounded-3xl bg-[radial-gradient(66.19%_497.1%_at_50%_50%,_#015190_0%,_#015190_50.32%,_#6AC0E6_100%)]   space-y-4  border border-[#d4d4d4] p-6">
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
              <div className="size-12 flex items-center justify-center rounded-md bg-[#DEF4FF]">
                <img
                  src={layer.layerIcon.src}
                  className={`w-[${layer.layerIcon.size}px] h-[${layer.layerIcon.size}px]`}
                  alt={layer.title}
                />
              </div>
            </div>

            {/* Items */}
            <div className="lg:flex-row flex-col  flex gap-4">
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
            // <img className="mx-auto relative -mt-2" src="/svg/arrow.svg" />
          <div >
              <svg className="m-auto" width="24" height="56" viewBox="0 0 24 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5469 2C8.21354 2 5.54688 4.66667 5.54688 8C5.54688 11.3333 8.21354 14 11.5469 14C14.8802 14 17.5469 11.3333 17.5469 8C17.5469 4.66667 14.8802 2 11.5469 2Z" fill="white"/>
            <path d="M11.5469 56L23.0939 36H-0.000130177L11.5469 56ZM5.54688 8H7.54688C7.54688 5.77124 9.31811 4 11.5469 4V2V0C7.10897 0 3.54688 3.5621 3.54688 8H5.54688ZM11.5469 2V4C13.7756 4 15.5469 5.77124 15.5469 8H17.5469H19.5469C19.5469 3.5621 15.9848 0 11.5469 0V2ZM17.5469 8H15.5469C15.5469 10.2288 13.7756 12 11.5469 12V14V16C15.9848 16 19.5469 12.4379 19.5469 8H17.5469ZM11.5469 14V12C9.31811 12 7.54688 10.2288 7.54688 8H5.54688H3.54688C3.54688 12.4379 7.10897 16 11.5469 16V14ZM11.5469 14H9.54688V38H11.5469H13.5469V14H11.5469Z" fill="url(#paint0_linear_2033_879)"/>
            <defs>
            <linearGradient id="paint0_linear_2033_879" x1="5.55039" y1="29.007" x2="17.5469" y2="29.007" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6AC0E6"/>
            <stop offset="1" stop-color="#015190	"/>
            </linearGradient>
            </defs>
            </svg>
          </div>

          )}
        </div>
      ))}
    </div>
  );
}