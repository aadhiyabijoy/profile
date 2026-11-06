/**
 * =======================================================================
 * CENTRAL PORTFOLIO CONFIGURATION
 * =======================================================================
 * Easily customize all personal details, texts, projects, skills,
 * education, experiences, and social profiles in this single file.
 */

export const personalData = {
  name: "Alex Rivera",
  preferredName: "Alex",
  title: "Developer | Programmer | Tech Enthusiast",
  roles: [
    "Full-Stack Software Engineer",
    "Creative Frontend Architect",
    "Modern Web Applications Specialist",
    "Open Source Contributor",
    "AI Integration & Cloud Explorer"
  ],
  tagline: "Architecting futuristic digital experiences through high-performance code, modern aesthetics, and scalable engineering.",
  location: "San Francisco, CA / Remote",
  email: "alex.rivera.dev@gmail.com",
  phone: "+1 (555) 382-9421",
  status: "Available for Full-time Roles & High-Impact Projects",
  statusColor: "#22c55e", // emerald green pulse
  bioShort: "A passionate engineer turning complex computational problems into elegant, accessible, and high-performance digital products.",
  
  // Social media profiles
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
    email: "mailto:alex.rivera.dev@gmail.com",
  },

  // Key stats shown in hero/about
  stats: [
    { value: "3+", label: "Years Experience", description: "Building production-grade apps" },
    { value: "25+", label: "Projects Shipped", description: "From concept to deployment" },
    { value: "12+", label: "Hackathons & Awards", description: "Recognized for innovation" },
    { value: "99.9%", label: "Code Quality", description: "Tested, accessible & clean" }
  ],

  // Resume download url or details
  resume: {
    fileName: "Alex_Rivera_Software_Engineer_Resume.pdf",
    lastUpdated: "November 2026",
    summary: "Full-Stack Engineer with strong command over React, Node.js, Python, Java, MySQL, Cloud Architecture, and creative web technologies."
  }
};

export const aboutData = {
  quote: "“The best way to predict the future is to build it with clean architecture, bold visual design, and relentless curiosity.”",
  story: [
    "I am a software engineer and creative developer fascinated by the intersection of computational engineering and breathtaking user experiences. My journey began with writing algorithmic scripts and custom web tools, evolving into building full-stack platforms that scale effortlessly.",
    "I specialize in architecting modern web ecosystems using React, TypeScript, Node.js, Python, and SQL databases, coupled with cutting-edge styling patterns, micro-interactions, and reactive state management.",
    "Beyond coding, I actively participate in hackathons, mentor aspiring developers in tech communities, and obsess over UI design systems, web performance metrics, and emerging AI paradigms."
  ],
  educationSummary: "B.S. in Computer Science & Engineering with honors, focusing on Distributed Systems, Advanced Data Structures, and Human-Computer Interaction.",
  interests: [
    { icon: "Code2", label: "Clean Code & System Design", desc: "Crafting scalable architectures and maintainable codebases." },
    { icon: "Sparkles", label: "Creative Frontend & 3D UI", desc: "Interactive web graphics, shaders, and micro-animations." },
    { icon: "Cpu", label: "AI & Intelligent Automation", desc: "Integrating LLMs, neural search, and data pipelines into apps." },
    { icon: "Layers", label: "Full-Stack Web Platforms", desc: "Resilient APIs, reactive databases, and cloud microservices." },
    { icon: "ShieldCheck", label: "Performance & Security", desc: "Sub-second load times, strict accessibility, and robust security." },
    { icon: "Globe", label: "Open Source Collaboration", desc: "Contributing to developer tooling and community libraries." }
  ],
  strengths: [
    "Rapid Problem Deconstruction & Algorithmic Thinking",
    "Pixel-Perfect UI/UX Implementation from Concept to Code",
    "Cross-Functional Communication & Team Leadership",
    "Performance Profiling, Memory Optimization & SEO",
    "Agile Sprint Delivery & Test-Driven Development",
    "Curious Mindset with Fast Tech Stack Adaptability"
  ],
  careerAmbitions: "To architect world-class digital products at scale, pioneer intuitive AI-augmented interfaces, and lead engineering teams that shape the next generation of the web."
};

