import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSlider from '../components/home/HeroSlider';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LocationShowcase } from '../components/home/LocationShowcase';
import MistCanvas from '../components/MistCanvas';
import ReviewsSection from '../components/home/ReviewsSection';
import SeafoodGallery from '../components/home/SeafoodGallery';
import FoodCarousel from '../components/home/FoodCarousel';

export const Home = () => {
  const navigate = useNavigate();
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);


  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  useEffect(() => {
    document.body.classList.add('is-front');
    return () => document.body.classList.remove('is-front');
  }, []);

  useEffect(() => {
    AOS.init({ once: true });


    if (heroTextRef.current) {
      gsap.fromTo(heroTextRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 3
        }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%'
          }
        }
      );
    }
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };


  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-void min-h-screen text-cream overflow-hidden"
    >
      {/* hero sec */}
      <section className="relative h-[100svh] flex flex-col items-center justify-center pt-20 overflow-hidden">
        <HeroSlider />

        <MistCanvas />

        {/* cinematic overlay */}
        <div className="absolute inset-0 z-[2] bg-[var(--grad-hero)]" />
        <div className="absolute inset-0 z-[2] bg-black/35" />

        <div className="relative z-[3] max-w-[1920px] mx-auto px-6 text-center mt-8 md:mt-12">
          <h2 className="font-jost text-[14px] text-gold tracking-[0.4em] uppercase mb-6" data-aos="fade-down" data-aos-delay="2000">
            Jasper's Premier Seafood Restaurant
          </h2>
          <h1
            ref={heroTextRef}
            className="hero-headline-on-image font-cormorant text-[max(40px,8vw)] leading-none tracking-tight mb-8 font-normal opacity-90 drop-shadow-xl"
          >
            <span className="inline-block bg-gradient-to-b from-white via-[#FFF9EE] to-[#D4AF7A] text-transparent bg-clip-text select-none pb-2">Taste</span> <span className="inline-block bg-gradient-to-b from-white via-[#FFF9EE] to-[#D4AF7A] text-transparent bg-clip-text select-none pb-2">Jasper,</span><br />
            <span className="inline-block bg-gradient-to-b from-white via-[#FFF9EE] to-[#D4AF7A] text-transparent bg-clip-text select-none pb-2">From</span> <span className="inline-block bg-gradient-to-b from-white via-[#FFF9EE] to-[#D4AF7A] text-transparent bg-clip-text select-none pb-2">River</span> <span className="inline-block bg-gradient-to-b from-white via-[#FFF9EE] to-[#D4AF7A] text-transparent bg-clip-text select-none pb-2">to</span> <span className="inline-block bg-gradient-to-b from-white via-[#FFF9EE] to-[#D4AF7A] text-transparent bg-clip-text select-none pb-2">Rockies</span>
          </h1>
          <p className="font-dmSans text-[17px] md:text-[20px] text-ivory/90 max-w-[700px] mx-auto leading-relaxed mt-6" data-aos="fade-up" data-aos-delay="2200">
            Fresh seafood, Canadian flavours & warm mountain hospitality
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 z-[3] -translate-x-1/2 flex justify-center w-full max-w-[200px]">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-3 group cursor-pointer hover:scale-105 transition-transform duration-500"
            data-aos="fade-up" data-aos-delay="2500"
          >
            <span className="font-jost text-[12px] text-white/70 group-hover:text-gold uppercase tracking-widest transition-colors duration-500">Scroll to Discover</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-gold/50 to-transparent group-hover:from-gold transition-colors duration-500" />
            <ChevronDown className="w-4 h-4 text-white/50 group-hover:text-gold animate-bounce" strokeWidth={1} />
          </button>
        </div>
      </section>
      
      {/* feat sec */}
      <section
        ref={sectionRef}
        className="py-16 px-6 md:px-20 bg-void max-w-[1920px] mx-auto min-h-screen flex items-center relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >

        <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 mix-blend-screen"
          style={{ background: 'radial-gradient(1000px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.03), transparent 40%)' }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto w-full relative z-10 items-center">
          
          {/* Left Side - Menu Content */}
          <div className="flex flex-col text-left">
            <span className="font-jost text-[10px] text-gold uppercase tracking-[0.2em] mb-4 block">Our Menu</span>
            <h3 className="font-cormorant text-[36px] md:text-[48px] text-ivory mb-6 leading-tight">
              Fresh from Ocean to Rockies.
            </h3>
            <p className="font-dmSans text-[18px] text-smoke leading-relaxed mb-8">
              Since 1993, Fiddle River has been celebrated for fresh seafood flown in daily, alongside wild game and Alberta AAA beef. Our menu features Earl Grey Smoked Candied Salmon, Creamy Seafood Chowder, Coconut Prawns, and locally-sourced ingredients that honour Western Canada's culinary heritage.
            </p>
            <button onClick={() => navigate('/menu')} className="self-start border-b border-gold pb-2 font-jost text-[11px] text-gold uppercase tracking-widest hover:text-cream transition-colors group">
              Explore the Menu <span className="inline-block group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>

          {/* Right Side - Dark Green Card */}
          <div className="bg-gradient-to-br from-[#0f2319] to-[#1a3d2e] border border-[#2d5a45] rounded-lg p-8 md:p-10 shadow-2xl">
            <h4 className="font-cormorant text-[32px] md:text-[40px] text-ivory mb-6 leading-tight text-center">
              Join us for Lunch or Dinner
            </h4>
            
            <div className="space-y-4 mb-8 text-center">
              <div>
                <p className="font-jost text-[13px] text-gold uppercase tracking-widest mb-2">
                  Fiddle River Restaurant is open daily
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="border-t border-[#2d5a45] pt-3">
                  <p className="font-dmSans text-[16px] text-cream/90 mb-1">
                    <span className="text-gold font-medium">Lunch</span> from 11:30am to 5:00pm
                  </p>
                </div>
                
                <div className="border-t border-[#2d5a45] pt-3">
                  <p className="font-dmSans text-[16px] text-cream/90 mb-1">
                    <span className="text-gold font-medium">Dinner</span> daily from 5:00pm to 9:00pm
                  </p>
                </div>
              </div>
            </div>

            <p className="font-jost text-[13px] text-cream/70 text-center mb-6 italic">
              We look forward to serving you!
            </p>

            <button 
              onClick={() => navigate('/contact')}
              className="w-full bg-gold hover:bg-gold/90 text-[#0f2319] font-jost text-[12px] uppercase tracking-widest py-4 px-8 transition-all duration-300 hover:scale-[1.02] font-semibold"
            >
              Reserve Your Table
            </button>
          </div>

        </div>
      </section>

      <SeafoodGallery />

      <LocationShowcase />

      <ReviewsSection />

      <FoodCarousel />

    </motion.main>
  );
};
