import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ArrowUpRight, Car } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Part1Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const headingRefs = useRef<Array<HTMLHeadingElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(imageRef.current, {
        yPercent: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });


      if (headingRefs.current.length > 0) {
        gsap.fromTo(
          headingRefs.current,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 60%',
            }
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] lg:h-[90vh] overflow-hidden bg-void flex flex-col justify-end max-md:pb-32">
      {/* back img */}
      <img
        ref={imageRef}
        src="/mountain.webp"
        alt="A'Lankaa Resorts Aerial View"
        className="absolute inset-0 w-full h-[120%] object-cover object-center -top-[10%]"
      />


      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.5) 40%, rgba(8,8,8,0.1) 70%, rgba(8,8,8,0) 100%)'
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(8,8,8,0.6) 0%, rgba(8,8,8,0) 50%)'
        }}
      />


      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* top left */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 p-[24px] lg:p-[56px]"
      >
        <p className="font-jost text-[10px] text-gold uppercase tracking-[0.5em] max-md:tracking-[0.3em]">
          CANADA · ALBERTA · JASPER
        </p>
      </motion.div>

      {/* top right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 p-[24px] lg:p-[56px] text-right"
      >
        <p className="font-cormorant italic text-[18px] text-smoke opacity-60">52°N 118°W</p>
        <p className="font-jost text-[11px] text-gold uppercase tracking-[0.3em] mt-1 hidden md:block">SECOND FLOOR</p>
      </motion.div>

      {/* bottom center part */}
      <div className="relative lg:absolute lg:inset-x-0 lg:bottom-0 p-[24px] lg:p-[56px_80px] mt-[120px] lg:mt-0 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 z-10 w-full">
        {/* bottom lft */}
        <div className="w-full lg:w-auto">
          <p className="gold-label-on-image font-jost text-gold text-[10px] uppercase tracking-[0.4em] mb-4">
            THE DESTINATION
          </p>
          <div className="hero-headline-on-image font-cormorant text-[clamp(40px,5vw,72px)] text-ivory font-light leading-[0.95]">
            <h2 ref={el => { headingRefs.current[0] = el; }} className="pb-1">Upstairs dining,</h2>
            <h2 ref={el => { headingRefs.current[1] = el; }} className="pb-1">mountain views.</h2>
          </div>
          <p className="hero-subtext-on-image font-dmSans text-[18px] max-md:text-[14px] text-white/90 max-w-[520px] leading-[1.9] mt-5">
            Located on the second floor at 620 Connaught Drive in Jasper, Alberta. Fiddle River Restaurant offers premier seafood and Rocky Mountain cuisine with scenic mountain views. A true culinary destination in the heart of the Canadian Rockies.
          </p>

          {/* stst */}
          <div className="flex gap-4 lg:gap-[48px] mt-8 overflow-hidden items-center bg-black/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <StatsCounter number="11:30 AM" label="Lunch Opens" />
            <div className="w-px h-[40px] bg-mist max-md:mx-2" />
            <StatsCounter number="5:00 PM" label="Dinner Starts" />
            <div className="w-px h-[40px] bg-mist max-md:mx-2" />
            <StatsCounter number="9:00 PM" label="Closes" />
          </div>
        </div>

        {/* bottom right card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full lg:w-[280px] bg-black/85 backdrop-blur-[20px] border border-gold/20 border-l-[2px] border-l-gold p-8 max-md:p-6 rounded-[2px]"
        >
          <p className="font-jost text-[12px] text-gold uppercase tracking-[0.3em]">
            HOW TO REACH US
          </p>
          <div className="w-[32px] h-[1px] bg-gold my-4" />

          <div className="space-y-6 max-md:space-y-4">
            <div className="flex gap-4">
              <MapPin className="w-[18px] h-[18px] text-gold shrink-0 mt-1" />
              <div>
                <p className="card-heading-on-image font-dmSans font-medium text-[18px] text-cream">620 Connaught Drive</p>
                <p className="card-text-on-image font-dmSans font-light text-[14px] text-smoke mt-1">Upstairs, Second Floor</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Car className="w-[18px] h-[18px] text-gold shrink-0 mt-1" />
              <div>
                <p className="card-heading-on-image font-dmSans font-medium text-[18px] text-cream">Call for Reservations</p>
                <p className="card-text-on-image font-dmSans font-light text-[14px] text-smoke mt-1">+1 780-852-3032</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-mist w-full my-5" />

          <a href="https://maps.app.goo.gl/FiddleRiverJasper" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-jost text-[14px] text-gold uppercase hover:text-gold-light transition-colors duration-300">
            Get Directions <ArrowUpRight className="w-[14px] h-[14px]" />
          </a>
        </motion.div>
      </div>


      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-10 overflow-hidden">
          <div className="w-full h-full bg-gold animate-[lineToBottom_2s_ease-in-out_infinite]" />
        </div>
        <span className="font-jost text-[10px] text-gold tracking-[0.4em] uppercase">EXPLORE NEARBY</span>
      </div>

      <style>{`
        @keyframes lineToBottom {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

const StatsCounter = ({ number, label }: { number: string; label: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col gap-1"
    >
      <span className="card-heading-on-image font-cormorant text-[36px] text-gold leading-none">{number}</span>
      <span className="card-text-on-image font-jost text-[13px] text-white/80 uppercase">{label}</span>
    </motion.div>
  );
};

const Part2Attractions = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.querySelectorAll('.word-reveal'),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
            }
          }
        );
      }
    }, headerRef);
    return () => ctx.revert();
  }, []);

  const attractions = [
    {
      badge: "RUSTIC CHARM",
      category: "EXTERIOR",
      title: "Mountain Lodge Entrance",
      location: "Second Floor, Connaught Drive",
      desc: "Fiddle River's warm wooden exterior welcomes you with classic Rocky Mountain lodge architecture — inviting stairs leading to cozy alpine dining.",
      image: "/woody-1.webp",
      mapLink: "https://maps.app.goo.gl/FiddleRiverJasper"
    },
    {
      badge: "ALPINE AESTHETIC",
      category: "ARCHITECTURE",
      title: "Timber & Stone Design",
      location: "Jasper Heritage Building",
      desc: "Rich wood beams, stone accents, and mountain-inspired details create an authentic Canadian Rockies dining atmosphere — rustic yet refined.",
      image: "/woody-2.webp",
      mapLink: "https://maps.app.goo.gl/FiddleRiverJasper"
    },
    {
      badge: "SCENIC LOCATION",
      category: "MOUNTAIN VIEWS",
      title: "Upstairs Dining",
      location: "Connaught Drive Centre",
      desc: "Elevated dining with panoramic windows overlooking Jasper's main street and surrounding peaks — where mountain hospitality meets culinary excellence.",
      image: "/woody-4.webp",
      mapLink: "https://maps.app.goo.gl/FiddleRiverJasper"
    },
    {
      badge: "AUTHENTIC VIBE",
      category: "AMBIANCE",
      title: "Warm Wood Interior",
      location: "Classic Jasper Dining",
      desc: "Step inside to discover intimate wooden interiors, soft lighting, and a welcoming atmosphere — the perfect setting for seafood and mountain cuisine.",
      image: "/woody-3.webp",
      mapLink: "https://maps.app.goo.gl/FiddleRiverJasper"
    }
  ];

  return (
    <section className="bg-obsidian py-[60px] lg:py-[80px] px-[32px] lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto">

        {/* header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div>
            <p className="font-jost text-[12px] text-gold uppercase tracking-[0.4em] mb-6">
              THE RESTAURANT
            </p>
            <h2 className="font-cormorant text-[clamp(36px,4vw,60px)] text-ivory font-light leading-tight">
              <div className="overflow-hidden"><span className="inline-block word-reveal">Rustic charm meets</span></div>
              <div className="overflow-hidden"><span className="inline-block word-reveal">mountain elegance.</span></div>
            </h2>
          </div>
          <div>
            <p className="font-dmSans text-[18px] text-smoke leading-[1.9] font-light max-w-[500px]">
              Experience Fiddle River's warm, woody aesthetic — where timber beams, stone accents, and alpine architecture create an authentic Canadian Rockies dining atmosphere.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-mist my-[48px]" />

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {attractions.map((attr, idx) => (
            <motion.div
              key={attr.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              viewport={{ once: true, margin: '-10%' }}
              className="relative h-[360px] lg:h-[480px] overflow-hidden group border border-transparent hover:border-gold/40 transition-colors duration-500"
            >
              <img
                src={attr.image}
                alt={attr.title}
                className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent bottom-0 h-full pointer-events-none" />

              <div className="absolute top-6 left-6 inline-block bg-gold px-[14px] py-[6px] font-jost text-[13px] text-void tracking-[0.15em] font-medium z-10 transition-transform duration-500 group-hover:scale-105">
                {attr.badge}
              </div>

              <div className="absolute inset-x-8 bottom-10 z-10 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
                <span className="gold-label-on-image font-jost text-[12px] text-gold uppercase tracking-[0.2em] mb-2">
                  {attr.category}
                </span>
                <h3 className="card-heading-on-image font-cormorant text-[clamp(28px,3vw,40px)] text-ivory font-light leading-none">
                  {attr.title}
                </h3>
                <p className="card-text-on-image font-dmSans font-light text-[17px] text-smoke/90 mt-1">
                  {attr.location}
                </p>

                <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-700 mt-0 group-hover:mt-3">
                  <p className="card-text-on-image font-dmSans font-light text-[16px] text-smoke/80 leading-relaxed mb-3">
                    {attr.desc}
                  </p>
                 <a href={attr.mapLink} target="_blank" rel="noopener noreferrer" className="gold-label-on-image font-jost text-[20px] text-gold hover:text-gold-light inline-block relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-gold-light hover:after:w-full after:transition-all after:duration-300">
                    Learn More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const LocationShowcase = () => {
  return (
    <>
      <Part1Hero />
      <Part2Attractions />
    </>
  );
};
