import React from 'react'
import Button from "../ui/Button";

const MainBanner = ({ data }) => {
  return (
    <>
     <div
            className="w-full  bg-cover bg-center bg-no-repeat"
        
          >
            {/* <div className="absolute inset-0 bg-black/5" /> */}

            <div className={`relative text-center px-4 lg:px-0 ${data.headclass === true ?  "lg:pt-[220px] pt-[150px]" : data.headclass}   z-10`}>
              <h1 dangerouslySetInnerHTML={{ __html: data.heading }} class={`font-primary text-[40px] mx-auto font-[600] text-[#015190]  sm:w-fit leading-none sm:text-[64px]  mx-auto tracking-[0.02em] ${data.headingclass}`}>
                
              </h1>
              <h3 className='font-primary lg:text-[20px] text-[16px] font-[500] mt-2'>{data.subheading}</h3>

              <p   dangerouslySetInnerHTML={{ __html: data.paragraph }} class="font-secondary font-medium lg:text-[16px] text-[14px] leading-[1.4] tracking-[2%] text-center mt-[20px]  sm:max-w-[950px] mx-auto  text-[#838383]">
                 {/* {data.paragraph} */}
              </p>

                {/* <div className="flex mx-auto w-[264px]  sm:w-full flex-col-reverse   sm:flex-row justify-center items-stretch gap-4 mt-[30px]">
                    <div className="bg-[linear-gradient(86.66deg,#015190_10.85%,#FF7F7F_84.93%)] overflow-hidden rounded-lg w-fit p-0.5">
                    <Button
                        btnText="Join Partner Program"
                        className="py-5 px-6 min-w-[228px] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white"
                        iconSize="20"
                        useCommonSvg="true"
                        />

                    </div>

                    <Button
                    btnText="Explore Products"
                    className="text-[16px]  min-w-[228px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                    iconSize="20"
                    icon="CircleArrowOutUpRight"
                    
                    />
              </div> */}
              <div className="flex mx-auto   flex-col-reverse   sm:flex-row justify-center items-stretch gap-4 mt-[30px] max-w-[300px] sm:max-w-full">
                
                  {data.buttons.map((btn, index) =>
                    index === 0 ? (
                      <div key={index} className=" overflow-hidden   rounded-lg  p-0.5">
                        <Button
                          btnText={btn.text}
                          className={btn.className}
                          icon={btn.icon}
                          iconSize={btn.iconSize}
                          href={btn.href}
                          hoverIcon={btn.hoverIcon}
                        />
                      </div>
                    ) : (
                      <Button
                        key={index}
                        btnText={btn.text}
                        className={btn.className}
                        icon={btn.icon}
                        iconSize={btn.iconSize}
                        href={btn.href}
                        hoverIcon={btn.hoverIcon}
                      />
                    )
                  )}

          </div>
            </div>
          </div>
    </>
  )
}

export default MainBanner