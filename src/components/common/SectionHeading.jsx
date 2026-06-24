import React from "react";

const SectionHeading = ({
  title,
  subtitle,
  wrapperClassName = "",
  titleSize = "text-[32px] sm:text-[40px]",      // new prop for font size
  titleClassName = "",                               // additional classes
  subtitleSize = "text-[16px] sm:text-[18px]",  // new prop for subtitle font size
  subtitleClassName = "",
  spacing = "space-y-4 sm:space-y-2",
  headcolor=""
}) => {
  return (
    <div className={`text-center px-[20px] lg:px-[0px] ${spacing} ${wrapperClassName}`}>
      {title && (
        <h2
          className={`font-primary font-medium leading-[1.2] tracking-[2%] capitalize ${titleSize} ${titleClassName}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {subtitle && (
        <p
          className={`font-secondary font-medium leading-[1.4] tracking-[2%] mt-2 mx-auto ${subtitleSize} ${subtitleClassName}`}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  );
};

export default SectionHeading;
