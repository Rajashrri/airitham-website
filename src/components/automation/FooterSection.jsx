import React from "react";
const year = new Date().getFullYear();
export const FooterSection = () => {
  return (
    <footer
      className="w-full text-white"
      style={{
        background: "linear-gradient(180deg, #042539 0%, #000000 100%)",
      }}
    >
      <div className=" px-6 sm:px-10 py-12">
        {/* MAIN WRAPPER */}
        <div className="flex flex-wrap justify-between gap-8 lg:gap-[120px]">
          {/* LEFT TEXT BLOCK */}
          <div className="font-secondary text-[16px] leading-[1.2] max-w-full sm:max-w-[358px] shrink-0">
            Critical Flows Often Go Untested Because Automation Focuses On
            What’s Documented, Not What Human And.
          </div>

          {/* RIGHT NAVIGATION BLOCK */}
          <div className="flex flex-wrap gap-10 text-[14px] leading-[22px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 w-[150px] sm:w-auto">
              <h4 className="font-secondary text-[16px] font-semibold leading-[1.2]">
                Products
              </h4>
              <ul className="space-y-3.5 font-secondary text-[16px]">
                <li>neuroTest</li>
                <li>CoreTest</li>
                <li>Integration</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 w-[150px] sm:w-auto">
              <h4 className="font-secondary text-[16px] font-semibold leading-[1.2]">
                Privacy Policy
              </h4>
              <ul className="space-y-3.5 font-secondary text-[16px]">
                <li>Documentation</li>
                <li>Tutorials</li>
                <li>Support</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 w-[150px] sm:w-auto">
              <h4 className="font-secondary text-[16px] font-semibold leading-[1.2]">
                Company
              </h4>
              <ul className="space-y-3.5 font-secondary text-[16px]">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>


        {/* COPYRIGHT */}
        <div className="max-w-[1440px]  mx-auto mt-[60px] text-[#FFF9F9] text-[14px]">
         Copyright © {year} 3NS. All Rights Reserved. Powered By : DIIGIIHOST 
        </div>
      </div>

      {/* SVG WAVE */}
      <div className="w-full overflow-hidden">
        <img
          src="./svg/footer-airithm-logo.svg"
          alt="footer shape"
          className="w-full"
        />
      </div>
    </footer>
  );
};

export default FooterSection;
