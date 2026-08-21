import { motion } from 'framer-motion';

const images = [
  "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312953/fiddleriverjasper_Crispy_calamari_with_a_fresh_twist._Spiced_squid_rings__lemo_2026-05-30_DY-CofaAWcu_390857310519855697.jpg",
  "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312953/fiddleriverjasper_Crispy_Calamari_Spiced_squid_rings_with_lemon_twist___red_on_2023-03-13_CptB-wNrqpY_305710843247766178.jpg",
  "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312953/fiddleriverjasper_Crisp__warm_toasted_baguette_topped_with_a_medley_of_wild_mu_2025-04-03_DH_ainNCKfl_360271495468578608.jpg",
  "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312953/fiddleriverjasper_Creamy__comforting__and_full_of_coastal_flavour___Our_Seaf_2026-03-24_DWPn9HPkpfe_385947912915927651.jpg",
  "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312954/fiddleriverjasper_Crispy_cod__crunchy_fries__and_a_slaw_with_a_twist___Enjoy_o_2026-06-29_DaLP9lZjFvx_393030530255371364.jpg"
];

const container: any = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const item: any = {
  hidden: { scale: 0.95, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } }
};

const GalleryHero = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-void">
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute inset-0 w-full h-full grid grid-cols-2 md:grid-cols-3 grid-rows-4 md:grid-rows-2 gap-1 md:gap-0"
      >
        {/* left cell */}
        <motion.div variants={item} className="col-span-2 md:col-span-1 row-span-2 relative overflow-hidden bg-charcoal">
          <img src={images[0]} alt="Gallery feature 1" className="w-full h-full object-cover" />
        </motion.div>

        {/* right cell */}
        <motion.div variants={item} className="col-span-2 row-span-1 relative overflow-hidden bg-charcoal hidden md:block">
          <img src={images[1]} alt="Gallery feature 2" className="w-full h-full object-cover" />
        </motion.div>

        {/* middle cell */}
        <motion.div variants={item} className="col-span-1 row-span-1 relative overflow-hidden bg-charcoal">
          <img src={images[2]} alt="Gallery feature 3" className="w-full h-full object-cover" />
        </motion.div>

        {/* bottom right cell */}
        <motion.div variants={item} className="col-span-1 row-span-1 relative overflow-hidden bg-charcoal">
          <img src={images[3]} alt="Gallery feature 4" className="w-full h-full object-cover" />
        </motion.div>

        
        <motion.div variants={item} className="col-span-2 row-span-1 relative overflow-hidden bg-charcoal md:hidden">
          <img src={images[1]} alt="Gallery feature 2 mobile" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* cont */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col items-center text-center z-10 pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="block font-jost text-[12px] uppercase tracking-[0.2em] text-gold mb-4 hero-label-on-image"
        >
          Visual Journey
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="font-cormorant text-5xl md:text-7xl text-ivory mb-6 hero-headline-on-image"
        >
          The Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="font-dmSans text-[16px] text-cream/90 hero-subtext-on-image"
        >
          Every image, a story of flavors and moments.
        </motion.p>
      </div>
    </section>
  );
};

export default GalleryHero;
