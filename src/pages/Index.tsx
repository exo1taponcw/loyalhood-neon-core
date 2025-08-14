import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Social Sidebar */}
      <SocialSidebar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
