import React from "react";
import * as LucideIcons from "lucide-react";

const Button = ({ 
  className = "", 
  btnText, 
  icon, 
  iconSize, 
  useCommonSvg = false,
  hoverIcon = true   ,
  href
}) => {
  const IconComponent = LucideIcons[icon];
  console.log(href);
  

  return (
    <a href={href}
      className={`group py-5 pl-6 pr-5  font-semibold font-primary  leading-[1.2] tracking-[0%] rounded-lg flex gap-2.5 whitespace-nowrap capitalize items-center justify-center ${className}`}
    >
      {btnText}

      {useCommonSvg && (
        <img 
          src="/svg/gradient-icon.svg" 
          alt="gradient-icon"
          className={`shrink-0 transition-transform duration-300 
            ${hoverIcon ? "group-hover:rotate-45" : ""}
          `}
        />
      )}

      {!useCommonSvg && icon && IconComponent && (
        <IconComponent
          style={{
            width: iconSize || "20px",
            height: iconSize || "20px",
          }}
          className={`shrink-0 transition-transform duration-300 
            ${hoverIcon ? "group-hover:rotate-45" : ""}
          `}
        />
      )}
    </a>
  );
};

export default Button;
