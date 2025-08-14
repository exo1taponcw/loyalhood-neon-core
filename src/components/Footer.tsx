import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t neon-border py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="text-center md:text-left lg:col-span-1">
            <h3 className="text-3xl font-black font-orbitron gradient-text mb-4">
              LoyalHOOD
            </h3>
            <p className="text-muted-foreground font-exo mb-4 leading-relaxed">
              Next-Level VPS Hosting for Gamers & Developers. High-performance servers with 24/7 Discord support.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://loyalhood.xyz/discord" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                <img src="/src/assets/icons/discord.svg" alt="Discord" className="w-6 h-6 brightness-0 invert opacity-75 hover:opacity-100" />
              </a>
              <a href="https://instagram.com/loyalhood" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                <img src="/src/assets/icons/instagram.svg" alt="Instagram" className="w-6 h-6 brightness-0 invert opacity-75 hover:opacity-100" />
              </a>
              <a href="https://youtube.com/loyalhood" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                <img src="/src/assets/icons/youtube.svg" alt="YouTube" className="w-6 h-6 brightness-0 invert opacity-75 hover:opacity-100" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-bold font-orbitron mb-6 text-foreground">
              Navigation
            </h4>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('features')}
                className="block mx-auto lg:mx-0 text-muted-foreground hover:text-primary transition-colors font-exo hover:translate-x-1 transition-transform"
              >
                Features & Performance
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block mx-auto lg:mx-0 text-muted-foreground hover:text-primary transition-colors font-exo hover:translate-x-1 transition-transform"
              >
                VPS Plans & Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block mx-auto lg:mx-0 text-muted-foreground hover:text-primary transition-colors font-exo hover:translate-x-1 transition-transform"
              >
                About Us
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-bold font-orbitron mb-6 text-foreground">
              Services
            </h4>
            <div className="space-y-3">
              <p className="text-muted-foreground font-exo">VPS Hosting</p>
              <p className="text-muted-foreground font-exo">Game Server Hosting</p>
              <p className="text-muted-foreground font-exo">Developer Solutions</p>
              <p className="text-muted-foreground font-exo">24/7 Discord Support</p>
            </div>
          </div>
          
          {/* Contact & Support */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-bold font-orbitron mb-6 text-foreground">
              Get Started Today
            </h4>
            <Button 
              variant="cta" 
              size="lg"
              className="mb-4 w-full lg:w-auto"
              asChild
            >
              <a href="https://loyalhood.xyz/discord" target="_blank" rel="noopener noreferrer">
                Join Discord Server
              </a>
            </Button>
            <p className="text-sm text-muted-foreground font-exo mb-4 leading-relaxed">
              Join our community for instant support, custom solutions, and exclusive offers.
            </p>
            <div className="text-xs text-muted-foreground font-exo">
              <p>💬 Instant Discord Support</p>
              <p>⚡ Same-day Setup</p>
              <p>🔒 99.9% Uptime Guarantee</p>
            </div>
          </div>
        </div>

        {/* Features Banner */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <h5 className="font-bold font-orbitron text-primary">High Performance</h5>
              <p className="text-sm text-muted-foreground font-exo">NVMe SSD storage with AMD Ryzen processors</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-bold font-orbitron text-primary">Full Root Access</h5>
              <p className="text-sm text-muted-foreground font-exo">Complete server control via SSH</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-bold font-orbitron text-primary">Community Support</h5>
              <p className="text-sm text-muted-foreground font-exo">24/7 help through our Discord server</p>
            </div>
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