import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Bed, Sparkles, Image, Mail, Volume2, VolumeX } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import BeSearchForm from "./beForms/BeSearchForm.tsx";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMusicMuted, setIsMusicMuted] = useState(false);
  const location = useLocation();
  const isDark = true; // Always dark theme
  const isMenuPage = location.pathname === '/menu';
  
  // Music control - directly interact with the music button and track state
  const handleMusicToggle = () => {
    const musicBtn = document.getElementById('music-toggle-btn');
    if (musicBtn) {
      musicBtn.click();
      // Toggle local state
      setIsMusicMuted(!isMusicMuted);
    }
  };

  // Sync with actual music state on mount
  useEffect(() => {
    const checkMusicState = () => {
      const musicBtn = document.getElementById('music-toggle-btn');
      if (musicBtn) {
        // Check if VolumeX icon exists (muted state)
        const isMuted = musicBtn.querySelector('svg')?.getAttribute('data-lucide') === 'volume-x';
        setIsMusicMuted(isMuted);
      }
    };
    
    // Check initially after a delay
    const timer = setTimeout(checkMusicState, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',     path: '/',         icon: Home     },
    { name: 'Menu',     path: '/menu',     icon: Sparkles },
    { name: 'About',    path: '/about',    icon: Info     },
    { name: 'Gallery',  path: '/gallery',  icon: Image    },
    { name: 'Contact',  path: '/contact',  icon: Mail     },
  ];

  // ── Derived states ──────────────────────────────────────────
  const isDarkHero = !isScrolled && isDark && !isMenuPage;
  const isSolid = isScrolled || !isDark || isMenuPage;

  // Nav link color
  const navLinkColor = isDarkHero
    ? 'text-white drop-shadow-md'   // dark hero: white
    : isDark
      ? 'text-cream'                // dark scrolled: cream
      : 'text-[#2D3748]';           // ← light mode: dark charcoal

  // Logo subtitle color
  const logoSubColor = isDarkHero
    ? 'text-white/90 drop-shadow-md'
    : isDark
      ? 'text-smoke'
      : 'text-[#6B7280]';           // ← light mode: muted gray

  return (
    <>
      {/* Desktop & Top Mobile Nav */}
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] px-6 md:px-12 transition-all duration-400 ease-in-out ${
          isSolid ? 'py-4' : 'py-4 md:py-6'
        }`}
        style={{
          backgroundColor: (isScrolled || isMenuPage)
            ? isDark ? 'rgba(8,8,8,0.92)' : 'rgba(255,255,255,0.98)'
            : isDark ? 'transparent' : 'rgba(255,255,255,0.95)',
          boxShadow: isSolid
            ? isDark
              ? 'var(--shadow-nav)'
              : '0 1px 0 rgba(184,150,90,0.2), 0 4px 20px rgba(0,0,0,0.06)'
            : 'none',
          backdropFilter: isSolid ? 'blur(20px) saturate(1.5)' : 'none',
        }}
      >
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hoverable group">
            <img
              src="/logo.webp"
              alt="Fiddle River Restaurant Logo"
              className="w-15 h-10"
            />
            <div className="flex flex-col">
              <h1 className="font-cormorant text-[22px] text-gold tracking-wide drop-shadow-sm">
                FIDDLE RIVER
              </h1>
              <span
                className={`font-jost text-[8px] uppercase tracking-[0.4em] mt-0.5 group-hover:text-gold transition-colors duration-300 ${logoSubColor}`}
              >
                Restaurant & Bar
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`font-dmSans text-[13px] tracking-[0.05em] hover:text-gold transition-colors duration-300 relative group py-2 hoverable ${navLinkColor}`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-300 ${
                        location.pathname === link.path
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Book Now button */}
            <Link
                to="/booking"
                className="hoverable hover:scale-105"
                style={{
                  border: '1px solid var(--clr-gold)',
                  padding: '10px 24px',
                  fontFamily: 'Jost',
                  fontSize: '11px',
                  color: 'var(--clr-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'transparent',
                  // Light mode: slightly visible bg on hover
                  ...(isDark ? {} : {
                    color: '#9A7A3A',           // ← deeper gold for light bg
                    borderColor: '#9A7A3A',
                  }),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--clr-gold)';
                  e.currentTarget.style.color = isDark ? '#080808' : '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = isDark
                    ? 'var(--clr-gold)'
                    : '#9A7A3A';
                }}
              >
                Reserve a Table
              </Link>
          </div>

          {/* Mobile: Music toggle only */}
          <div className="lg:hidden">
            <button
              onClick={handleMusicToggle}
              className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-colors duration-300 bg-transparent hover:bg-gold/10"
              aria-label="Toggle music"
            >
              {isMusicMuted ? (
                <VolumeX className="w-5 h-5 text-gold/50" strokeWidth={1.5} />
              ) : (
                <Volume2 className="w-5 h-5 text-gold" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Pill Navigation */}
      <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] px-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-1 px-4 py-3 rounded-full shadow-2xl"
          style={{
            backgroundColor: isDark 
              ? 'rgba(15, 35, 25, 0.95)' 
              : 'rgba(20, 50, 35, 0.92)',
            backdropFilter: 'blur(20px) saturate(1.8)',
            border: `1px solid ${isDark ? 'rgba(50, 90, 70, 0.4)' : 'rgba(60, 100, 80, 0.5)'}`,
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative flex flex-col items-center justify-center px-3 py-2 transition-all duration-300 group hoverable"
              >
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? 'text-gold'
                      : isDark
                        ? 'text-cream/70 group-hover:text-gold'
                        : 'text-[#6B7280] group-hover:text-gold'
                  }`}
                />
                <span
                  className={`font-jost text-[8px] uppercase tracking-wider mt-1 transition-colors duration-300 ${
                    isActive
                      ? 'text-gold'
                      : isDark
                        ? 'text-cream/50 group-hover:text-gold'
                        : 'text-[#9A9590] group-hover:text-gold'
                  }`}
                >
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg -z-10"
                    style={{
                      backgroundColor: isDark
                        ? 'rgba(60, 120, 90, 0.2)'
                        : 'rgba(70, 140, 100, 0.25)',
                    }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </motion.div>
      </nav>
    </>
  );
};