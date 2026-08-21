import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSlider from '../components/home/HeroSlider';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import PhotographyFeature from '../components/home/PhotographyFeature';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LocationShowcase } from '../components/home/LocationShowcase';
import MistCanvas from '../components/MistCanvas';
import ReviewsSection from '../components/home/ReviewsSection';
import MountainIntro from '../components/home/MountainIntro';
import SeafoodGallery from '../components/home/SeafoodGallery';

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
      
      {/* Mountain Intro with Clouds Effect */}
      <MountainIntro />

      {/* feat sec */}
      <section
        ref={sectionRef}
        className="py-16 px-6 md:px-20 bg-void max-w-[1920px] mx-auto min-h-screen flex items-center relative overflow-hidden group"
        onMouseMove={handleMouseMove}
      >

        <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 mix-blend-screen"
          style={{ background: 'radial-gradient(1000px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.03), transparent 40%)' }}
        />

        <div className="flex flex-col items-center max-w-3xl mx-auto w-full relative z-10 text-center">
          <span className="font-jost text-[10px] text-gold uppercase tracking-[0.2em] mb-4 block">The Architecture</span>
          <h3 className="font-cormorant text-[36px] md:text-[48px] text-ivory mb-6 leading-tight">
            Crafted from the Earth.
          </h3>
          <p className="font-dmSans text-[19px] text-smoke mb-10 leading-relaxed">
            Every space within A'Lankaa has been thoughtfully designed to disappear into its surroundings. We utilize locally sourced stone, aged timber, and vast expanses of glass to ensure that nature remains the ultimate centerpiece.
          </p>
          <button onClick={() => navigate('/rooms')} className="border-b border-gold pb-2 font-jost text-[11px] text-gold uppercase tracking-widest hover:text-cream transition-colors group">
            Discover the Suites <span className="inline-block group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </section>

      <SeafoodGallery />

      <LocationShowcase />

      <ReviewsSection />

      <div className="h-[20vh] bg-void" />

      {/* photography sec */}
      <PhotographyFeature />

    </motion.main>
  );
};
