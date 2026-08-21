import { motion } from 'framer-motion';
import { OriginStory } from '../components/about/OriginStory';
import { Philosophy } from '../components/about/Philosophy';
import { Location } from '../components/about/Location';
import MountainIntro from '../components/home/MountainIntro';

export const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="bg-void min-h-screen" 
    >
      <MountainIntro />
      <OriginStory />
      <Philosophy />
      
      {/* Awards Section */}
      <section className="bg-gradient-to-b from-[#0f2319] to-[#1a3d2e] py-[60px] px-8 lg:px-[60px]">
        <div className="max-w-[1000px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src="/images/awards.jpeg" 
                  alt="Fiddle River Restaurant Awards"
                  className="relative w-full max-w-xs h-auto object-contain rounded-lg border border-gold/30 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center order-1 lg:order-2"
            >
              <h2 className="font-cormorant text-[36px] lg:text-[44px] text-ivory mb-4 font-light leading-tight">
                Awards & Recognition
              </h2>
              <p className="font-dmSans text-[14px] lg:text-[16px] text-cream/80 leading-relaxed mb-6">
                Celebrating excellence in dining and hospitality. Our commitment to fresh ingredients and exceptional service has earned us recognition.
              </p>
              <div className="h-px bg-gold/30 w-24 mb-4" />
              <p className="font-jost text-[11px] text-gold uppercase tracking-widest">
                Since 1993
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <Location />
    </motion.main>
  );
};