export const skillsData = {
  categories: [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend Development" },
    { id: "backend", name: "Backend & Databases" },
    { id: "languages", name: "Programming Languages" },
    { id: "tools", name: "Tools & DevOps" },
  ],
  skills: [
    // Languages
    {
      name: "JavaScript",
      category: "languages",
      icon: "FileCode",
      badge: "ES6+ / Modern",
      description: "Asynchronous programming, event loops, DOM manipulation, functional paradigms.",
      highlight: true
    },
    {
      name: "Python",
      category: "languages",
      icon: "Terminal",
      badge: "Scripting / Backend / AI",
      description: "Data processing, REST APIs with FastAPI/Flask, automation, algorithms.",
      highlight: true
    },
    {
      name: "Java",
      category: "languages",
      icon: "Coffee",
      badge: "OOP / Enterprise",
      description: "Object-oriented architecture, multi-threading, Spring Boot foundations, data structures.",
      highlight: true
    },
    // Frontend
    {
      name: "React",
      category: "frontend",
      icon: "Atom",
      badge: "Component Architecture",
      description: "Custom hooks, state management (Redux/Zustand), Suspense, Framer Motion, Next.js.",
      highlight: true
    },
    {
      name: "HTML5",
      category: "frontend",
      icon: "Code",
      badge: "Semantic & Accessible",
      description: "W3C standards, semantic elements, SEO optimization, WCAG 2.1 accessibility.",
      highlight: false
    },
    {
      name: "CSS3 / Tailwind",
      category: "frontend",
      icon: "Palette",
      badge: "Design Systems & Animations",
      description: "Flexbox, CSS Grid, keyframe animations, glassmorphism, responsive mobile-first layouts.",
      highlight: true
    },
    // Backend
    {
      name: "Node.js",
      category: "backend",
      icon: "Server",
      badge: "Runtime & Microservices",
      description: "Express.js RESTful APIs, middleware architecture, JWT authentication, web sockets.",
      highlight: true
    },
    {
      name: "MySQL",
      category: "backend",
      icon: "Database",
      badge: "Relational DB",
      description: "Schema design, relational indexing, query optimization, ACID transactions, Prisma/TypeORM.",
      highlight: true
    },
    // Tools
    {
      name: "Git & GitHub",
      category: "tools",
      icon: "GitBranch",
      badge: "Version Control & CI/CD",
      description: "Branching strategies, code reviews, GitHub Actions automation, pull request workflows.",
      highlight: true
    },
    {
      name: "Vite & Modern Tooling",
      category: "tools",
      icon: "Zap",
      badge: "Build Pipelines",
      description: "HMR dev server, bundle splitting, PostCSS, ESLint, TypeScript configuration.",
      highlight: false
    },
    {
      name: "Docker & Containerization",
      category: "tools",
      icon: "Box",
      badge: "Containerization",
      description: "Dockerfiles, multi-stage builds, docker-compose local dev environments.",
      highlight: false
    },
    {
      name: "REST APIs & Postman",
      category: "backend",
      icon: "Network",
      badge: "API Architecture",
      description: "Endpoint contract design, rate-limiting, documentation, automated testing.",
      highlight: false
    }
  ]
};

