import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background/95">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-8 gradient-text">
          About LoyalHOOD
        </h2>
        
        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl neon-border">
          <p className="text-lg md:text-xl font-exo text-muted-foreground leading-relaxed mb-6">
            LoyalHOOD represents the future of VPS hosting, specifically designed for the gaming and 
            development communities. We understand that performance isn't just a feature—it's everything. 
            That's why every server is powered by cutting-edge SSD NVMe storage and high-frequency CPU cores 
            running at 5700 MHz.
          </p>
          
          <p className="text-lg md:text-xl font-exo text-muted-foreground leading-relaxed mb-6">
            Our community-driven approach means you're not just getting a server—you're joining a network 
            of like-minded developers and gamers. Through our Discord-based support system, you'll have 
            access to real-time help from both our team and fellow community members who understand your challenges.
          </p>
          
          <p className="text-lg md:text-xl font-exo text-muted-foreground leading-relaxed mb-8">
            With full root access and SSH control, you have the freedom to configure your environment 
            exactly as you need it. No restrictions, no limitations—just pure performance and complete control.
          </p>
          
          <Button 
            variant="cta" 
            size="lg"
            className="text-lg px-8 py-4 h-auto"
            asChild
          >
            <a href="https://loyalhood.xyz/discord" target="_blank" rel="noopener noreferrer">
              Join Our Community
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;