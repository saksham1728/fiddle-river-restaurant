import { motion } from 'framer-motion';

const MountainIntro = () => {
  return (
    <section className="relative py-0 overflow-hidden min-h-[700px] flex items-end">
      {/* Background Image with Mountains */}
      <div className="absolute inset-0">
        <img 
          src="/about-us.webp" 
          alt="Mountain View from Fiddle River Restaurant" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay from bottom to hide cars and create tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-[42px] md:text-[72px] text-ivory mb-6 leading-tight"
          >
            Where Rockies Meet Exceptional Dining
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-jost text-[18px] md:text-[22px] text-cream/90 leading-relaxed max-w-3xl mx-auto mb-6"
          >
            Located on the 2nd floor in the heart of Jasper National Park, Fiddle River Restaurant offers stunning mountain views alongside fresh seafood, wild game, and authentic Canadian flavours.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-jost text-[16px] md:text-[18px] text-cream/70 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Since 1993, we've been serving exceptional food with genuine hospitality. Every dish celebrates local ingredients, every table overlooks Jasper's beautiful mountains, and every visit becomes part of your mountain adventure.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '1993', label: 'Established' },
              { number: '30+', label: 'Years of Excellence' },
              { number: 'Fresh', label: 'Local Ingredients' },
              { number: 'Jasper', label: 'Heart of the Rockies' },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-cormorant text-[36px] md:text-[52px] text-gold mb-2 whitespace-nowrap">
                  {item.number}
                </div>
                <div className="font-jost text-[11px] md:text-[13px] text-cream/70 uppercase tracking-[0.3em]">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MountainIntro;