export const projectsData = [
  {
    id: "project-1",
    title: "NeuroPulse — AI Analytics & Workflow Studio",
    subtitle: "Enterprise Intelligence Dashboard",
    category: "Full Stack",
    description: "A futuristic real-time telemetry and workflow intelligence platform. Features interactive data visualization graphs, dynamic neural task scheduling, and secure role-based access control.",
    longDescription: "NeuroPulse is an enterprise-grade web application built to monitor, analyze, and automate multi-agent computational pipelines. It incorporates custom SVG telemetry meters, WebSocket live event streaming, and an intuitive dark cyber-interface.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "MySQL", "Tailwind CSS", "Framer Motion", "Chart.js"],
    metrics: ["Sub-50ms API Latency", "99.9% Uptime", "10k+ Daily Events"],
    features: [
      "Real-time event streaming via WebSockets",
      "Interactive data telemetry with dark glassmorphic UI",
      "Dynamic query builder with MySQL indexing",
      "Granular role-based authentication with JWT"
    ],
    github: "https://github.com",
    liveDemo: "https://example.com/neuropulse",
    featured: true
  },
  {
    id: "project-2",
    title: "OmniSphere — Decentralized Asset Hub",
    subtitle: "Next-Gen Web3 & Fintech Interface",
    category: "Full Stack",
    description: "A sleek, responsive fintech portal for tracking digital assets, cross-border payments, and portfolio allocation with biometric mock-auth and fluid animations.",
    longDescription: "OmniSphere provides investors and tech enthusiasts with instant market clarity. Designed with electric blue and neon purple neon palettes, it provides interactive candlestick charts and historical balance tracking.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "JavaScript", "Node.js", "Tailwind CSS", "REST API", "Lucide"],
    metrics: ["240fps Smooth Animations", "Mobile Responsive", "Awwwards Nominee"],
    features: [
      "Fluid portfolio distribution visualizer",
      "Simulated transactional ledger with instant balance updates",
      "Custom currency converter using live currency exchange feeds",
      "Adaptive dark/cyber theme with ambient glow filters"
    ],
    github: "https://github.com",
    liveDemo: "https://example.com/omnisphere",
    featured: true
  },
  {
    id: "project-3",
    title: "ApexCloud — Microservices Engine",
    subtitle: "High-Throughput Backend Architecture",
    category: "Backend",
    description: "Scalable backend service architecture built with Node.js and MySQL, providing resilient distributed queuing, cached endpoints, and telemetry monitoring.",
    longDescription: "ApexCloud was engineered to demonstrate high-concurrency request handling, database connection pooling with MySQL, and automated CI/CD pipeline deployments using Git and GitHub Actions.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "MySQL", "Python", "Git & GitHub", "Docker", "Express"],
    metrics: ["5000+ Req/sec", "Zero Data Loss", "ACID Compliant"],
    features: [
      "Optimized MySQL schema with partitioned tables and composite indexes",
      "Asynchronous background worker queue for automated data synthesis",
      "Automated test suites achieving 94% branch coverage",
      "Containerized deployment scripts and environment validation"
    ],
    github: "https://github.com",
    liveDemo: "https://example.com/apexcloud",
    featured: true
  },
  {
    id: "project-4",
    title: "AuraOS — Web-Based Spatial Desktop",
    subtitle: "Creative Web Experience",
    category: "Frontend",
    description: "An experimental futuristic browser operating system showcasing draggable glassmorphic windows, terminal emulator, audio synthesizer, and custom desktop widgets.",
    longDescription: "AuraOS explores the boundaries of what is possible inside the web browser. It features a complete desktop UI with draggable, resizable windows, an integrated code viewer, system settings, and interactive audio feedback.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "HTML5", "CSS3", "JavaScript", "Framer Motion", "Web Audio API"],
    metrics: ["60 FPS Rendering", "Zero External Canvas Deps", "Sub-100KB Bundle"],
    features: [
      "Custom window manager with stacking context and minimize/maximize states",
      "Interactive command-line shell with simulated file system",
      "Spatial sound design powered by native browser Web Audio synthesis",
      "Keyboard shortcut manager with global command palette"
    ],
    github: "https://github.com",
    liveDemo: "https://example.com/auraos",
    featured: true
  },
  {
    id: "project-5",
    title: "CodeMorph — Intelligent Code Refactorer",
    subtitle: "Developer Productivity Suite",
    category: "Full Stack",
    description: "A smart developer companion that analyzes Java, Python, and JavaScript code to detect anti-patterns, propose performance optimizations, and generate unit tests.",
    longDescription: "Built for engineers who care about clean code, CodeMorph parses abstract syntax trees to highlight complexity hot-spots and offer instant refactoring diffs.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "JavaScript", "React", "Node.js", "Git"],
    metrics: ["15+ Syntax Analyzers", "Real-Time Diff Viewer", "CLI & Web UI"],
    features: [
      "Multi-language code parser supporting Python, JavaScript, and Java",
      "Side-by-side interactive code difference viewer",
      "Exportable test templates and documentation generators",
      "Offline-first local caching for rapid iteration"
    ],
    github: "https://github.com",
    liveDemo: "https://example.com/codemorph",
    featured: false
  },
  {
    id: "project-6",
    title: "NexusFlow — Dev Community & Knowledge Base",
    subtitle: "Collaborative Engineering Forum",
    category: "Full Stack",
    description: "A collaborative technical discussion forum and knowledge repository featuring markdown documentation, upvoting system, tag filtering, and syntax highlighting.",
    longDescription: "NexusFlow empowers technical teams to preserve institutional knowledge. It combines modern forum discussions with version-controlled wiki documentation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "MySQL", "Tailwind CSS", "REST API"],
    metrics: ["100% Responsive", "Markdown Supported", "Instant Full-Text Search"],
    features: [
      "Rich markdown authoring with live split-screen preview",
      "Dynamic tagging and thread categorizations",
      "MySQL full-text indexing for lightning-fast search queries",
      "Reputation and badge award system for community contributors"
    ],
    github: "https://github.com",
    liveDemo: "https://example.com/nexusflow",
    featured: false
  }
];

