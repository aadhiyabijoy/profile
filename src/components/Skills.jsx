import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Terminal, 
  Code, 
  Palette, 
  Server, 
  Database, 
  GitBranch, 
  Zap, 
  Box, 
  Network, 
  Coffee, 
  FileCode,
  CheckCircle,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const iconMap = {
    FileCode: FileCode,
    Terminal: Terminal,
    Coffee: Coffee,
    Atom: Cpu,
    Code: Code,
    Palette: Palette,
    Server: Server,
    Database: Database,
    GitBranch: GitBranch,
    Zap: Zap,
    Box: Box,
    Network: Network,
  };

  const filteredSkills = activeTab === 'all'
    ? skillsData.skills
    : skillsData.skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-dark-950/40">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-neon-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-neon-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800/80 border border-neon-cyan/30 text-neon-cyan font-mono text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // Arsenal & Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical{' '}
            <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Proficiencies & Stack
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of programming languages, modern frameworks, database engines, and developer tooling I use to craft production-ready applications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {skillsData.categories.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveTab(cat.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? 'text-white bg-gradient-to-r from-neon-purple to-neon-blue border border-neon-cyan/40 shadow-glow-cyan'
                      : 'text-slate-400 bg-dark-800/60 hover:text-white hover:bg-dark-750 border border-white/5'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComp = iconMap[skill.icon] || Code;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  onMouseEnter={() => sound.playHover()}
                  className="group relative rounded-2xl glass-card p-5 flex flex-col justify-between hover:border-neon-cyan/50 hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Subtle corner neon accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neon-purple/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:from-neon-cyan/20 transition-colors" />

                  <div>
                    {/* Icon and category badge header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dark-800 to-dark-750 border border-white/10 flex items-center justify-center text-neon-cyan group-hover:text-neon-purple-light group-hover:scale-105 group-hover:border-neon-cyan/40 transition-all duration-300 shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-dark-800 text-slate-300 border border-white/10 uppercase">
                        {skill.category}
                      </span>
                    </div>

                    {/* Skill Title & Badge */}
                    <div className="space-y-1 mb-2.5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-heading font-bold text-white group-hover:text-neon-cyan transition-colors">
                          {skill.name}
                        </h3>
                        {skill.highlight && (
                          <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-glow-cyan" title="Core Specialty" />
                        )}
                      </div>
                      <div className="text-xs font-mono text-neon-purple-light font-medium">
                        {skill.badge}
                      </div>
                    </div>

                    {/* Skill Description */}
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Card bottom indicator */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5 text-slate-400 group-hover:text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-neon-cyan" />
                      Production Tested
                    </span>
                    <span className="text-slate-600 group-hover:text-neon-purple">
                      // ACTIVE
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Tech Stack Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-dark-850/80 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center text-neon-purple-light shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Full-Spectrum Engineering Capability</h4>
              <p className="text-xs text-slate-400">
                From responsive UI rendering to relational database indexing and containerized deployment.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan bg-dark-900 px-3.5 py-2 rounded-xl border border-neon-cyan/20">
            <span>ZERO BOILERPLATE // HIGH EFFICIENCY</span>
          </div>
        </div>

      </div>
    </section>
  );
}
