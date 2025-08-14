import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t neon-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black font-orbitron gradient-text mb-4">
              LoyalHOOD
            </h3>
            <p className="text-muted-foreground font-exo">
              Next-Level VPS Hosting for Gamers & Developers
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-bold font-orbitron mb-4 text-foreground">
              Quick Links
            </h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('features')}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors font-exo"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors font-exo"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors font-exo"
              >
                About
              </button>
            </div>
          </div>
          
          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold font-orbitron mb-4 text-foreground">
              Get Started
            </h4>
            <Button 
              variant="cta" 
              className="mb-4"
              asChild
            >
              <a href="https://loyalhood.xyz/discord" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
            <p className="text-sm text-muted-foreground font-exo">
              Join our community for instant support
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground font-exo">
            © 2025 LoyalHOOD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;