import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SeafoodGallery = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const st = ScrollTrigger.create({
      trigger: '.hero',
      start: 'top top',
      end: `+=${window.innerHeight * 4}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalImages = gsap.utils.toArray('.images .mask-img').length;
        const segmentSize = 1 / totalImages;

        gsap.utils.toArray('.images .mask-img').forEach((img: any, index: number) => {
          const imageStart = index * segmentSize;
          const imageEnd = (index + 1) * segmentSize;
          let imageProgress = 0;

          if (progress >= imageStart && progress <= imageEnd) {
            imageProgress = (progress - imageStart) / segmentSize;
          } else if (progress > imageEnd) {
            imageProgress = 1;
          }

          const leftgradie = 50 - (imageProgress * 50);
          const rightgradie = 50 + (imageProgress * 50);
          const deg = 90 + (imageProgress * 40);

          gsap.set(img, {
            maskImage: `linear-gradient(${deg}deg, black ${leftgradie}%, transparent ${leftgradie}%, transparent ${rightgradie}%, black ${rightgradie}%)`,
            webkitMaskImage: `linear-gradient(${deg}deg, black ${leftgradie}%, transparent ${leftgradie}%, transparent ${rightgradie}%, black ${rightgradie}%)`
          });
        });
      }
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="hero relative w-full h-screen overflow-hidden bg-black">
      {/* Images Stack */}
      <div className="images absolute inset-0 w-full h-full">
        {/* Base image - always visible, no mask */}
        <img
          src="/food-1.webp"
          alt="Seafood Dish 1"
          className="absolute w-full h-full object-cover object-center"
        />
        {/* Masked images - reveal on scroll - REVERSE ORDER like original */}
        <img
          src="/food-5.webp"
          alt="Seafood Dish 5"
          className="mask-img absolute w-full h-full object-cover object-center"
          style={{ ['--index' as any]: 5 }}
        />
        <img
          src="/food-4.webp"
          alt="Seafood Dish 4"
          className="mask-img absolute w-full h-full object-cover object-center"
          style={{ ['--index' as any]: 4 }}
        />
        <img
          src="/food-3.webp"
          alt="Seafood Dish 3"
          className="mask-img absolute w-full h-full object-cover object-center"
          style={{ ['--index' as any]: 3 }}
        />
        <img
          src="/food-2.webp"
          alt="Seafood Dish 2"
          className="mask-img absolute w-full h-full object-cover object-center"
          style={{ ['--index' as any]: 2 }}
        />
      </div>

      {/* Content Overlay */}
      <div className="content relative w-full h-full flex flex-col justify-between text-white pointer-events-none" style={{ zIndex: 10 }}>
        <div className="flex justify-between items-center p-8 md:p-12">
          <div className="text-left">
            <p className="text-base md:text-xl font-jost font-light drop-shadow-lg">Fresh Catch</p>
            <p className="text-base md:text-xl font-jost font-light drop-shadow-lg">Daily Specials</p>
          </div>
          <div className="text-right">
            <p className="text-base md:text-xl font-jost font-light drop-shadow-lg">Menu 2026</p>
            <p className="text-base md:text-xl font-jost font-light drop-shadow-lg">Seasonal</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center px-6 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p className="font-cormorant text-2xl md:text-4xl mb-4 drop-shadow-lg">Discover Our</p>
          </div>
          <div className="text-center mb-6">
            <h1 className="font-cormorant text-5xl md:text-8xl lg:text-9xl font-bold leading-tight text-ivory drop-shadow-2xl">
              Seafood Selection
            </h1>
          </div>
          <div className="text-center">
            <p className="font-cormorant text-2xl md:text-4xl text-gold drop-shadow-lg">Fresh & Exquisite</p>
          </div>
        </div>

        <div className="flex justify-between items-center p-8 md:p-12">
          <div className="text-left">
            <p className="text-base md:text-xl font-jost font-light drop-shadow-lg">Ocean Fresh</p>
            <p className="text-base md:text-xl font-jost font-light drop-shadow-lg">Mountain Views</p>
          </div>
          <div className="text-right">
            <p className="text-base md:text-xl font-jost font-light drop-shadow-lg">Fine Dining</p>
            <p className="text-base md:text-xl font-jost font-light drop-shadow-lg">Premium Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeafoodGallery;
