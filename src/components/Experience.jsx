import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Trophy, 
  Award, 
  Presentation, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Users
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('internships');

  const tabs = [
    { id: 'internships', label: 'Internships & Roles', icon: Briefcase, count: experienceData.internships.length },
    { id: 'hackathons', label: 'Hackathons & Awards', icon: Trophy, count: experienceData.hackathonsAndAwards.length },
    { id: 'certifications', label: 'Certifications', icon: ShieldCheck, count: experienceData.certifications.length },
    { id: 'workshops', label: 'Workshops & Events', icon: Presentation, count: experienceData.workshopsAndEvents.length },
  ];

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-neon-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-neon-cyan/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800/80 border border-neon-cyan/30 text-neon-cyan font-mono text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience &{' '}
            <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on software development in agile environments, competitive hackathons, industry certifications, and developer knowledge sharing.
          </p>

          {/* Experience Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveTab(tab.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? 'text-white bg-gradient-to-r from-neon-purple to-neon-blue border border-neon-cyan/40 shadow-glow-cyan'
                      : 'text-slate-400 bg-dark-800/60 hover:text-white hover:bg-dark-750 border border-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 text-neon-cyan" />
                  <span>{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    isSelected ? 'bg-dark-900 text-white' : 'bg-dark-900/60 text-slate-400'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* 1. INTERNSHIPS & ROLES */}
            {activeTab === 'internships' && (
              <motion.div
                key="internships"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {experienceData.internships.map((job, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => sound.playHover()}
                    className="glass-card rounded-3xl p-6 sm:p-8 hover:border-neon-purple/40 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <span className="text-xs font-mono text-neon-cyan tracking-wider uppercase">
                          {job.company}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                          {job.role}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-dark-800 text-slate-300 border border-white/10">
                          <Calendar className="w-3 h-3 text-neon-purple" />
                          {job.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-dark-800 text-slate-300 border border-white/10">
                          <MapPin className="w-3 h-3 text-neon-cyan" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Responsibilities list */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Key Responsibilities & Deliverables
                      </h4>
                      {job.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                      <span className="text-xs font-mono text-slate-500 mr-2">TECH:</span>
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-800 text-neon-purple-light border border-neon-purple/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 2. HACKATHONS & AWARDS */}
            {activeTab === 'hackathons' && (
              <motion.div
                key="hackathons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {experienceData.hackathonsAndAwards.map((award, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => sound.playHover()}
                    className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-neon-cyan/40 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
                          {award.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{award.date}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-1">
                        {award.title}
                      </h3>
                      <div className="text-xs font-mono text-neon-purple-light mb-3">
                        {award.event}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {award.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                      <span>VERIFIED ACHIEVEMENT</span>
                      <Trophy className="w-4 h-4 text-neon-cyan" />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 3. CERTIFICATIONS */}
            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {experienceData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => sound.playHover()}
                    className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-neon-purple/40 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-dark-800 text-slate-300 border border-white/10">
                          ID: {cert.credentialId}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{cert.date}</span>
                      </div>

                      <h3 className="text-lg font-heading font-bold text-white mb-1">
                        {cert.title}
                      </h3>
                      <div className="text-xs font-mono text-neon-cyan mb-4">
                        Issued by: {cert.issuer}
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="text-[11px] font-mono text-slate-400">Validated Skills:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-800 text-slate-300 border border-white/5"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        Credential Active
                      </span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                        onMouseEnter={() => sound.playHover()}
                        className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 4. WORKSHOPS & SPEAKING */}
            {activeTab === 'workshops' && (
              <motion.div
                key="workshops"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {experienceData.workshopsAndEvents.map((workshop, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => sound.playHover()}
                    className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-neon-cyan/40 transition-all duration-300"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-neon-purple/20 text-neon-purple-light border border-neon-purple/40">
                          {workshop.role}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{workshop.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                        {workshop.title}
                      </h3>
                      <div className="text-xs font-mono text-slate-400">
                        Organized by {workshop.organization}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-dark-800/80 border border-white/10 text-xs font-mono text-neon-cyan shrink-0">
                      <Users className="w-4 h-4" />
                      <span>{workshop.attendees}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

