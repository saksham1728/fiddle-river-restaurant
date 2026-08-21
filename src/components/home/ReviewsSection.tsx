import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, X } from 'lucide-react';

const reviews = [
  {
    initials: 'JT',
    name: 'John T.',
    title: 'TripAdvisor Review • Alberta, Canada',
    text: "Best seafood in Jasper! The Earl Grey Smoked Candied Salmon is absolutely incredible — unlike anything I've tasted before. Fresh, flavorful, and beautifully presented. The upstairs location gives you a cozy mountain lodge feel with great views. Staff were attentive and knowledgeable about the menu. Highly recommend for anyone visiting Jasper!",
  },
  {
    initials: 'SM',
    name: 'Sarah M.',
    title: 'Google Review • British Columbia',
    text: "We've been coming to Fiddle River for years and it never disappoints. The seafood chowder is rich and creamy, packed with fresh seafood. The coconut prawns are a must-try appetizer. The wooden interior creates such a warm, inviting atmosphere — perfect after a day exploring the Rockies. Service is always friendly and efficient. A Jasper institution!",
  },
  {
    initials: 'DL',
    name: 'David L.',
    title: 'TripAdvisor Review • Ontario',
    text: "Exceptional dining experience in the heart of Jasper! The seafood is flown in daily and you can taste the freshness. I had the wild salmon and my wife had the halibut — both were cooked to perfection. The rustic charm of the restaurant combined with mountain hospitality makes this a memorable dining experience. Don't miss the seafood platter if you're sharing!",
  },
  {
    initials: 'MK',
    name: 'Michelle K.',
    title: 'Yelp Review • California, USA',
    text: "Fiddle River is a hidden gem upstairs on Connaught Drive! The atmosphere is cozy and authentic Rocky Mountain style. We tried the seafood tower and were blown away by the variety and quality. The Alberta beef was also fantastic. Staff made us feel welcome and gave great recommendations. This is a must-visit when in Jasper!",
  },
  {
    initials: 'RP',
    name: 'Robert P.',
    title: 'TripAdvisor Review • Texas, USA',
    text: "Outstanding restaurant! Been to Jasper many times and Fiddle River is always our first stop. The combination of fresh seafood and Canadian mountain cuisine is unbeatable. Try the bison if you want something different — tender and delicious. The upstairs location has great ambiance with timber beams and mountain views. Excellent wine selection too. Worth every penny!",
  },
];

// Approximate char count for 5 lines at card width
const MAX_CHARS = 220;

export const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeReview, setActiveReview] = useState<typeof reviews[0] | null>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className="py-32 px-6 md:px-20 bg-void relative overflow-hidden">
      {/* decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent opacity-50" />
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent opacity-50" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-jost text-[13px] text-gold uppercase tracking-[0.3em] mb-4 block">
            Guest Experiences
          </span>
          <h2 className="font-cormorant text-[40px] md:text-[56px] text-ivory mb-6 leading-none">
            Voices of Our Guests
          </h2>
          <div className="w-12 h-px bg-gold/50 mx-auto" />
        </div>

        {/* carousel wrapper */}
        <div className="relative">

          {/* left arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll reviews left"
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full border border-gold/30 bg-void/80 backdrop-blur-sm text-gold hover:bg-gold hover:text-void transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* right arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll reviews right"
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full border border-gold/30 bg-void/80 backdrop-blur-sm text-gold hover:bg-gold hover:text-void transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* scrollable track */}
          <div
            ref={scrollRef}
            className="flex flex-nowrap overflow-x-auto gap-6 pb-4 snap-x snap-mandatory w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => {
              const isLong = review.text.length > MAX_CHARS;
              const truncated = isLong ? review.text.slice(0, MAX_CHARS).trimEnd() + '…' : review.text;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="w-[85vw] md:w-[560px] shrink-0 snap-center md:snap-start"
                >
                  <div className="bg-obsidian border border-white/5 hover:border-gold/30 p-8 md:p-10 md:px-12 relative group transition-all duration-500 rounded-sm flex flex-col h-full min-h-[320px]">
                    <Quote
                      className="absolute top-8 left-8 md:left-12 w-10 h-10 text-white/5 group-hover:text-gold/10 transition-colors duration-500"
                      strokeWidth={1}
                    />

                    {/* review text — truncated */}
                    <div className="flex-1">
                      <p className="font-cormorant italic text-[20px] md:text-[22px] text-cream leading-relaxed relative z-10 pr-6 pt-2">
                        {truncated}
                      </p>
                      {isLong && (
                        <button
                          onClick={() => setActiveReview(review)}
                          className="mt-3 font-jost text-[11px] text-gold uppercase tracking-widest hover:text-cream transition-colors duration-300 flex items-center gap-1 group/btn"
                        >
                          See more
                          <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                      )}
                    </div>

                    {/* author */}
                    <div className="flex items-center gap-5 border-t border-white/5 pt-6 group-hover:border-gold/20 transition-colors duration-500 mt-6 shrink-0">
                      <div className="w-11 h-11 shrink-0 flex items-center justify-center font-jost font-medium text-[13px] bg-charcoal text-gold border border-gold/20 rounded-full">
                        {review.initials}
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="font-dmSans font-medium text-ivory text-[15px] tracking-wide mb-1">
                          {review.name}
                        </h3>
                        <p className="font-jost text-[10px] text-smoke/70 uppercase tracking-widest leading-snug">
                          {review.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            {/* trailing spacer */}
            <div className="w-10 shrink-0 pointer-events-none" />
          </div>
        </div>

        {/* mobile scroll hint */}
        <div className="flex justify-center mt-6 md:hidden">
          <motion.span
            className="font-jost text-[11px] text-gold tracking-[0.3em] uppercase flex items-center gap-2"
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            ← swipe to explore →
          </motion.span>
        </div>

        {/* desktop hint (fades out after a few seconds via CSS) */}
        <div className="hidden md:flex justify-center mt-6">
          <span className="font-jost text-[12px] text-gold tracking-[0.3em] uppercase">
            use arrows or drag to explore
          </span>
        </div>
      </div>

      {/* ── Full Review Popup ── */}
      <AnimatePresence>
        {activeReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md px-6"
            onClick={() => setActiveReview(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 24, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative bg-obsidian border border-gold/20 rounded-sm max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* close */}
              <button
                onClick={() => setActiveReview(null)}
                className="absolute top-5 right-5 z-20 text-fog hover:text-gold transition-colors bg-obsidian/80 backdrop-blur-sm rounded-full p-1"
                aria-label="Close"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>

              <div className="p-10 md:p-14 overflow-y-auto relative w-full h-full custom-scrollbar">
                <Quote
                  className="absolute top-10 left-10 md:left-14 w-10 h-10 text-gold/10"
                  strokeWidth={1}
                />

                <p className="font-cormorant italic text-[18px] md:text-[20px] text-cream leading-relaxed mb-10 pt-10 md:pt-12 relative z-10">
                  {activeReview.text}
                </p>

                <div className="flex items-center gap-5 border-t border-white/10 pt-6 relative z-10">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center font-jost font-medium text-[14px] bg-charcoal text-gold border border-gold/20 rounded-full">
                    {activeReview.initials}
                  </div>
                  <div>
                    <h3 className="font-dmSans font-medium text-ivory text-[16px] mb-1">{activeReview.name}</h3>
                    <p className="font-jost text-[10px] text-smoke/70 uppercase tracking-widest leading-snug">{activeReview.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReviewsSection;
