import React from "react";



const Chip = ({ label , wrapperClassName}) => {
  return (
    <div
      className={`p-px w-fit rounded-full bg-[linear-gradient(86.66deg,_#015190_10.85%,_#6AC0E6_84.93%)] ${wrapperClassName}`}
    >
      <div className="px-4 font-secondary leading-[1.2] tracking-[0.02em]  py-2 rounded-full bg-white text-sm text-[#015190] font-medium">
        {label}
      </div>
    </div>
  );
};

export default Chip;