import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  FileDown, 
  Printer, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  Award,
  ExternalLink
} from 'lucide-react';
import { personalData, educationData, experienceData, skillsData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function ResumeModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  const handleDownload = () => {
    sound.playClick();
    // Generate clean text resume blob for direct download
    const resumeContent = `
===================================================================
${personalData.name.toUpperCase()} — CURRICULUM VITAE
${personalData.title}
Email: ${personalData.email} | Phone: ${personalData.phone}
Location: ${personalData.location}
Website: https://alexrivera.dev | GitHub: ${personalData.socials.github}
===================================================================

PROFESSIONAL SUMMARY:
${personalData.resume.summary}

CORE TECHNICAL SKILLS:
Languages: JavaScript (ES6+), Python, Java
Frontend: React, HTML5, CSS3, Tailwind CSS, Framer Motion
Backend: Node.js, Express, REST APIs
Databases: MySQL, Relational Schema Optimization
Tools & DevOps: Git, GitHub Actions, Docker, Vite

EDUCATION:
${educationData.map(e => `• ${e.institution} — ${e.degree} (${e.period})\n  GPA: ${e.gpa}\n  Key Focus: ${e.courses.slice(0, 4).join(', ')}`).join('\n\n')}

EXPERIENCE & INTERNSHIPS:
${experienceData.internships.map(j => `• ${j.role} at ${j.company} (${j.period})\n  - ${j.responsibilities.join('\n  - ')}`).join('\n\n')}

HACKATHONS & AWARDS:
${experienceData.hackathonsAndAwards.map(a => `• ${a.title} (${a.date})\n  ${a.description}`).join('\n\n')}

CERTIFICATIONS:
${experienceData.certifications.map(c => `• ${c.title} — ${c.issuer} (${c.date}) [Credential: ${c.credentialId}]`).join('\n')}
===================================================================
    `.trim();

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personalData.name.replace(/\s+/g, '_')}_Software_Engineer_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-md print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-dark-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col print:border-none print:max-h-full print:bg-white print:text-black"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-dark-850/80 print:hidden">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse" />
              <div>
                <span className="text-xs font-mono text-neon-cyan uppercase">CURRICULUM VITAE // VERIFIED SNAPSHOT</span>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white">{personalData.name}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                onMouseEnter={() => sound.playHover()}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-800 text-xs font-mono text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="Print / Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={handleDownload}
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-xs font-mono font-semibold text-white shadow-glow-purple transition-all"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="p-2 rounded-xl bg-dark-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8 font-sans print:p-0">
            
            {/* Header info */}
            <div className="border-b border-white/10 pb-6 print:border-black/20">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black">
                {personalData.name}
              </h1>
              <p className="text-neon-cyan font-mono text-sm print:text-blue-700">
                {personalData.title}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 mt-2 font-mono print:text-gray-600">
                <span>Email: {personalData.email}</span>
                <span>•</span>
                <span>Location: {personalData.location}</span>
                <span>•</span>
                <span>GitHub: {personalData.socials.github}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neon-purple-light print:text-black font-bold">
                Executive Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-800">
                {personalData.resume.summary}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neon-purple-light print:text-black font-bold">
                Technical Stack & Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-dark-800/40 border border-white/5 print:bg-gray-100 print:text-black">
                  <span className="font-semibold text-white print:text-black">Languages:</span> JavaScript (ES6+), Python, Java, HTML5, CSS3
                </div>
                <div className="p-3 rounded-xl bg-dark-800/40 border border-white/5 print:bg-gray-100 print:text-black">
                  <span className="font-semibold text-white print:text-black">Frontend & State:</span> React, Tailwind CSS, Framer Motion, Responsive Design
                </div>
                <div className="p-3 rounded-xl bg-dark-800/40 border border-white/5 print:bg-gray-100 print:text-black">
                  <span className="font-semibold text-white print:text-black">Backend & Storage:</span> Node.js, Express, MySQL, RESTful API Architecture
                </div>
                <div className="p-3 rounded-xl bg-dark-800/40 border border-white/5 print:bg-gray-100 print:text-black">
                  <span className="font-semibold text-white print:text-black">DevOps & Tools:</span> Git, GitHub Actions, Docker, Postman, Vite
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neon-purple-light print:text-black font-bold">
                Experience & Internships
              </h2>
              <div className="space-y-4">
                {experienceData.internships.map((job, idx) => (
                  <div key={idx} className="space-y-1.5 border-l-2 border-neon-cyan pl-4">
                    <div className="flex flex-wrap items-center justify-between">
                      <h3 className="text-sm font-bold text-white print:text-black">
                        {job.role} — <span className="text-neon-cyan print:text-blue-700">{job.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-slate-400 print:text-gray-600">{job.period}</span>
                    </div>
                    <p className="text-xs text-slate-300 print:text-gray-700">{job.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 print:text-gray-600 pt-1">
                      {job.responsibilities.map((r, rIdx) => (
                        <li key={rIdx}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neon-purple-light print:text-black font-bold">
                Education
              </h2>
              {educationData.map((edu) => (
                <div key={edu.id} className="border-l-2 border-neon-purple pl-4 space-y-1">
                  <div className="flex flex-wrap items-center justify-between">
                    <h3 className="text-sm font-bold text-white print:text-black">{edu.degree}</h3>
                    <span className="text-xs font-mono text-slate-400 print:text-gray-600">{edu.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-neon-cyan print:text-blue-700">{edu.institution}</div>
                  <div className="text-xs text-slate-300 print:text-gray-700">GPA: {edu.gpa}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-5 border-t border-white/10 bg-dark-850/80 flex items-center justify-between text-xs font-mono text-slate-400 print:hidden">
            <span>UPDATED: {personalData.resume.lastUpdated}</span>
            <button
              onClick={handleDownload}
              className="text-neon-cyan hover:underline flex items-center gap-1 font-bold"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Direct File Download</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

