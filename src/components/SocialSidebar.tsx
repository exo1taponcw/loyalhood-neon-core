import discordIcon from '@/assets/icons/discord.svg';
import instagramIcon from '@/assets/icons/instagram.svg';
import youtubeIcon from '@/assets/icons/youtube.svg';

const SocialSidebar = () => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        <a 
          href="https://loyalhood.xyz/discord" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon p-3 bg-card/80 backdrop-blur-sm rounded-full neon-border hover:neon-glow-red"
          aria-label="Join our Discord"
        >
          <img src={discordIcon} alt="Discord" className="w-6 h-6 brightness-0 invert" />
        </a>
        
        <a 
          href="https://instagram.com/loyalhood" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon p-3 bg-card/80 backdrop-blur-sm rounded-full neon-border hover:neon-glow-red"
          aria-label="Follow us on Instagram"
        >
          <img src={instagramIcon} alt="Instagram" className="w-6 h-6 brightness-0 invert" />
        </a>
        
        <a 
          href="https://youtube.com/loyalhood" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon p-3 bg-card/80 backdrop-blur-sm rounded-full neon-border hover:neon-glow-red"
          aria-label="Subscribe to our YouTube"
        >
          <img src={youtubeIcon} alt="YouTube" className="w-6 h-6 brightness-0 invert" />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;