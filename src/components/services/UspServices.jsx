
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/card/FeaturedCard.jsx";


const UspServices = ({ data ,spacing = "" }) => {
  const { title, subtitle, cards, bodyclass, headcolor, linkText, showLink, href , linkicon, bggradient} = data;
    

  return (
    <section className="">
      <div
        className={`${
          bodyclass === true
            ? "bg-[linear-gradient(180deg,#042539_0%,#000000_100%)]"
            : bodyclass
        }  rounded-[50px] px-5   sm:rounded-[100px] lg:py-[100px] py-[80px]  z-10 relative   `}
      >
        <div className=" max-w-[1385px] mx-auto ">
          <SectionHeading
              title={title}
              subtitle={subtitle}
              spacing={spacing}
              titleClassName={`${
                bodyclass ? ` text-[${headcolor}]` : "text-[#015190]"
              } `}
              subtitleClassName={`${
                bodyclass ? `text-[${headcolor}]` : "text-black"
              }`}
              wrapperClassName="w-full  lg:max-w-[909px] mx-auto"
            />

          <div className={`flex flex-wrap  flex-wrap mt-6  gap-6  p-5 justify-center max-w-[1400px] mx-auto ${bggradient}`}>
            {data.cards.map((card) => (

              <FeatureCard key={card.id} {...card} />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default UspServices;
