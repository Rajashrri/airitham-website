
import * as LucideIcon from "lucide-react";


function LifeCycleCard({ title, description, icon, iconpath }) {
  const IconComponet = LucideIcon[icon];
  return (
    <div className="lifecycle-card border border-[#9d9d9d] w-full sm:max-w-[300px]  
    bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]

    p-[16px] rounded-2xl">
      <div className="size-6 flex justify-center items-center rounded-sm ">
        <IconComponet size="32" className="text-[#6AC0E6]" />
        {/* <img src={iconpath} alt="" className="h-6" /> */}
      </div>

      <div className="lifecycle-card-content pt-[24px] space-y-4 leading-[1.4] text-white">
        <h4 className="font-primary mb-2 text-[24px] tracking-[0.02em] font-medium leading-[1.2]">
          {title}
        </h4>

          <p className="font-secondary text-[14px] text-[#A1A1A1] tracking-[0.02em] font-medium leading-[1.4]">
            {description}
          </p>

      </div>
    </div>
  );
}




export default LifeCycleCard;