import MainBanner from "../components/services/MainBanner";
import Navbar from "@/components/Navbar.jsx";
import PricingCard from "../components/card/PricingCard";
import CtaSection from "@/components/common/CtaSection";
import FooterSection from "@/components/home/FooterSection";
const PRICING_HEADER_CONFIG = {
  heading: "Flexible Pricing for <br class=' hidden sm:block' /> Autonomous Testing",
  paragraph:
    "Plans designed to scale from pilot teams to enterprise-wide autonomy.",
    headingclass:"text-[#fff]",

  buttons: [],
};

export const PLANING_CTA_CONFIG = {
  heading: "Not sure which plan fits your needs?",
  paragraph:
    "Our architects can help you design the perfect solution for your environment.",
  backgroundImage: "/bg/gradient.png",
  buttons: [
    {
      text: "Schedule Architecture Review",
      className:
        " text-[#015190] bg-white ",
            icon: "CircleArrowOutUpRight",
      href: "",
    },
    {
      text: "Contact Sales",
      className:
        " bg-primary-gradient text-white",
            icon: "CircleArrowOutUpRight",
      href: "",
    },
  ],
};
const PricingPage = () => {
  return (
    <>
      <Navbar />
      <section
        className="bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] pb-[200px] md:pt-[140px] pt-[100px]    md:mt-[104px] mt-[80px] rounded-t-[50px]  text-white
"
      >
        <div className="max-w-7xl mx-auto">
          <MainBanner data={PRICING_HEADER_CONFIG} />
          <div className="flex items-center gap-4 mt-8 md:flex-row flex-col px-5 md:px-0">
            {PRICING_CONFIG.cards.map((pricing) => (
              <PricingCard {...pricing} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection wrapperClassName="mt-[-100px]" {...PLANING_CTA_CONFIG} />

      <FooterSection />
    </>
  );
};

export const PRICING_CONFIG = {
  sectionTitle: "Pricing",
  cards: [
    {
      id: "starter",
      title: "Starter",
      subtitle: "For small teams & pilots",
      size: "md:w-[400px] w-[100%] min-h-[400px]",
      features: [
        "Core autonomous test generation",
        "Limited agent execution",
        "Standard analytics",
        "Community support",
      ],
      cta: {
        text: "Get Started",
        bgClass: "bg-[#1E1E1E]",
      },
    },
    {
      id: "growth",
      title: "Growth",
      subtitle: "For scaling engineering teams",
      svgImgPath: "/svg/gradient-check.svg",
      size: "md:w-[400px] w-[100%] min-h-[420px]",
      badge: "Most Popular",
      highlight: true,
      features: [
        "Full agentic execution",
        "Self-LLM-based evaluation test scripts",
        "CI/CD integrations",
        "Advanced analytics",
        "Email & Slack support",
      ],
      cta: {
        text: "Request Demo",
        href:"/demo",
        bgClass:
          "bg-[radial-gradient(66.19%_497.1%_at_50%_50%,_#015190_0%,_#015190_50.32%,_#6AC0E6_100%)]",
      },
    },
    {
      id: "scale",
      title: "Scale",
      subtitle: "For platform & AI teams",
      size: "md:w-[400px] w-[100%] min-h-[400px]",
      features: [
        "Unlimited agents",
        "AI testing & RAG validation",
        "Governance & audit logs",
        "Role-based access",
        "Priority support",
      ],
      cta: {
        text: "Talk to Sales",
        bgClass: "bg-[#1E1E1E]",
      },
    },
  ],
};

export default PricingPage;
