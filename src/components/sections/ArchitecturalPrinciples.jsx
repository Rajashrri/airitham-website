import ArchitecturalPrincipleCard from "@/components/card/ArchitecturalPrincipleCard";
import { PLATFORM_ARCHITECTURAL_PRINCIPLES_CONFIG  } from "@/config/platformArchitectureConfig";
import SectionHeading from "@/components/common/SectionHeading";
const ArchitecturalPrinciples = () => {
  const { title, subtitle, cards } = PLATFORM_ARCHITECTURAL_PRINCIPLES_CONFIG;

  return (
    <section  >
      <div className="w-full bg-white">
        <div className="w-full px-6  pt-[90px] pb-[190px] rounded-t-[50px] md:rounded-t-[100px] bg-gradient-primary ">
          <SectionHeading
            title={title}
            titleClassName="text-white"
            subtitleClassName="text-[#D9D9D9]"
            subtitle={subtitle}
          />

          <div className="max-w-7xl mt-[60px]  mx-auto">
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <ArchitecturalPrincipleCard key={card.id} {...card} />
          ))}
        </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalPrinciples;
