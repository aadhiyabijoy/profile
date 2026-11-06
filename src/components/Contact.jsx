import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  AlertCircle,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData, contactData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'mailto_ready' | null

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a subject (at least 3 characters).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message (at least 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleCopy = (text, fieldName) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playClick();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Realistic genuine workflow:
    // Formats message and launches native mailto so message is authentically sent to the developer's inbox
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('mailto_ready');
      sound.playSuccess();

      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.75 },
          colors: ['#a855f7', '#3b82f6', '#06b6d4'],
        });
      } catch {
        // ignore
      }

      // Construct verified mailto link
      const emailRecipient = encodeURIComponent(contactData.directEmail);
      const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
      const emailBody = encodeURIComponent(
        `Hi Alex,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from alexrivera.dev portfolio`
      );

      const mailtoUrl = `mailto:${emailRecipient}?subject=${emailSubject}&body=${emailBody}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-dark-950/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-neon-purple/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800/80 border border-neon-cyan/30 text-neon-cyan font-mono text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 // Initiate Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in hiring me for full-time roles, collaborating on open-source initiatives, or exploring high-performance consulting? Drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Profiles (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 space-y-4 hover:border-neon-cyan/40 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-neon-cyan/15 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(contactData.directEmail, 'email')}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-dark-800 hover:bg-dark-750 text-slate-300 border border-white/10 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Direct Email</span>
                <a
                  href={`mailto:${contactData.directEmail}`}
                  className="block text-base sm:text-lg font-mono font-bold text-white hover:text-neon-cyan transition-colors"
                >
                  {contactData.directEmail}
                </a>
              </div>
              <p className="text-xs text-slate-400">
                {contactData.responseGuarantee}. Checked daily.
              </p>
            </div>

            {/* Location & Timezone Card */}
            <div className="glass-card rounded-3xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-neon-purple/15 border border-neon-purple/30 flex items-center justify-center text-neon-purple-light shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase">Current Base</span>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {contactData.location}
                  </div>
                  <div className="text-xs font-mono text-neon-cyan mt-1">
                    {contactData.timezone}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels Strip */}
            <div className="glass-card rounded-3xl p-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Professional Networks & Code Hubs
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-dark-800/60 hover:bg-dark-750 border border-white/5 hover:border-neon-blue/40 transition-all text-xs text-slate-300 hover:text-white"
                >
                  <Linkedin className="w-4 h-4 text-neon-blue-light" />
                  <span className="font-semibold">LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-slate-500" />
                </a>

                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-dark-800/60 hover:bg-dark-750 border border-white/5 hover:border-neon-cyan/40 transition-all text-xs text-slate-300 hover:text-white"
                >
                  <Github className="w-4 h-4 text-neon-cyan" />
                  <span className="font-semibold">GitHub</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-slate-500" />
                </a>
              </div>
            </div>

            {/* Transparent Architecture Note */}
            <div className="p-4 rounded-2xl bg-dark-900/80 border border-white/10 text-xs text-slate-400 space-y-1 font-mono">
              <div className="flex items-center gap-1.5 text-neon-cyan font-bold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Verified Direct Pipeline</span>
              </div>
              <p>
                This form validates your transmission and executes via standard native mailto protocol directly into my personal mailbox.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative">
              
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill out the parameters below to initiate discussion.
                </p>
              </div>

              {/* Status Message */}
              {submissionStatus === 'mailto_ready' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm space-y-1"
                >
                  <div className="flex items-center gap-2 font-bold">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Message formatted and opened in your email client!</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    If your email client didn't open automatically, you can also reach me directly at{' '}
                    <strong className="text-white font-mono">{contactData.directEmail}</strong>.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                      Your Name <span className="text-neon-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-800/90 border ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-neon-purple'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors font-sans`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                      Your Email <span className="text-neon-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="s.connor@cyberdyne.io"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-800/90 border ${
                        errors.email ? 'border-red-500' : 'border-white/10 focus:border-neon-purple'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors font-sans`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                    Subject / Project Topic <span className="text-neon-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full-Stack Engineer Role / Project Consultation"
                    className={`w-full px-4 py-3 rounded-xl bg-dark-800/90 border ${
                      errors.subject ? 'border-red-500' : 'border-white/10 focus:border-neon-purple'
                    } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors font-sans`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                    Transmission Content / Message <span className="text-neon-cyan">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Alex, I came across your portfolio and wanted to discuss an upcoming opportunity..."
                    className={`w-full px-4 py-3 rounded-xl bg-dark-800/90 border ${
                      errors.message ? 'border-red-500' : 'border-white/10 focus:border-neon-purple'
                    } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none font-sans`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan hover:from-neon-purple-glow hover:to-neon-cyan-glow border border-neon-purple/40 shadow-glow-mixed transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Preparing Transmission...</span>
                    </span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

