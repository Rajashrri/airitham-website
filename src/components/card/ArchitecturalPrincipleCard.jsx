// components/ArchitecturalPrincipleCard.jsx
import React from "react";

const ArchitecturalPrincipleCard = ({ icon, title, description, tags }) => {
  return (
    <div
      className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(153,153,153,0.1)]
                  border border-[1px ] border-[#cdcdcd8a]
                 w-full p-5 shrink-0 rounded-2xl flex flex-col justify-between"
    >
      {/* Icon */}
      <div className="bg-[#42ABDF40]
                      size-8 p-1 rounded-lg">
        <img src={icon} alt={title} />
      </div>

      {/* Content */}
      <div className="w-full mt-[24px] space-y-6">
        <div className="space-y-[14px]">
          <h4 className="font-primary text-white font-medium text-[24px] leading-none tracking-[0.02em] capitalize">
            {title}
          </h4>

          <p className="font-secondary font-medium text-[14px] leading-[1.4] tracking-[0.04em] text-[#D9D9D9]">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-4 flex-wrap">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="inline-block leading-none py-2 px-3 rounded-full
                         bg-[#42ABDF40]"
            >
              <span
                className="font-secondary bg-[radial-gradient(#6AC0E6)] 
                           bg-clip-text text-transparent leading-none
                           tracking-[0.04em] font-medium text-xs"
              >
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchitecturalPrincipleCard;
