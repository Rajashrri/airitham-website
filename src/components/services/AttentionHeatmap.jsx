const GradientBar = ({ label, value }) => {
  return (
    <div className="space-y-2">
      <div className="flex  justify-between items-center">
        <span className="text-[16px] font-primary leading-none text-[#626161] tracking-[0.04em] font-medium">
          {label}
        </span>

        <span className="text-[16px] font-inter leading-[1.4] tracking-[0.04em] font-medium text-[#015190]">
          {value}%
        </span>
      </div>

      <div className="w-full h-4 rounded-full bg-[#CFCFCF] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${value}%`,
            background: "linear-gradient(90deg, #6AC0E6 0%, #015190 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default function AttentionHeatmapCard() {
  return (
    <div className="max-w-[488px] w-full bg-white rounded-3xl border border-gray-300 p-5 ">
      <h2 className="text-[20px] leading-none tarcking-[0.04em]  font-primary font-medium text-[#015190]">
        Attention heatmap
      </h2>

      {/* Bars */}
      <div className="space-y-4 mt-8">
        <GradientBar label="Context snippet a" value={94} />
        <GradientBar label="Context snippet b" value={87} />
        <GradientBar label="Context snippet c" value={72} />
        <GradientBar label="Context snippet d" value={45} />
      </div>

      {/* Divider */}
      <div className="h-px my-6 bg-gray-300" />



      <div className="flex justify-between items-center">
        <span className="text-[16px] text-[#626161] font-primary leading-none tracking-[0.04em] ">Confidence score</span>
        <span className="text-16px] font-primary leading-none tracking-[0.04em] font-medium text-[#015190]">0.94</span>
      </div>
    </div>
  );
}
