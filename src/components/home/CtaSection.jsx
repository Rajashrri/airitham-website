import Button from "@/components/ui/Button";
import SectionHeading from "@/components/common/SectionHeading";

const CtaSection = () => {
  return (
    <section >
      <div
        style={{
          backgroundImage: 'url("/bg/gradient.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
        }}
        className="rounded-[50px] px-5 sm:px-0 sm:rounded-[100px] sm:bg-center bg-left bg-img-overlay section-wrapper z-11 overflow-hidden  w-full relative"
      >
        <div className="max-w-7xl mx-auto sm:px-6 relative z-14 ">
          <div className="overlay-content backdrop-blur-[100px]  sm:mx-0 space-y-6 justify-center flex flex-col items-center sm:p-20 w-full h-[350px] sm:h-auto sm:max-w-full rounded-[40px] border border-white cta-banner-content  relative z-13">
            <SectionHeading
              titleClassName=" text-white"
              title="Ready to Modernize <br class='sm:hidden' /> Your Enterprise?"
            />

             <Button
              btnText="Talk to sales"
              className="py-5 px-6 font-primary min-w-[228px] font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
              iconSize="20"
              icon="CircleArrowOutUpRight"
            />

          
          </div>

          <div className="w-full py-[100px] flex flex-col md:flex-row items-center gap-20 md:items-start sm:gap-10">
            {/* LEFT SIDE */}
            <div className="w-full  md:max-w-[700px]">
              <h3 className="font-primary font-medium text-center sm:text-left text-white text-[32px] sm:text-[40px] leading-[1.2] tracking-[0.02em] mb-5">
                Happy testers are 1.4x more likely to adopt advanced automation.
                Here’s why it matters.
              </h3>

              
<Button
              btnText="Download 2025 Report"
              hoverIcon={false}
              className="py-5 px-6 w-full md:w-fit items-center  mx-auto sm:mx-0 font-primary font-medium text-[16px] leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white"
              iconSize="20"
              icon="Download"
            />
              
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-[490px] flex justify-center md:justify-end">
              <img
                className="max-w-full h-auto object-contain"
                src="./home/soq-banner.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
