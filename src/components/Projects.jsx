import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  Eye, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { sound } from '../utils/sound';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  const handleOpenModal = (project) => {
    sound.playClick();
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800/80 border border-neon-purple/30 text-neon-purple-light font-mono text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // Portfolio of Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Projects & Engineering
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A curated collection of web applications, cloud architectures, and interactive digital interfaces built with performance, security, and elegance in mind.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setFilter(cat);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none ${
                  filter === cat
                    ? 'text-white bg-gradient-to-r from-neon-purple to-neon-blue border border-neon-cyan/40 shadow-glow-purple'
                    : 'text-slate-400 bg-dark-800/60 hover:text-white hover:bg-dark-750 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onMouseEnter={() => sound.playHover()}
                className="group relative rounded-3xl glass-card overflow-hidden flex flex-col justify-between hover:border-neon-purple/50 transition-all duration-500"
              >
                {/* Image and Overlay Header */}
                <div className="relative aspect-video overflow-hidden bg-dark-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-dark-900/90 text-neon-cyan border border-neon-cyan/30 backdrop-blur-md uppercase">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-neon-purple/20 text-neon-purple-light border border-neon-purple/40 backdrop-blur-md flex items-center gap-1 shadow-glow-purple">
                        <Sparkles className="w-3 h-3" />
                        FEATURED
                      </span>
                    )}
                  </div>

                  {/* Quick Inspect Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-950/60 backdrop-blur-[2px]">
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-dark-800/90 hover:bg-neon-purple border border-neon-purple/40 shadow-glow-purple flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Details</span>
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-neon-cyan/80">
                      {project.subtitle}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-neon-cyan transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-dark-800 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-dark-800 text-slate-400 border border-white/5">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer: Action Links */}
                <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-3 mt-4">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Read Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repository"
                      onClick={() => sound.playClick()}
                      onMouseEnter={() => sound.playHover()}
                      className="p-2 rounded-xl bg-dark-800 text-slate-400 hover:text-white hover:bg-dark-750 border border-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      onClick={() => sound.playClick()}
                      onMouseEnter={() => sound.playHover()}
                      className="p-2 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:from-neon-purple-glow hover:to-neon-blue-glow border border-neon-purple/40 shadow-glow-purple transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Repositories Teaser */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-slate-400 mb-4">
            Curious about experimental repositories, scripts, and algorithms?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase text-white bg-dark-800 hover:bg-dark-750 border border-white/10 hover:border-neon-cyan/50 transition-all transform hover:-translate-y-0.5 shadow-sm"
          >
            <Github className="w-4 h-4 text-neon-cyan" />
            <span>Explore All Repositories on GitHub</span>
          </a>
        </div>

      </div>

      {/* Project Modal Preview */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseModal}
      />
    </section>
  );
}
