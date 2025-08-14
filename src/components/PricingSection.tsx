import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "LoyalHOOD-1",
      diskSpace: "50 GiB",
      ram: "8 GiB", 
      cpu: "4 cores @ 5700 MHz",
      controlPanel: "SSH",
      price: "$11.05/month",
      popular: false
    },
    {
      name: "LoyalHOOD-2",
      diskSpace: "100 GiB",
      ram: "16 GiB",
      cpu: "8 cores @ 5700 MHz", 
      controlPanel: "SSH",
      price: "$18.85/month",
      popular: true
    },
    {
      name: "LoyalHOOD-3",
      diskSpace: "200 GiB",
      ram: "24 GiB",
      cpu: "10 cores @ 5700 MHz",
      controlPanel: "SSH", 
      price: "$27.95/month",
      popular: false
    },
    {
      name: "LoyalHOOD-4",
      diskSpace: "500 GiB",
      ram: "32 GiB",
      cpu: "12 cores @ 5700 MHz",
      controlPanel: "SSH",
      price: "$41.60/month",
      popular: false
    },
    {
      name: "LoyalHOOD-5", 
      diskSpace: "800 GiB",
      ram: "64 GiB",
      cpu: "16 cores @ 5700 MHz",
      controlPanel: "SSH",
      price: "$68.90/month",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-6 text-foreground">
            Choose Your VPS Plan
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-exo">
            High-performance VPS hosting plans designed to scale with your needs. All plans include full root access and 24/7 Discord support.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`bg-card/90 backdrop-blur-sm p-4 lg:p-6 rounded-xl neon-border hover-glow relative animate-fade-in-up ${
                plan.popular ? 'ring-2 ring-secondary neon-glow-red' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full text-xs font-bold font-orbitron text-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-bold font-orbitron mb-3 lg:mb-4 gradient-text">
                  {plan.name}
                </h3>
                
                <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6 text-left">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-exo text-sm lg:text-base">
                      <strong className="text-primary">Disk:</strong> {plan.diskSpace}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-exo text-sm lg:text-base">
                      <strong className="text-primary">RAM:</strong> {plan.ram}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-exo text-sm lg:text-base">
                      <strong className="text-primary">CPU:</strong> {plan.cpu}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-exo text-sm lg:text-base">
                      <strong className="text-primary">Panel:</strong> {plan.controlPanel}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4 lg:mb-6">
                  <span className="text-2xl lg:text-3xl font-bold font-orbitron gradient-text">
                    {plan.price}
                  </span>
                </div>
                
                <Button 
                  variant="plan" 
                  size="sm"
                  className="w-full text-xs lg:text-sm"
                  asChild
                >
                  <a href="https://loyalhood.xyz/discord" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-foreground/70 font-exo">
            Need a custom solution? Contact us through Discord for enterprise plans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;