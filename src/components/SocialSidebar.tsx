import { useState } from 'react';
import { MessageCircle, Instagram, Youtube } from 'lucide-react';

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ${isVisible ? 'translate-x-0' : '-translate-x-16'}`}>
      <div className="flex flex-col gap-4">
        <a 
          href="https://loyalhood.xyz/discord" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon p-3 bg-card rounded-full neon-border hover:neon-glow-red"
          aria-label="Join our Discord"
        >
          <MessageCircle className="w-6 h-6 text-primary" />
        </a>
        
        <a 
          href="https://instagram.com/loyalhood" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon p-3 bg-card rounded-full neon-border hover:neon-glow-red"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="w-6 h-6 text-primary" />
        </a>
        
        <a 
          href="https://youtube.com/loyalhood" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon p-3 bg-card rounded-full neon-border hover:neon-glow-red"
          aria-label="Subscribe to our YouTube"
        >
          <Youtube className="w-6 h-6 text-primary" />
        </a>
      </div>
      
      <button 
        onClick={() => setIsVisible(!isVisible)}
        className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-card p-2 rounded-r-lg neon-border text-primary hover:neon-glow-red transition-all duration-300"
        aria-label={isVisible ? "Hide social menu" : "Show social menu"}
      >
        <span className={`transform transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`}>
          ›
        </span>
      </button>
    </div>
  );
};

export default SocialSidebar;