import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Heart, Sparkles, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-dark-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Brand & Identity Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-neon-purple via-neon-blue to-neon-cyan p-[1.5px]">
                <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center font-display font-bold text-sm text-white">
                  <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                    AR
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {personalData.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              {personalData.tagline}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800/80 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CORE ARCHITECTURE ONLINE // READY FOR DISPATCH</span>
            </div>
          </div>

          {/* Quick Links Column (Col 6-8) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Quick Coordinates
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  className="text-slate-400 hover:text-neon-cyan transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-neon-purple text-[10px]">&gt;</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Resume (Col 9-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Direct Channels
            </h4>
            <div className="flex items-center gap-2.5">
              {[
                { name: 'GitHub', icon: Github, href: personalData.socials.github },
                { name: 'LinkedIn', icon: Linkedin, href: personalData.socials.linkedin },
                { name: 'Instagram', icon: Instagram, href: personalData.socials.instagram },
                { name: 'Email', icon: Mail, href: personalData.socials.email },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    onClick={() => sound.playClick()}
                    onMouseEnter={() => sound.playHover()}
                    className="p-2.5 rounded-xl bg-dark-800/80 hover:bg-dark-750 border border-white/10 hover:border-neon-cyan/40 text-slate-400 hover:text-white transition-all transform hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-2 text-xs font-mono text-neon-purple-light hover:text-white transition-colors underline underline-offset-4"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Inspect Raw Curriculum Vitae</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {personalData.name}. Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500/20 inline" />
            <span>& React / Tailwind.</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-dark-800/80 hover:bg-dark-750 border border-white/10 text-slate-400 hover:text-white transition-all hover:border-neon-cyan/40 group"
          >
            <span>BACK TO APEX</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-neon-cyan" />
          </button>
        </div>
      </div>
    </footer>
  );
}
