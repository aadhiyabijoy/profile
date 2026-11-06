import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Globe, 
  GraduationCap, 
  Target, 
  CheckCircle2, 
  Quote,
  Zap,
  Terminal
} from 'lucide-react';
import { personalData, aboutData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function About() {
  const iconMap = {
    Code2: Code2,
    Sparkles: Sparkles,
    Cpu: Cpu,
    Layers: Layers,
    ShieldCheck: ShieldCheck,
    Globe: Globe,
  };

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-neon-cyan/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800/80 border border-neon-purple/30 text-neon-purple-light font-mono text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              My Engineering Identity
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging conceptual design, scalable software engineering, and relentless creative curiosity.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {/* Bento Card 1: Professional Bio Story (Col 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neon-purple/15 border border-neon-purple/30 flex items-center justify-center text-neon-purple-light">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">Who I Am</h3>
                <p className="text-xs font-mono text-slate-400">Software Engineer & UI Innovator</p>
              </div>
            </div>

            {/* Quote banner */}
            <div className="p-4 rounded-2xl bg-dark-800/50 border-l-4 border-neon-cyan mb-6 relative">
              <Quote className="w-6 h-6 text-neon-cyan/20 absolute right-3 top-3 pointer-events-none" />
              <p className="text-xs sm:text-sm font-display italic text-slate-300 leading-relaxed">
                {aboutData.quote}
              </p>
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {aboutData.story.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300/90">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10">
              {personalData.stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="text-2xl font-display font-extrabold text-transparent bg-gradient-to-r from-neon-purple-light to-neon-cyan bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-white">{stat.label}</div>
                  <div className="text-[10px] text-slate-400 hidden sm:block">{stat.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 2: Professional Photograph & Quick Specs (Col 8-12) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 glass-card rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 group border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Alex Rivera in tech studio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-dark-900/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">{personalData.name}</div>
                  <div className="text-[10px] font-mono text-neon-cyan">{personalData.location}</div>
                </div>
                <div className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  ONLINE
                </div>
              </div>
            </div>

            {/* Educational Foundation Highlight */}
            <div className="p-4 rounded-2xl bg-dark-800/40 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-neon-purple-light uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                {aboutData.educationSummary}
              </p>
            </div>
          </motion.div>

          {/* Bento Card 3: Technical Interests & Focus Areas (Col 1-8) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 glass-card rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neon-blue/15 border border-neon-blue/30 flex items-center justify-center text-neon-blue-light">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">Technical Interests & Domains</h3>
                <p className="text-xs font-mono text-slate-400">Core areas of research & continuous exploration</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aboutData.interests.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || Code2;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => sound.playHover()}
                    className="p-4 rounded-2xl bg-dark-800/40 border border-white/5 hover:border-neon-purple/40 hover:bg-dark-750 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center text-neon-purple-light mb-3 group-hover:scale-110 group-hover:text-neon-cyan transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{item.label}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Bento Card 4: Career Ambitions & Personal Strengths (Col 9-12) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-4 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Career Ambitions */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan uppercase mb-2">
                  <Target className="w-4 h-4" />
                  <span>Career Ambition</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {aboutData.careerAmbitions}
                </p>
              </div>

              {/* Personal Strengths */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Engineering Strengths
                </h4>
                <div className="space-y-2.5">
                  {aboutData.strengths.map((str, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>MINDSET: CONSTANT ITERATION</span>
              <span className="text-neon-purple">🚀 100% FOCUS</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
