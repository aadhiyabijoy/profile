import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  Sparkles, 
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden bg-dark-950/40">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-neon-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800/80 border border-neon-blue/30 text-neon-blue-light font-mono text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education &{' '}
            <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Scholastic Milestones
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Theoretical rigor combined with continuous computer science problem solving, algorithmic foundations, and distributed systems research.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-neon-purple via-neon-blue to-neon-cyan transform -translate-x-1/2 hidden sm:block opacity-60" />

          <div className="space-y-12">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  onMouseEnter={() => sound.playHover()}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node / Icon */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20 hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-dark-900 border-2 border-neon-cyan shadow-glow-cyan text-neon-cyan">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  {/* Content Card (Half width) */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] glass-card rounded-3xl p-6 sm:p-8 hover:border-neon-cyan/40 hover:shadow-card-hover transition-all duration-300">
                    {/* Header info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-neon-purple/15 text-neon-purple-light border border-neon-purple/30">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                          {edu.gpa}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white leading-snug">
                        {edu.degree}
                      </h3>

                      <div className="text-sm font-semibold text-neon-cyan flex items-center gap-1.5">
                        <span>{edu.institution}</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Capstone or summary */}
                    {edu.capstone && (
                      <div className="p-3 rounded-xl bg-dark-800/60 border-l-2 border-neon-cyan mb-4 text-xs text-slate-300">
                        <span className="font-semibold text-white">Capstone Project:</span> {edu.capstone}
                      </div>
                    )}

                    {/* Relevant Coursework */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-neon-purple" />
                        <span>Core Coursework</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.courses.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-dark-800 text-slate-300 border border-white/5"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Academic Achievements */}
                    {edu.achievements && (
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-neon-cyan" />
                          <span>Honors & Achievements</span>
                        </h4>
                        <div className="space-y-1.5">
                          {edu.achievements.map((ach, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Spacer for alternate layout */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
