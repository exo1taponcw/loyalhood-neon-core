import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-black font-orbitron mb-6 gradient-text animate-neon-pulse">
          LoyalHOOD
        </h1>
        
        <p className="text-xl md:text-2xl font-exo mb-4 text-muted-foreground">
          Next-Level VPS Hosting for Gamers & Developers
        </p>
        
        <p className="text-lg md:text-xl font-exo mb-8 text-muted-foreground/80 max-w-2xl mx-auto">
          Experience ultra-high performance with SSD NVMe storage, full root access, 
          and 24/7 community support through Discord.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cta" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto animate-float"
            asChild
          >
            <a href="https://loyalhood.xyz/discord" target="_blank" rel="noopener noreferrer">
              Join Discord to Purchase VPS
            </a>
          </Button>
          
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;