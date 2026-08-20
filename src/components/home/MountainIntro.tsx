import { useEffect, useRef } from 'react';

// @ts-ignore
declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const MountainIntro = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Load Three.js
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initVanta = async () => {
      try {
        // Load Three.js and Vanta CLOUDS (not CLOUDS2)
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js');

        if (vantaRef.current && window.VANTA) {
          vantaEffect.current = window.VANTA.CLOUDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            skyColor: 0x182228,
            sunColor: 0x1a1a1a,
            sunGlareColor: 0x0,
            sunlightColor: 0x616161
          });
        }
      } catch (error) {
        console.error('Error loading Vanta:', error);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="relative py-32 px-6 md:px-20 overflow-hidden min-h-[600px] flex items-center justify-center"
    >
      {/* Content overlay */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="font-cormorant text-[42px] md:text-[72px] text-ivory mb-8 leading-tight drop-shadow-2xl">
          Elevated Above the World
        </h2>
        <p className="font-jost text-[18px] md:text-[21px] text-cream/90 leading-relaxed max-w-3xl mx-auto mb-6 drop-shadow-lg">
          Fiddle River Restaurant sits majestically in the mountains, where clouds drift below and the air is crisp with mountain freshness. Our location offers not just exceptional dining, but an unforgettable experience above the clouds.
        </p>
        <p className="font-jost text-[16px] md:text-[18px] text-cream/70 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
          Perched at elevation, we bring you closer to nature while serving the finest cuisine. Each meal becomes a journey, each view a masterpiece.
        </p>

        {/* Stats or features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: '2,000m', label: 'Elevation' },
            { number: '360°', label: 'Mountain Views' },
            { number: 'Fresh', label: 'Local Ingredients' },
            { number: 'Unique', label: 'Dining Experience' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="font-cormorant text-[36px] md:text-[48px] text-gold mb-2 drop-shadow-lg">
                {item.number}
              </div>
              <div className="font-jost text-[11px] md:text-[13px] text-cream/60 uppercase tracking-[0.3em]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MountainIntro;
