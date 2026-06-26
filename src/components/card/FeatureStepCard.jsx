

const FeatureStepCard = ({ number, title, description }) => {
  return (
    <div
      className="relative w-[280px] py-5 px-4 rounded-[24px] border border-white/10 
      bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]

      p-8 text-center backdrop-blur-xl"
    >
      {/* Number */}
      <div
        className="mx-auto mb-[24px] flex h-14 w-14 items-center justify-center rounded-full
        bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]
        font-secondary text-[24px] font-semibold leading-[140%] tracking-[0.04em] text-white"
      >
        {number}
      </div>

      {/* Title */}
      <div className="space-y-4">
        <h3
          className="mb-4 font-primary text-[24px] font-medium leading-[100%]
        tracking-[0.02em] text-white"
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="font-secondary text-[14px] font-medium leading-[140%]
        tracking-[0.04em] text-[#C6C6C6]"
        >
          {description}
        </p>
      </div>
    </div>
  );
};


export default FeatureStepCard;