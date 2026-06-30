import React from "react";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { CircleArrowOutUpRight, SectionIcon } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { useNavigate } from "react-router-dom";
const CommunitySection = () => {
    const navigate = useNavigate();

  const goToContactSection = () => {
   navigate("/company", {
  state: { scrollTo: "teamsection" },
});
  };
  return (
    <section>
      <div
        className="relative px-4 sm:px-0 bg-img-overlay  w-full gap-10 commmunity-section section-overlap flex-col justify-center flex items-center mt-[-100px] z-5"
        style={{
          backgroundImage: 'url("/bg/gradient.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl sm:py-[60px] relative z-[14]">
          {/* <div className="relative z-12 max-w-[1000px] mx-auto">
              <h2 className="section-heading  text-center text-white">
                Your community advantage
              </h2>
              <p className="section-subheading pt-2 text-[24px] text-[#DADADA]">
                Join the world's largest automated software testing product
                community.
                <br />
                Collaborate with 120,301 testing pros like you. Ask questions,
                get answers.
              </p>
            </div> */}

          <SectionHeading
            subtitle="Join the new aged technology community. Collaborate with professionals
             <br class='hidden sm:block' />
             globally to share insights, ask questions, and find the answers you need.
 "
            subtitleClassName=" font-secondary text-[#DADADA]"
            titleClassName="font-primary   text-white captialize"
            title="Your community advantage "
            wrapperClassName=" sm:max-w-[991px] mx-auto"
          />

          <div className="communtiy-group-btn max-w-[316px] sm:w-full mx-auto flex-col-reverse md:flex-row-reverse flex justify-center items-center mt-6 gap-4 sm:gap-6">
             <Button
              btnText="Free Training"
              className="py-5 px-6 w-full min-w-[228px] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
              iconSize="20"
              icon="CircleArrowOutUpRight"
              // href="/company#teamsection"
            />
            <button  onClick={goToContactSection}  class="group hover:cursor-pointer py-5 pl-6 pr-5  font-semibold font-primary  leading-[1.2] tracking-[0%] rounded-lg flex gap-2.5 whitespace-nowrap items-center justify-center py-5 px-6 w-full min-w-[228px] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white">Meet the community
             <CircleArrowOutUpRight    className={`shrink-0 transition-transform duration-300 
             group-hover:rotate-45
          `}  style={{
            width:  "20px",
            height:"20px",
          }}/>
        
            </button>
            {/* <Button
              btnText="Meet the community"
              className="py-5 px-6 w-full min-w-[228px] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white"
              iconSize="20"
              icon="CircleArrowOutUpRight"
            /> */}

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
