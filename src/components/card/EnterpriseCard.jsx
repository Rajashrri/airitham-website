import * as LucideIcon from "lucide-react";

const EnterpriseCard = ({ icon, title, description }) => {
    
  const IconComponent = LucideIcon[icon] || LucideIcon.ArrowUp; // fallback

  return (
    <div className="enterprise-card w-full  md:w-[350px] flex space-y-6 flex-col items-center justify-start  ">
      <IconComponent size="32" className=" text-[#015190]" />

      <div className="enterprise-card-content  flex flex-col gap-2 text-center">
        <h4 className="text-dmsans-20 leading-[1.4]  text-[#1E1E1E] font-medium">{title}</h4>
        <p className="font-secondary text-[14px]  tracking-[0.02em] font-medium leading-[1.4]  text-[#626161]">{description}</p>
      </div>
    </div>
  );
};

export default EnterpriseCard;
