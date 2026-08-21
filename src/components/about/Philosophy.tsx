import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const Philosophy = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center p-8 lg:p-[80px]"
      style={{ background: 'var(--grad-forest)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full space-y-16">
        
        {/* Our Restaurant Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/[0.02] border border-gold/10 p-12 lg:p-16 rounded-[2px]"
        >
          <h3 className="font-cormorant text-[40px] text-ivory mb-8 text-center">
            Our Restaurant
          </h3>
          <div className="font-dmSans font-light text-[16px] text-smoke/90 leading-[2] tracking-wide space-y-6">
            <p>
              Welcome to Jasper's cozy Rocky Mountain restaurant. Located on the 2nd floor gives our patrons a beautiful scenic view of the Jasper mountains and scenery. Fiddle River is Jasper's premier seafood restaurant and serves fresh fish, seafood, wild game and Alberta AAA beef. Interesting appetizers include Earl Grey Smoked Candied Salmon, Fish Cakes, Creamy Seafood Chowder and Coconut Prawns.
            </p>
            <p>
              We also feature a variety of salads, pasta dishes and vegetarian entrees. A reasonable wine list and great service are additional reasons why you should make your dinner reservations tonight. Enjoy our outdoor patio while overlooking Jasper's beautiful mountains.
            </p>
          </div>
        </motion.div>

        {/* Seasonal and Local Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/[0.02] border border-gold/10 p-12 lg:p-16 rounded-[2px]"
        >
          <h3 className="font-cormorant text-[40px] text-ivory mb-8 text-center">
            Seasonal and Local
          </h3>
          <div className="font-dmSans font-light text-[16px] text-smoke/90 leading-[2] tracking-wide text-center max-w-3xl mx-auto">
            <p>
              We refuse to compromise on quality in our restaurant. That's why we source our fresh ingredients from local & regional farmers' markets.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
