import React from "react";

export const METRICS_CONFIG = [
  {
    value: "99.99%",
    label: "Context Uptime",
    iconSrc: "/svg/system-architecture/hourglass.svg",
    iconSize: 32,
  },
  {
    value: "<50ms",
    label: "retrieval latency",
    iconSrc: "/svg/system-architecture/timer.svg",
    iconSize: 32,
  },
  {
    value: "10M+",
    label: "context events/day",
     iconSrc: "/svg/system-architecture/calendar.svg",
    iconSize: 32,
  },
  {
    value: "24/7",
    label: "observability & monitoring",
     iconSrc: "/svg/system-architecture/camera.svg",
    iconSize: 32,
  },
];

const MetricsSection = () => {
  return (
    <section className="w-full h-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {METRICS_CONFIG.map((item, idx) => (
            <div
              key={idx}
              className="relative md:h-65 h-60 rounded-[28px]
              border border-white/10
              bg-white/5 backdrop-blur-xl
              shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]
              p-5"
            >
            
             <div className="space-y-4">
                 <h3
                className="font-primary font-medium  text-[42px] leading-[120%] tracking-[0.02em] 

                mae-gradient-text"
              >
                {item?.value}
              </h3>

              {/* Label */}
              <p className="font-secondary font-medium text-[18px] leading-[140%] tracking-[0.02em]
 mae-gradient-text">
                {item?.label}
              </p>
             </div>

              {/* Gradient SVG Icon */}
              <img
                src={item?.iconSrc}
                alt=""
                style={{
                  width: item.iconSize,
                  height: item.iconSize,
                }}
                className="absolute bottom-6 left-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
