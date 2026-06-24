import React from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const HeroSection = ({
  heading,
  paragraph,
  buttons = [],
  backgroundGradient,
  imageSrc,
  rounded = "50px",
  badges,
 
}) => {
  return (
    <section>
      <div
        className="w-full h-auto mt-[104px]  relative overflow-hidden"
        style={{
          background: backgroundGradient,
          borderRadius: rounded,
        }}
      >
        {/* CONTENT */}
        <div
          className="flex flex-col py-[100px] mx-auto  items-center  w-full px-6"

        >
          {/* Heading with <br/> support */}
          {heading && (
           <h2
          className="mb-4 font-semibold  sm:max-w-full leading-none text-white text-center font-primary text-[40px] sm:text-[64px] tracking-[0.02em]"
          dangerouslySetInnerHTML={{ __html: heading }}
        ></h2>

          )}

          {/* Paragraph with <br/> support */}
          {paragraph && (
            <p
              className="text-inter-16 text-white mb-8 text-center leading-[1.4]"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            ></p>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
          <div className="flex max-w-[264px] sm:max-w-full w-full flex-col-reverse sm:flex-row justify-center items-stretch gap-4">


              {buttons.map((btn, index) => {
                const Wrapper = btn.wrapperClass ? "div" : React.Fragment;
                return (
                  <Wrapper key={index} className={btn.wrapperClass}>
                    <Button
                      btnText={btn.text}
                      className={btn.className}
                      hoverIcon={ btn?.hoverIcon}
                      icon={btn.icon}
                      iconSize={btn.iconSize}
                      useCommonSvg={btn.useCommonSvg}
                      href={btn.href}
                    />
                  </Wrapper>
                );
              })}
            </div>
          )}
        </div>

        {/* IMAGE */}
        {imageSrc && (
          <div className="  relative mx-auto h-[300px] sm:h-auto mt-[60px] max-w-[815px]">
            <div className=" hidden md:block">
              {badges.map((item, i) => (
                <Badge key={i} text={item.text} className={item.className} />
              ))}


            </div>
            {/* <img className="w-full h-full object-cover  mx-auto" src={imageSrc} alt="" /> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
