# 🚀 Futuristic Developer Portfolio

A stunning, premium, dark-themed personal portfolio website inspired by award-winning Awwwards web designs. Built with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌌 Design & Visual Features

- **Cyber Dark Theme**: Deep black (`#080808`) base accented with neon purple (`#a855f7`), electric blue (`#3b82f6`), and subtle cyan (`#06b6d4`).
- **Glassmorphism UI**: Backdrop blur effects, frosted glass cards, and glowing borders.
- **Interactive Particle Network**: Real-time HTML5 particle canvas with physics-based mouse repulsion and constellation lines.
- **Custom Cyber Cursor**: Interactive dual-ring pointer with magnetic snap on clickable elements (auto-disabled on touch devices).
- **Web Audio API Sound Synth**: Futuristic click and hover micro-interactions (with a global mute toggle in the navbar).
- **Awwwards-Grade Typography**: Modern typography featuring Google Fonts: *Syne*, *Space Grotesk*, *Plus Jakarta Sans*, and *JetBrains Mono*.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 18 & Vite
- **Styling**: Tailwind CSS with custom neon palettes, glass utilities & animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Audio Synthesizer**: Native Web Audio API

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg                  # Cyber glowing monogram SVG
├── src/
│   ├── assets/                      # Static assets & graphics
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky glassmorphism nav with audio toggle
│   │   ├── Hero.jsx                 # Dynamic typewriter, 3D hologram card & CTAs
│   │   ├── About.jsx                # Bento grid layout with personal identity & stats
│   │   ├── Skills.jsx               # Categorized skill cards with interactive tags
│   │   ├── Projects.jsx             # Filterable project showcase
│   │   ├── ProjectModal.jsx         # Full architecture preview modal
│   │   ├── Education.jsx            # Scholastic timeline with glowing nodes
│   │   ├── Experience.jsx           # Internships, hackathons, certs & workshops
│   │   ├── Contact.jsx              # Form validation & direct mail transmission
│   │   ├── Footer.jsx               # Quick coordinates, system status & back-to-top
│   │   ├── ParticleCanvas.jsx       # Interactive canvas background
│   │   ├── CustomCursor.jsx         # Custom cyber cursor
│   │   └── ResumeModal.jsx          # Interactive CV viewer & PDF exporter
│   ├── data/
│   │   └── portfolioData.js         # ⭐ CENTRALIZED CONFIG FILE FOR ALL CONTENT
│   ├── utils/
│   │   └── sound.js                 # Real-time Web Audio synthesizer
│   ├── App.jsx                      # Main app container & boot loading sequence
│   ├── index.css                    # Tailwind imports, custom scrollbar & glows
│   └── main.jsx                     # React entry point
├── index.html                       # HTML template with SEO meta tags & Google fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚡ Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```

---

## ✏️ Centralized Customization (`src/data/portfolioData.js`)

All personal information, hero text, skills, project cards, educational history, work experience, certifications, and social links are centrally managed in `src/data/portfolioData.js`. 

To personalize your portfolio, simply edit that file:
- **`personalData`**: Your name, title, roles for the typewriter effect, status pill, tagline, social links, and key stats.
- **`aboutData`**: Your story, quote, core strengths, and technical interests.
- **`skillsData`**: Add, remove, or categorize your skills (Frontend, Backend, Languages, Tools).
- **`projectsData`**: Your project titles, descriptions, metrics, tags, thumbnails, and repository/live demo links.
- **`educationData`**: Degree, university, GPA, and coursework.
- **`experienceData`**: Internships, hackathon wins, awards, and certifications.
- **`contactData`**: Direct email, timezone, and location.

---

## 📬 Contact Form Flow

The contact section includes full client-side validation for Name, Email, Subject, and Message. When submitted:
1. Validates each field according to strict format rules.
2. Formats the message cleanly.
3. Fires celebratory confetti and dispatches via the verified native `mailto:` protocol directly into your configured email (`contactData.directEmail`).
4. Provides 1-click clipboard copy for email, phone, location, and profiles.

