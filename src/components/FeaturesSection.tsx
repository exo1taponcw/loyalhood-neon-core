import { Zap, Shield, MessageCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "High Performance VPS",
      description: "SSD NVMe storage with ultra-fast CPU cores running at 5700 MHz for maximum performance and reliability."
    },
    {
      icon: Shield,
      title: "Full Root Access", 
      description: "Complete SSH access and full server control. Configure your environment exactly how you need it."
    },
    {
      icon: MessageCircle,
      title: "24/7 Discord Support",
      description: "Community-based help anytime through our dedicated Discord server. Real support from real people."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-background/95">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-6 gradient-text">
            What Makes LoyalHOOD Special
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-exo">
            Experience next-generation hosting with features designed for gamers and developers who demand the best.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card p-8 rounded-xl neon-border hover-glow group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center neon-glow">
                  <feature.icon className="w-8 h-8 text-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold font-orbitron mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground font-exo leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;