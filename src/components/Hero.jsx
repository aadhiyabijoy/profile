import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Send, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Sparkles, 
  Terminal, 
  ExternalLink,
  ChevronDown,
  Layers,
  Cpu,
  Code2
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Hero({ onOpenResume }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const fullText = personalData.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personalData.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    sound.playClick();
    const el = document.querySelector(targetId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient futuristic background glow orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-neon-blue/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-800/90 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                {personalData.status}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-neon-cyan font-mono text-sm tracking-widest uppercase">
                <Terminal className="w-4 h-4" />
                <span>echo "Hello, World!";</span>
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
                    {personalData.name}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full"
                    layoutId="underline"
                  />
                </span>
              </h1>
            </div>

            {/* Professional Title */}
            <p className="text-lg sm:text-xl font-display font-medium text-slate-300 tracking-wide">
              {personalData.title}
            </p>

            {/* Dynamic Typewriter Role */}
            <div className="flex items-center gap-3 py-2 px-4 rounded-xl bg-dark-800/50 border border-neon-purple/20 max-w-xl">
              <Sparkles className="w-5 h-5 text-neon-purple shrink-0 animate-pulse" />
              <div className="font-mono text-sm sm:text-base text-slate-200 min-h-[1.5rem] flex items-center">
                <span className="text-neon-cyan mr-1">&gt;</span>
                <span>{displayText}</span>
                <span className="inline-block w-2 h-4 ml-1 bg-neon-cyan animate-pulse" />
              </div>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              {personalData.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                onMouseEnter={() => sound.playHover()}
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-purple-glow hover:to-neon-blue-glow border border-neon-purple/40 shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                onMouseEnter={() => sound.playHover()}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-dark-800/80 hover:bg-dark-750 border border-white/10 hover:border-neon-cyan/40 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-neon-cyan transition-transform group-hover:rotate-12" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={() => {
                  sound.playClick();
                  onOpenResume();
                }}
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-400 hover:text-neon-cyan border border-dashed border-white/15 hover:border-neon-cyan/40 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </button>
            </div>

            {/* Social Icons Strip */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                {[
                  { name: 'GitHub', icon: Github, href: personalData.socials.github, color: 'hover:text-neon-cyan hover:border-neon-cyan/50' },
                  { name: 'LinkedIn', icon: Linkedin, href: personalData.socials.linkedin, color: 'hover:text-neon-blue-light hover:border-neon-blue/50' },
                  { name: 'Instagram', icon: Instagram, href: personalData.socials.instagram, color: 'hover:text-pink-400 hover:border-pink-500/50' },
                  { name: 'Email', icon: Mail, href: personalData.socials.email, color: 'hover:text-neon-purple-light hover:border-neon-purple/50' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.name}
                      onMouseEnter={() => sound.playHover()}
                      onClick={() => sound.playClick()}
                      className={`p-2.5 rounded-xl bg-dark-800/80 border border-white/10 text-slate-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${s.color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Futuristic Interactive 3D Avatar & Hologram Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Glowing Orbital Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan opacity-25 blur-2xl animate-pulse-slow" />

              {/* Main Hologram Card Container */}
              <div className="relative rounded-3xl bg-dark-850/90 border border-white/10 p-6 backdrop-blur-xl shadow-2xl overflow-hidden group">
                {/* Cyber Card Header / Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-slate-400 ml-1">identity.matrix</span>
                  </div>
                  <span className="text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 rounded border border-neon-cyan/30 text-[10px]">
                    VERIFIED // v2.6
                  </span>
                </div>

                {/* Avatar Visual with Cyber Elements */}
                <div className="relative my-6 rounded-2xl overflow-hidden aspect-[4/4.5] bg-gradient-to-b from-dark-800 to-dark-950 border border-white/10 flex items-center justify-center group-hover:border-neon-purple/50 transition-colors">
                  {/* Holographic background photo / avatar representation */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Alex Rivera Profile"
                    className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105 filter contrast-110 saturate-125"
                  />

                  {/* Gradient & Scanline overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-neon-purple/10 pointer-events-none" />
                  
                  {/* Futuristic Floating Badges */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-dark-900/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-neon-purple/20 border border-neon-purple/40 flex items-center justify-center text-neon-purple-light">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white">Full-Stack Core</h4>
                        <p className="text-[10px] font-mono text-neon-cyan">React • Node • MySQL</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      ⚡ 100%
                    </span>
                  </div>

                  {/* Top-Right Orbital Pill */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-dark-900/80 backdrop-blur-md border border-neon-cyan/40 text-[10px] font-mono text-neon-cyan flex items-center gap-1.5 shadow-glow-cyan">
                    <Cpu className="w-3 h-3 animate-spin-slow" />
                    <span>NEURAL ARCH</span>
                  </div>
                </div>

                {/* Card Footer Quick Specs */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2 font-mono">
                  <div className="p-2 rounded-xl bg-dark-800/50 border border-white/5">
                    <div className="text-base font-bold text-white">3+ Yrs</div>
                    <div className="text-[10px] text-slate-400 uppercase">Coding</div>
                  </div>
                  <div className="p-2 rounded-xl bg-dark-800/50 border border-white/5">
                    <div className="text-base font-bold text-neon-cyan">25+</div>
                    <div className="text-[10px] text-slate-400 uppercase">Shipped</div>
                  </div>
                  <div className="p-2 rounded-xl bg-dark-800/50 border border-white/5">
                    <div className="text-base font-bold text-neon-purple-light">12+</div>
                    <div className="text-[10px] text-slate-400 uppercase">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            onMouseEnter={() => sound.playHover()}
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-neon-cyan transition-colors"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

