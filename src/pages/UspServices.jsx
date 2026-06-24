
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/card/FeaturedCard.jsx";


const UspServices = ({ data ,spacing = "" }) => {
  const { title, subtitle, cards, bodyclass } = data;
    

  return (
    <section className="">
      <div
        className={`${
          bodyclass === true
            ? "bg-[linear-gradient(180deg,#042539_0%,#000000_100%)]"
            : bodyclass
        }  rounded-[50px] px-4 md:px-0 sm:rounded-[100px] py-[100px]  z-10 relative   `}
      >
        <div className="max-w-7xl mx-auto ">
          <SectionHeading
  title={title}
  subtitle={subtitle}
  spacing={spacing}
  titleClassName={`${
    bodyclass ? "text-white" : "text-black"
  } capitalize`}
  subtitleClassName={`${
    bodyclass ? "text-white" : "text-black"
  }`}
  wrapperClassName="w-full sm:max-w-[909px] mx-auto"
/>

          <div className="flex flex-wrap   gap-6 pt-16 justify-center max-w-7xl mx-auto">
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