export const educationData = [
  {
    id: "edu-1",
    institution: "California Institute of Technology & Computing",
    degree: "Bachelor of Science in Computer Science & Engineering",
    period: "2021 — 2025",
    gpa: "3.89 / 4.00 (Summa Cum Laude)",
    location: "California, USA",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems & SQL",
      "Object-Oriented Programming (Java & C++)",
      "Operating Systems & Distributed Computing",
      "Computer Networks & Security",
      "Full-Stack Web Development & Cloud Systems",
      "Human-Computer Interaction (HCI)"
    ],
    achievements: [
      "Dean's Honor List for 7 consecutive semesters for academic excellence",
      "Lead Organizer of Annual Campus Hackathon (500+ participants)",
      "Published Undergraduate Research Paper on 'Optimizing Relational Queries for Low-Latency Web Microservices'",
      "Head Teaching Assistant for Advanced Data Structures in Java"
    ],
    capstone: "Engineered a high-performance distributed caching layer reducing database lookups by 62%."
  },
  {
    id: "edu-2",
    institution: "St. Jude Senior Academy of Sciences",
    degree: "Higher Secondary Certificate — STEM Major",
    period: "2019 — 2021",
    gpa: "96.4% Distinction",
    location: "California, USA",
    courses: [
      "Advanced Mathematics & Calculus",
      "Physics & Mechanics",
      "Computer Science (Python & SQL)",
      "Chemistry & Laboratory Techniques"
    ],
    achievements: [
      "State Science Olympiad Gold Medalist in Computer Science",
      "President of High School Coding Club & Robotics Society",
      "Developed high school's first automated timetable generation software"
    ]
  }
];

