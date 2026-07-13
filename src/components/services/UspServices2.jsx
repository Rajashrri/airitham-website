
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard2 from "@/components/card/FeaturedCard2.jsx";


const UspServices2 = ({ data ,spacing = "" }) => {
  const { title, subtitle, cards, bodyclass, headcolor, linkText,titleClassName, subtitleClassName, showLink, href , linkicon, tags , num, bigheading, bigheadingclass, bggradient} = data;
    

  return (
    <section className="">
      <div
        className={`${
          bodyclass === true
            ? "bg-[linear-gradient(180deg,#042539_0%,#000000_100%)]"
            : bodyclass
        }  rounded-[50px] px-4 md:px-1 lg:px-[0px] sm:rounded-[100px] lg:py-[100px] py-[40px]  z-10 relative   `}
      >
        <div className="max-w-[1360px] mx-auto ">
         {
            tags && (
              bodyclass === false ? (
              <h4 className="bg-[#0151901A] text-[#015190] text-[12px] w-fit font-[600]  m-auto font-secondary rounded-[100px] px-4 mb-6 p-3">
                {tags}
              </h4>
            ) : (
              <span
                className="bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]
                          text-center m-auto mb-8 w-fit rounded-[100px]
                          px-[15px] border border-[#797979]
                          flex justify-center items-center"
              >
                <span
                  className="font-secondary block text-[12px]
                            bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                            bg-clip-text text-transparent font-[600] p-2"
                >
                  {tags}
                </span>
              </span>
            )
            )
      }
   

     
          <SectionHeading
              title={title}
              subtitle={subtitle}
              spacing={spacing}
              titleClassName={`${
                bodyclass ? ` text-[${headcolor}] ${titleClassName}` : "text-[#015190]"
              } `}
              subtitleClassName={`${
                bodyclass ? `text-[${headcolor}] ${subtitleClassName}` : "text-black"
              }`}
              wrapperClassName="w-full  mx-auto"
            />

          <div className={`flex ${num ? " ": "mt-9"} flex-wrap  gap-4 lg:pt-6  lg:py-6 lg:max-w-[1360px] pt-5 justify-center  mx-auto ${bggradient}`}>
            {data.cards.map((card) => (

              <FeatureCard2 key={card.id} {...card} />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default UspServices2;
