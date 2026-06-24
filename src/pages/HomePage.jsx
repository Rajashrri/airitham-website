
import FeatureSection from "@/components/home/FeatureSection.jsx";
import PlatformSection from "@/components/home/PlatformSection.jsx";
import CapabilitySection from "@/components/home/CapabilitySection.jsx";
import EnterpriseSection from "@/components/home/EnterpriseSection.jsx";
import CommunitySection from "@/components/home/CommunitySection.jsx";
import TestimonialCarouselSection from "@/components/home/TestimonialCarouselSection.jsx";
import BlogsSection from "@/components/home/BlogSection.jsx";
import HeroSection from "@/components/home/HeroSection.jsx";
import Navbar from "@/components/Navbar.jsx";
import CtaSection from "@/components/home/CtaSection.jsx";
import FooterSection from "@/components/home/FooterSection";
import { HOME_CAPABILITY_CONFIG } from "@/config/homeConfig";
const HomePage = () => {
  return (
    <div className="homepage">

 <Navbar initialTextColor="text-white" />


      <HeroSection />
      <FeatureSection />
      <PlatformSection />
      <CapabilitySection {...HOME_CAPABILITY_CONFIG} />


      <EnterpriseSection />

      
      <CommunitySection />
      <TestimonialCarouselSection />
      <CtaSection />
      <BlogsSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
