import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const videoSrc = isMobile 
    ? '/WhatsApp Video 2026-08-20 at 12.40.32.mp4' 
    : '/videoplayback (1).mp4';

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <motion.div
        key={videoSrc}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.85 }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </motion.div>
    </div>
  );
};

export default HeroSlider;
