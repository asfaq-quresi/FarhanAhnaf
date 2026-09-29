import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useSmoothScroll } from '../context/SmoothScrollContext';

interface NavbarProps {
  onContactClick: () => void;
}

// Magnetic Sticky Component for nav items
interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
}

const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = 0.35,
  className = '',
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Buttery smooth physics spring
  const springX = useSpring(x, { damping: 14, stiffness: 220, mass: 0.12 });
  const springY = useSpring(y, { damping: 14, stiffness: 220, mass: 0.12 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - (left + width / 2);
    const mouseY = e.clientY - (top + height / 2);
    x.set(mouseX * strength);
    y.set(mouseY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  // Interactive mouse tracking glow inside the capsule
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const { lenis } = useSmoothScroll();
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Lenis smooth scroll listener
    if (lenis) {
      const handleLenisScroll = (e: { direction: number; scroll: number }) => {
        setIsScrolled(e.scroll > 25);
        if (mobileMenuOpen) return;

        // Keep visible near the very top of the page
        if (e.scroll < 45) {
          setIsVisible(true);
        } else if (e.direction === 1 && e.scroll > 70) {
          // Scrolling down -> hide navbar
          setIsVisible(false);
        } else if (e.direction === -1) {
          // Scrolling up -> show navbar
          setIsVisible(true);
        }
      };

      lenis.on('scroll', handleLenisScroll);
      return () => {
        lenis.off('scroll', handleLenisScroll);
      };
    }

    // Native window scroll listener fallback
    const handleNativeScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 25);
      if (mobileMenuOpen) return;

      if (currentY < 45) {
        setIsVisible(true);
      } else if (currentY > lastScrollY.current + 6 && currentY > 70) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else if (currentY < lastScrollY.current - 6) {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleNativeScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleNativeScroll);
  }, [lenis, mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonial', href: '#workflow' },
  ];

  const handleCapsuleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleCapsuleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible || mobileMenuOpen ? 0 : -85,
        opacity: isVisible || mobileMenuOpen ? 1 : 0,
      }}
      transition={{
        duration: 0.32,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      {/* Floating Centered Pill Container */}
      <motion.div
        onMouseMove={handleCapsuleMouseMove}
        onMouseLeave={handleCapsuleMouseLeave}
        className={`pointer-events-auto relative w-full max-w-[740px] transition-all duration-300 rounded-full border border-white/10 bg-[#0d0d0f]/80 backdrop-blur-xl px-5 sm:px-7 py-2 sm:py-2.5 flex items-center justify-between shadow-2xl shadow-black/80 overflow-hidden ${
          isScrolled ? 'bg-black/90 border-white/15' : ''
        }`}
      >
        {/* Interactive Mouse Spotlight Reflection inside capsule */}
        {mousePos.active && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-full transition-opacity duration-200 -z-10"
            style={{
              background: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.12), rgba(255, 255, 255, 0.03) 40%, transparent 80%)`,
            }}
          />
        )}

        {/* Brand with Magnetic Sticky Hover Effect */}
        <Magnetic strength={0.25}>
          <a
            href="#"
            className="text-base sm:text-lg font-extrabold tracking-tight text-white hover:text-amber-400 transition-colors font-heading whitespace-nowrap block py-1"
          >
            Farhan Ahnaf
          </a>
        </Magnetic>

        {/* Center Nav Links with Sticky Magnetic Elements + Gliding Pill */}
        <nav
          className="hidden md:flex items-center space-x-1 text-sm font-medium text-neutral-300 relative py-1 px-1.5"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {navLinks.map((link) => {
            const isHovered = hoveredNav === link.name;
            return (
              <Magnetic key={link.name} strength={0.35}>
                <a
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.name)}
                  className={`relative px-4 py-1.5 rounded-full transition-colors duration-200 block text-xs sm:text-sm font-medium ${
                    isHovered ? 'text-white' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {/* Gliding Sticky Hover Backdrop Pill */}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12] -z-10 shadow-sm"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 28,
                      }}
                    />
                  )}

                  <span className="relative z-10">{link.name}</span>
                </a>
              </Magnetic>
            );
          })}
        </nav>

        {/* Right Contact Pill with Magnetic Attraction & Glow */}
        <div className="flex items-center gap-2">
          <Magnetic strength={0.3}>
            <button
              onClick={onContactClick}
              className="relative group px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-amber-500/50 transition-all cursor-pointer shadow-sm active:scale-95 overflow-hidden"
            >
              {/* Subtle button ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span className="relative z-10 group-hover:text-amber-300 transition-colors">Contact</span>
            </button>
          </Magnetic>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-300 hover:text-white rounded-full focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="pointer-events-auto absolute top-18 inset-x-4 max-w-sm mx-auto md:hidden bg-[#0d0d10]/95 backdrop-blur-2xl border border-neutral-800 rounded-3xl p-5 shadow-2xl space-y-4"
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-300 hover:text-amber-400 py-1.5 px-3 rounded-lg hover:bg-neutral-900/80"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl hover:brightness-110 transition-all cursor-pointer"
            >
              Contact Farhan
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
