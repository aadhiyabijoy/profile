import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX, FileDown, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';
import { personalData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.isMuted());

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Monitor scroll for sticky style & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    sound.playClick();
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleToggleSound = () => {
    const newMuted = sound.toggleMute();
    setIsMuted(newMuted);
    if (!newMuted) sound.playClick();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'py-3 bg-dark-900/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Futuristic Monogram / Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            onMouseEnter={() => sound.playHover()}
            className="group flex items-center space-x-3 text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple via-neon-blue to-neon-cyan p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow-purple">
              <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center font-display font-bold text-lg text-white">
                <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                  AR
                </span>
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-neon-cyan animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-neon-cyan" />
            </div>
            <div>
              <span className="font-heading font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
                {personalData.name}
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-neon-cyan transition-colors">
                SYS.ONLINE // DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 p-1.5 rounded-full bg-dark-800/60 backdrop-blur-md border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => sound.playHover()}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 via-neon-blue/30 to-neon-cyan/30 rounded-full border border-neon-cyan/40 shadow-glow-cyan"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                    )}
                    {link.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons (Sound toggle + Resume CTA + Mobile Menu Button) */}
          <div className="flex items-center space-x-3">
            {/* Audio Synth Toggle */}
            <button
              onClick={handleToggleSound}
              onMouseEnter={() => sound.playHover()}
              title={isMuted ? 'Enable Cyber SFX' : 'Mute Cyber SFX'}
              className="p-2 rounded-xl bg-dark-800/80 border border-white/10 hover:border-neon-purple/50 text-slate-300 hover:text-white transition-all duration-200 hover:shadow-glow-purple focus:outline-none"
              aria-label="Toggle SFX"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-neon-cyan animate-pulse" />
              )}
            </button>

            {/* Resume CTA Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => sound.playHover()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-purple-glow hover:to-neon-blue-glow border border-neon-purple/40 shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-xl bg-dark-800/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-dark-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 mt-3 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                        ? 'bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 text-white border border-neon-purple/30'
                        : 'text-slate-300 hover:bg-dark-800 hover:text-white'
                      }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-glow-cyan" />
                    ) : (
                      <span className="text-slate-600 font-mono text-xs">0{navLinks.indexOf(link) + 1}</span>
                    )}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    sound.playClick();
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-neon-purple to-neon-blue shadow-glow-purple"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download / View Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