export const experienceData = {
  internships: [
    {
      role: "Full-Stack Software Engineering Intern",
      company: "Veloce Technologies Inc.",
      location: "San Francisco, CA (Hybrid)",
      period: "May 2024 — August 2024",
      description: "Spearheaded frontend component refactoring and built RESTful microservice endpoints that powered the core customer onboarding portal.",
      responsibilities: [
        "Architected reusable React components with Tailwind CSS and Framer Motion, improving frontend load performance by 38%.",
        "Designed and implemented 14+ secure Node.js Express REST API endpoints connected to MySQL databases.",
        "Integrated automated Git workflow checks with GitHub Actions, reducing deployment errors by 25%.",
        "Collaborated with senior engineers on database normalization, indexing strategies, and query profiling."
      ],
      technologies: ["React", "Node.js", "MySQL", "JavaScript", "Git", "Tailwind CSS"]
    },
    {
      role: "Frontend Developer Intern",
      company: "Quantum Digital Labs",
      location: "Remote",
      period: "June 2023 — September 2023",
      description: "Focused on responsive web development, web accessibility (WCAG), and interactive data dashboards for client analytics platforms.",
      responsibilities: [
        "Converted Figma design mockups into pixel-perfect, responsive HTML5/CSS3/React interfaces.",
        "Created dynamic visualization charts and interactive tables handling 5,000+ active rows.",
        "Conducted cross-browser compatibility testing across Chrome, Firefox, Safari, and mobile viewports."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "React", "Git", "Figma"]
    }
  ],
  certifications: [
    {
      title: "Meta Certified Front-End Developer",
      issuer: "Meta / Coursera",
      date: "2024",
      credentialId: "META-FE-99281A",
      link: "https://coursera.org",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "UI/UX", "Git"]
    },
    {
      title: "Oracle Certified Associate — Java SE Programmer",
      issuer: "Oracle Corporation",
      date: "2023",
      credentialId: "OCA-JAVA-548102",
      link: "https://oracle.com",
      skills: ["Java", "OOP", "Data Structures", "Algorithms", "Concurrency"]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-CCP-773190",
      link: "https://aws.amazon.com",
      skills: ["Cloud Architecture", "S3", "EC2", "RDS MySQL", "IAM"]
    },
    {
      title: "Python for Data Science & Automation",
      issuer: "University of Michigan",
      date: "2023",
      credentialId: "UM-PY-339182",
      link: "https://coursera.org",
      skills: ["Python", "Scripting", "Data Structures", "REST APIs"]
    }
  ],
  hackathonsAndAwards: [
    {
      title: "1st Place Winner — Global HackTech 2024",
      event: "Global HackTech 48-Hour Virtual Hackathon",
      date: "October 2024",
      badge: "Winner (Grand Prize)",
      description: "Led a 4-person team to build 'NeuroPulse' AI telemetry dashboard from scratch in 48 hours, winning 1st place among 180+ international engineering teams."
    },
    {
      title: "Best UI/UX Design Award — Silicon Valley HackFest",
      event: "Silicon Valley Tech Summit",
      date: "March 2024",
      badge: "Design Excellence",
      description: "Awarded Best Design & User Experience for an interactive browser-based spatial workspace with sound effects and glassmorphic micro-interactions."
    },
    {
      title: "National Coding Champion (Top 1%)",
      event: "National Inter-Collegiate Algorithmic Challenge",
      date: "November 2023",
      badge: "National Finalist",
      description: "Ranked 14th out of 4,200+ participants in rapid algorithmic problem-solving with Python and Java."
    },
    {
      title: "Open Source Contributor of the Month",
      event: "Developer Guild Open Community",
      date: "August 2023",
      badge: "Community Star",
      description: "Recognized for optimizing build performance and documentation across popular React starter tools."
    }
  ],
  workshopsAndEvents: [
    {
      title: "Workshop: Building Scalable Cloud Microservices with Node.js & MySQL",
      role: "Keynote Speaker & Hands-on Mentor",
      organization: "Tech Innovators Society",
      date: "September 2024",
      attendees: "150+ Attendees"
    },
    {
      title: "Masterclass: Modern CSS, Glassmorphism & Framer Motion Animations",
      role: "Workshop Conductor",
      organization: "University Frontend Developers Club",
      date: "April 2024",
      attendees: "200+ Students"
    },
    {
      title: "Panelist: The Future of Full-Stack Web Development in the Age of AI",
      role: "Panelist",
      organization: "NextGen Tech Conference",
      date: "January 2024",
      attendees: "400+ In-person & Online"
    }
  ]
};

export const contactData = {
  directEmail: "alex.rivera.dev@gmail.com",
  phone: "+1 (555) 382-9421",
  location: "San Francisco, California, USA (Open to Remote Worldwide)",
  timezone: "PST (UTC-8) — Flexible overlap with worldwide teams",
  officeHours: "Monday — Saturday: 9:00 AM – 7:00 PM PST",
  responseGuarantee: "Guaranteed response within 24 hours"
};

