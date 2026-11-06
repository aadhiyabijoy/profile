import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import CustomCursor from './components/CustomCursor';
import ResumeModal from './components/ResumeModal';
import { personalData } from './data/portfolioData';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [loadProgress, setLoadProgress] = useState(15);

  // Futuristic initial boot sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25 + 15);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-900 text-slate-100 overflow-x-hidden selection:bg-neon-purple/40 selection:text-neon-cyan">
      
      {/* 1. Futuristic Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[99999] bg-dark-950 flex flex-col items-center justify-center p-4"
          >
            <div className="w-full max-w-sm space-y-6 text-center">
              {/* Monogram pulse */}
              <div className="relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-neon-purple via-neon-blue to-neon-cyan p-[2px] animate-pulse">
                <div className="w-full h-full bg-dark-900 rounded-[14px] flex items-center justify-center font-display font-bold text-2xl text-white">
                  <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                    AR
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono tracking-widest text-neon-cyan uppercase">
                  INITIALIZING ARCHITECTURE
                </div>
                <div className="text-sm font-heading font-semibold text-white">
                  {personalData.name} // Portfolio v2.6
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="w-full h-1.5 bg-dark-800 rounded-full overflow-hidden border border-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan"
                    style={{ width: `${Math.min(loadProgress, 100)}%` }}
                    transition={{ ease: 'easeOut', duration: 0.2 }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>LOADING ASSETS</span>
                  <span>{Math.min(loadProgress, 100)}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Interactive Background Particle Canvas */}
      <ParticleCanvas />

      {/* 3. Custom Desktop Pointer */}
      <CustomCursor />

      {/* 4. Global Sticky Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* 5. Main Content Landmark */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>

      {/* 6. Footer Landmark */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* 7. Curriculum Vitae / Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}

