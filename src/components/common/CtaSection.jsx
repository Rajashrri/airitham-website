import Button from "@/components/ui/Button.jsx";
import React from "react";

const CtaSection = ({
  heading,
  paragraph,
  backgroundImage,
  buttons = [],
  wrapperClassName,
  href,
}) => {
  return (
    <section>
      <div
        className={`w-full ${wrapperClassName || ""} bg-img-overlay overflow-hidden sm:rounded-t-[100px] rounded-t-[50px] relative z-10`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-[180px] px-4 lg:px-0 text-center flex flex-col items-center relative z-12 text-white">
          {heading && (
            <h2
              className="font-primary tracking-[0.02em] text-[48px]  mb-4 leading-none font-semibold"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          )}

          {paragraph && (
            <p
              className="font-secondary tracking-[0.02em] text-[16px] md:text-[16px] w-full w-full  text-center mb-8 leading-[1.4] font-medium"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          )}

          {buttons.length > 0 && (
            <div className="flex max-w-[316px] sm:max-w-full w-full flex-col sm:flex-row justify-center items-stretch gap-6 btn-group">
              {buttons.map((btn, index) => {
                const Wrapper = btn.wrapperClass ? "div" : React.Fragment;

                return (
                  <Wrapper key={index} className={btn.wrapperClass}>
                    <Button
                      btnText={btn.text}
                      className={btn.className}
                      hoverIcon={btn.hoverIcon}
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
      </div>
    </section>
  );
};

export default CtaSection;
