import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const LoadingScreen = () => {
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsComplete(true),
    });

    // Logo fade in
    tl.fromTo(logoRef.current, {
      opacity: 0,
      scale: 0.8,
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
    }, 0);

    // Line animation
    tl.to(lineRef.current, {
      width: '60px',
      duration: 0.6,
      ease: 'power2.out',
    }, 0.8);

    // Text fade in
    tl.fromTo(textRef.current, {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, 1.2);

    // Subtitle fade in
    tl.fromTo(subtitleRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.6,
      ease: 'fade',
    }, 1.6);

    // Counter animation
    if (counterRef.current) {
      tl.to(counterRef.current, {
        innerHTML: 100,
        duration: 0.8,
        snap: { innerHTML: 1 },
        ease: 'none',
        onUpdate: function () {
          if (counterRef.current) {
            counterRef.current.innerHTML = Math.round(this.targets()[0].innerHTML) + '%';
          }
        }
      }, 2.0);
    }

    // Screen exit
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power2.inOut',
    }, 2.8);

    return () => {
      tl.kill();
    };
  }, []);

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-void"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          {/* Animated SVG Logo */}
          <div ref={logoRef} className="w-48 h-48 opacity-0">
            <img 
              src="/logo.svg" 
              alt="Fiddle River Restaurant Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 ref={textRef} className="font-cormorant text-[32px] sm:text-[48px] text-ivory tracking-[0.15em] sm:tracking-[0.3em] uppercase opacity-0 translate-y-5 text-center px-4">
            Fiddle River
          </h1>
        </div>

        <div className="h-[1px] w-0 bg-gold" ref={lineRef}></div>

        <p
          ref={subtitleRef}
          className="font-jost text-[10px] sm:text-[11px] text-gold tracking-[0.3em] sm:tracking-[0.5em] uppercase opacity-0 text-center"
        >
          Restaurant & Bar
        </p>
      </div>

      <div
        ref={counterRef}
        className="absolute bottom-12 right-12 font-jost text-[13px] text-fog tracking-widest"
      >
        0%
      </div>
    </div>
  );
};
