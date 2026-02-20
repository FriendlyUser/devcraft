import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import BounceButton from './BounceButton';
import AnimatedLogo from './AnimatedLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      {/* Animated bottom border line */}
      <motion.svg 
        className="absolute bottom-0 left-0 w-full h-[2px] pointer-events-none" 
        preserveAspectRatio="none"
      >
        <motion.line 
          x1="0" y1="1" x2="100%" y2="1" 
          stroke="currentColor" 
          className="text-indigo-600/30"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: isScrolled ? 1 : 0,
            opacity: isScrolled ? 1 : 0
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.svg>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <AnimatedLogo isScrolled={isScrolled} />
          <span className="text-xl font-bold tracking-tight text-slate-900">DevCraft</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Services</a>
          <a href="#work" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Our Work</a>
          <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Testimonials</a>
          <BounceButton className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors">
            Start a Project
          </BounceButton>
        </nav>

        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 md:hidden flex flex-col gap-4"
        >
          <a href="#services" className="text-base font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#work" className="text-base font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Our Work</a>
          <a href="#testimonials" className="text-base font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
          <BounceButton className="w-full py-3 bg-slate-900 text-white text-base font-medium rounded-xl">
            Start a Project
          </BounceButton>
        </motion.div>
      )}
    </header>
  );
}
