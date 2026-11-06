import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Cpu 
} from 'lucide-react';
import { sound } from '../utils/sound';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-dark-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-dark-850/80">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-neon-purple animate-pulse" />
              <div>
                <span className="text-xs font-mono text-neon-cyan uppercase">PROJECT ARCHITECTURE // PREVIEW</span>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white">{project.title}</h3>
              </div>
            </div>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              onMouseEnter={() => sound.playHover()}
              className="p-2 rounded-xl bg-dark-800 text-slate-400 hover:text-white hover:bg-dark-750 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Image Preview & Hero Aspect */}
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-dark-900/90 text-neon-cyan border border-neon-cyan/30">
                  Category: {project.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-dark-900/90 text-slate-300 border border-white/10">
                  {project.subtitle}
                </span>
              </div>
            </div>

            {/* Metrics Ribbon */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-dark-800/60 border border-white/5 text-center">
                    <TrendingUp className="w-4 h-4 text-neon-cyan mx-auto mb-1" />
                    <div className="text-xs sm:text-sm font-bold text-white font-mono">{m}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Detailed Description */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">System Overview</h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && (
              <div className="space-y-3">
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">Key Engineering Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-dark-800/40 border border-white/5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Used */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">Technologies & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-800 text-slate-300 border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="p-5 sm:p-6 border-t border-white/10 bg-dark-850/80 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              STATUS: <span className="text-emerald-400">LIVE & ACCESSIBLE</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-dark-800 hover:bg-dark-750 hover:text-white border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-purple-glow hover:to-neon-blue-glow shadow-glow-purple transition-all transform hover:-translate-y-0.5"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
