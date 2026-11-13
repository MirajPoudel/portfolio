import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Network,
  PanelTop,
  Sparkles,
  X,
} from 'lucide-react';
import profilePhoto from './assets/miraj-poudel.jpg';

type Project = {
  name: string;
  category: string;
  description: string;
  details: string;
  stack: string[];
  mark: string;
  visual: string;
  concept?: boolean;
  repoUrl?: string;
  demoUrl?: string;
};

const navigation = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const contactEmail = 'amazingmiraj842@gmail.com';

const skillGroups = [
  {
    title: 'Programming & backend',
    icon: Braces,
    skills: ['Python', 'FastAPI', 'PHP (Basic)', 'REST API Development'],
  },
  {
    title: 'AI & machine learning',
    icon: Sparkles,
    skills: [
      'Machine Learning', 'Scikit-learn', 'NumPy', 'Pandas', 'Data Preprocessing',
      'Feature Engineering', 'Model Training and Evaluation', 'LangChain', 'RAG',
      'LLM Integration', 'AI Agents',
    ],
  },
  { title: 'Databases', icon: Database, skills: ['MongoDB', 'SQLite'] },
  { title: 'Data visualization', icon: Layers3, skills: ['Matplotlib', 'Seaborn'] },
  { title: 'Tools', icon: Code2, skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Streamlit', 'Docker (Learning)'] },
];

const projects: Project[] = [
  {
    name: 'Cortex AI',
    category: 'AI / RAG application',
    description: 'A local RAG assistant for chatting with PDFs, text, and other documents using Ollama and FAISS.',
    details: 'Upload PDFs, text, and other document formats and chat with them locally. Ollama and FAISS power the RAG workflow in a dark glassmorphic interface.',
    stack: ['Python', 'Ollama', 'FAISS', 'RAG', 'Document Processing'],
    mark: '01',
    visual: 'retrieval',
    repoUrl: 'https://github.com/MirajPoudel/Cortex-AI',
  },
  {
    name: 'DocMind AI',
    category: 'AI / document intelligence',
    description: 'A PDF assistant for moving from uploaded documents to natural-language questions.',
    details: 'A document intelligence workflow for PDF upload, extraction, retrieval, and natural-language questions. Designed to make long documents more approachable through an AI-assisted interface.',
    stack: ['Python', 'Streamlit', 'LlamaParse', 'RAG', 'LLM Integration'],
    mark: '02',
    visual: 'document',
    repoUrl: 'https://github.com/MirajPoudel/DocMind-AI',
  },
  {
    name: 'AI Data Analyst',
    category: 'AI / data analysis',
    description: 'An AI data-analysis project for exploring datasets and surfacing useful insights.',
    details: 'A data-analysis project focused on making dataset exploration and insight discovery more approachable.',
    stack: ['AI', 'Data Analysis', 'Dataset Exploration'],
    mark: '03',
    visual: 'analysis',
    repoUrl: 'https://github.com/MirajPoudel/AI-DA',
  },
  {
    name: 'BugShield-AI',
    category: 'AI / multi-agent systems / developer tools',
    description: 'A four-agent code review tool designed to run locally with Ollama.',
    details: 'Reviews pasted or uploaded code, or public GitHub file links, to identify bugs, vulnerabilities, performance concerns, and style issues. It uses a local Ollama model, without requiring external API keys.',
    stack: ['Python', 'AI Agents', 'Multi-Agent Architecture', 'Ollama', 'Local LLMs', 'Code Analysis'],
    mark: '04',
    visual: 'agents',
    repoUrl: 'https://github.com/MirajPoudel/Bug-Shield-AI',
  },
  {
    name: 'PHP Forum Website',
    category: 'Full-stack web development',
    description: 'A community forum built around registration, topics, and discussion.',
    details: 'A PHP/MySQL community forum with registration, login, topics, and discussions. It demonstrates backend development, session authentication, and database management.',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    mark: '05',
    visual: 'forum',
    repoUrl: 'https://github.com/MirajPoudel/forum',
  },
  {
    name: 'Heart Stroke Prediction',
    category: 'Machine Learning / Healthcare',
    description: 'Predicts heart disease risk from patient health and clinical features through a Streamlit interface.',
    details: 'A machine learning project that predicts the likelihood of heart disease based on patient health and clinical features. The project includes data preprocessing, feature handling, model training, evaluation, and an interactive Streamlit interface for making predictions.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'Machine Learning'],
    mark: '10',
    visual: 'health',
    repoUrl: 'https://github.com/MirajPoudel/Heart-Stroke-prediction',
  },
  {
    name: 'Trip Planner',
    category: 'AI / Travel Planning',
    description: 'Creates personalized itineraries from destinations, preferences, available time, and travel needs.',
    details: 'An intelligent trip planning application designed to help users create personalized travel plans based on their destination, preferences, available time, and travel requirements. The project focuses on using technology to simplify itinerary planning and provide useful travel recommendations.',
    stack: ['Python', 'AI/LLM', 'Streamlit', 'API Integration'],
    mark: '11',
    visual: 'travel',
    repoUrl: 'https://github.com/MirajPoudel/Trip-planner',
  },
  {
    name: 'Movie Recommendation System',
    category: 'Machine Learning / Recommendation System',
    description: 'Suggests personalized movies using user preferences and similarity-based recommendations.',
    details: 'A machine learning-based movie recommendation system that suggests movies to users based on movie characteristics and user preferences. The project explores recommendation techniques, data preprocessing, similarity-based recommendations, and presenting personalized movie suggestions.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning', 'Recommendation System'],
    mark: '12',
    visual: 'recommendation',
    repoUrl: 'https://github.com/MirajPoudel/movie_recommendation_system',
  },
];

const capabilities = [
  { icon: Sparkles, title: 'Machine learning solutions', note: 'Predictive modeling and practical ML workflows' },
  { icon: Bot, title: 'AI application development', note: 'Useful interfaces around modern AI capabilities' },
  { icon: Network, title: 'AI agent development', note: 'Agentic systems for focused tasks and workflows' },
  { icon: PanelTop, title: 'Backend & API development', note: 'Python services and REST API foundations' },
  { icon: Layers3, title: 'Data analysis', note: 'Preparing, exploring, and understanding data' },
];

const journey = [
  { title: 'CSIT education', text: 'Building a foundation in computer science at Lumbini ICT Campus.' },
  { title: 'Python & data analysis', text: 'Learning to work with data, tools, and practical programming workflows.' },
  { title: 'Machine learning', text: 'Exploring predictive modeling, feature engineering, and evaluation.' },
  { title: 'LLM applications', text: 'Working with LangChain and LLM-powered application patterns.' },
  { title: 'Practical projects', text: 'Applying new ideas through projects and hackathons.' },
  { title: 'Continuing forward', text: 'Growing toward a long-term career in AI/ML engineering.' },
];

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) {
      element?.classList.add('is-visible');
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal-on-scroll ${className}`}>{children}</div>;
}

function ProjectVisual({ type, mark }: { type: string; mark: string }) {
  const artIcon = type === 'agents'
    ? <Network size={29} />
    : type === 'document'
      ? <MessageSquareText size={29} />
      : type === 'forum'
        ? <PanelTop size={29} />
        : type === 'analysis' || type === 'recommendation'
          ? <Layers3 size={29} />
          : type === 'orbit' || type === 'health'
            ? <Sparkles size={29} />
            : type === 'travel'
              ? <MapPin size={29} />
              : <Database size={29} />;
  const artCaption = type === 'agents'
    ? 'LOCAL / MULTI-AGENT'
    : type === 'orbit'
      ? 'MODEL / CLASSIFICATION'
      : type === 'health'
        ? 'MODEL / HEALTHCARE'
        : type === 'travel'
          ? 'AI / TRAVEL PLANNING'
          : type === 'recommendation'
            ? 'MODEL / RECOMMENDATION'
            : type === 'forum'
              ? 'WEB / COMMUNITY'
              : type === 'analysis'
                ? 'DATA / EXPLORATION'
                : type === 'document'
                  ? 'DOCS / RETRIEVAL'
                  : 'AI / RETRIEVAL';
  return (
    <div className={`project-art art-${type} relative flex h-[172px] items-center justify-center overflow-hidden`}>
      <div className="art-index mono absolute left-5 top-5">{mark} / FIELD NOTES</div>
      <div className="art-symbol">{artIcon}</div>
      <div className="art-orbit orbit-a" />
      <div className="art-orbit orbit-b" />
      <div className="art-caption mono absolute bottom-5 right-5">{artCaption}</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('top');
  const [formStatus, setFormStatus] = useState('');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  useEffect(() => {
    document.title = 'Miraj Poudel — AI/ML & Python';
    const description = 'Miraj Poudel is a CSIT student and aspiring AI/ML Engineer building practical tools with Python, machine learning, and AI.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
    let theme = document.querySelector('meta[name="theme-color"]');
    if (!theme) {
      theme = document.createElement('meta');
      theme.setAttribute('name', 'theme-color');
      document.head.appendChild(theme);
    }
    theme.setAttribute('content', '#0a0a10');
  }, []);

  useEffect(() => {
    const sectionIds = ['top', 'about', 'skills', 'projects', 'services', 'journey', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeProject) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveProject(null);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!contactEmail) {
      setFormStatus('Email delivery is not configured yet. Please use the email link instead.');
      return;
    }

    const formData = new FormData(event.currentTarget);
    const getField = (name: string) => String(formData.get(name) ?? '').trim();
    const senderName = getField('name');
    const senderEmail = getField('email');
    const subject = getField('subject').replace(/[\r\n]+/g, ' ');
    const message = getField('message');
    const body = `Name: ${senderName}\nEmail: ${senderEmail}\n\n${message}`;
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&reply-to=${encodeURIComponent(senderEmail)}`;

    setFormStatus(`Your email app should open with a draft addressed to ${contactEmail}. Review it and press Send.`);
    window.location.href = mailto;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Miraj Poudel, home">
            <span className="wordmark-mark">MP</span>
            <span className="wordmark-name">Miraj Poudel<span className="wordmark-period">.</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => <a className="nav-link" aria-current={activeSection === item.href.slice(1) ? 'location' : undefined} href={item.href} key={item.label}>{item.label}</a>)}
          </nav>
          <a href="#contact" className="header-cta">Let's Connect <ArrowUpRight size={14} /></a>
          <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav mobile-menu" aria-label="Mobile navigation">
            {navigation.map((item) => <a aria-current={activeSection === item.href.slice(1) ? 'location' : undefined} href={item.href} key={item.label} onClick={closeMenu}>{item.label}<ArrowUpRight size={15} /></a>)}
            <a href="#contact" className="mobile-contact" onClick={closeMenu}>Let's Connect <ArrowUpRight size={15} /></a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid ambient-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="hero-kicker reveal"><span className="status-dot" /> CSIT STUDENT <span className="kicker-divider">/</span> AI &amp; ML</div>
              <h1 className="display reveal reveal-delay-1">Hi, I&apos;m<br /><span className="hero-emphasis">Miraj Poudel.</span></h1>
              <p className="hero-professional-line reveal reveal-delay-2">Building Intelligent Solutions with AI &amp; Machine Learning.</p>
              <p className="hero-description reveal reveal-delay-2">I&apos;m a Computer Science student and aspiring AI/ML Engineer passionate about transforming ideas into practical applications using Python, Machine Learning, and Artificial Intelligence.</p>
              <div className="hero-actions reveal reveal-delay-3">
                <a href="#projects" className="button-primary">Explore My Projects <ArrowDownRight size={16} /></a>
                <a href="#contact" className="button-quiet">Let&apos;s Connect <ArrowUpRight size={15} /></a>
              </div>
              <div className="hero-meta reveal reveal-delay-3">
                <span><MapPin size={14} /> Nepal</span>
                <span className="meta-separator" />
                <span className="mono">AI/ML ENGINEER · ASPIRING</span>
              </div>
            </div>
            <div className="hero-profile-stage reveal reveal-delay-2">
              <div className="hero-profile-orbit orbit-one" />
              <div className="hero-profile-orbit orbit-two" />
              <div className="hero-profile-frame">
                <img className="hero-profile-photo" src={profilePhoto} alt="Portrait of Miraj Poudel" />
              </div>
              <span className="hero-tech-label tech-python mono">Python</span>
              <span className="hero-tech-label tech-ml mono">Machine Learning</span>
              <span className="hero-tech-label tech-fastapi mono">FastAPI</span>
              <span className="hero-tech-label tech-ai mono">AI</span>
            </div>
          </div>
          <a className="scroll-cue mono" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section about-section" id="about">
          <div className="container">
            <Reveal className="section-topline"><span className="eyebrow">01 / About</span><span className="topline-rule" /></Reveal>
            <div className="about-layout">
              <Reveal className="about-identity">
                <div className="profile-facts" aria-label="Profile information">
                  <span className="profile-facts-heading mono">PROFILE / 01</span>
                  <div><span>Name</span><strong>Miraj Poudel</strong></div>
                  <div><span>Education</span><strong>BSc CSIT</strong></div>
                  <div><span>Institution</span><strong>Lumbini ICT Campus</strong></div>
                  <div><span>University</span><strong>Tribhuvan University</strong></div>
                  <div><span>Career goal</span><strong>AI/ML Engineer</strong></div>
                  <div><span>Location</span><strong>Nepal</strong></div>
                </div>
              </Reveal>
              <Reveal className="about-copy">
                <p className="eyebrow">A curious engineer in the making</p>
                <h2 className="section-heading">A Little About Me</h2>
                <p className="about-lead">I&apos;m pursuing a Bachelor&apos;s degree in Computer Science and Information Technology at Lumbini ICT Campus, affiliated with Tribhuvan University.</p>
                <p className="body-copy">My journey in technology revolves around learning, experimenting, and building. I&apos;ve explored Python programming, data analysis, machine learning, deep learning fundamentals, and AI application development.</p>
                <p className="body-copy">I enjoy practical projects that make everyday tasks easier, from prediction systems to AI-powered applications, and I seek opportunities to improve through building and hackathons. My long-term goal is to become a skilled AI/ML Engineer and contribute to meaningful technology solutions.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <Reveal className="section-topline"><span className="eyebrow">02 / Skills</span><span className="topline-rule" /></Reveal>
            <div className="skills-intro">
              <div><h2 className="section-heading">My Technical <span className="muted-heading">Arsenal</span></h2></div>
              <p className="section-intro">A growing toolkit across software, data, and applied AI. No scorecards — just the technologies shaping what I build.</p>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return <Reveal className={`skill-group skill-group-${index}`} key={group.title}>
                  <div className="skill-group-head"><span className="skill-icon"><Icon size={17} /></span><h3>{group.title}</h3><span className="skill-count mono">{String(group.skills.length).padStart(2, '0')}</span></div>
                  <div className="skill-list">{group.skills.map((skill) => <span className={`skill-chip ${skill.includes('Learning') ? 'learning-chip' : ''}`} key={skill}>{skill}{skill.includes('Learning') && <span className="learning-dot" aria-label="currently learning" />}</span>)}</div>
                </Reveal>;
              })}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <Reveal className="section-topline"><span className="eyebrow">03 / Selected projects</span><span className="topline-rule" /></Reveal>
            <div className="projects-heading">
              <div><h2 className="section-heading">Projects I&apos;ve Built</h2></div>
              <p className="section-intro">A selection of ideas and implementations across AI, machine learning, and web development. Open any project for more context.</p>
            </div>
            <div className="project-grid" id="project-grid">
              {visibleProjects.map((project) => (
                <article className="project-card" key={project.name}>
                  <button className="project-open" type="button" onClick={() => setActiveProject(project)} aria-label={`View details for ${project.name}`}>
                    <ProjectVisual type={project.visual} mark={project.mark} />
                    <div className="project-content">
                      <div className="project-category-row"><span className="project-category">{project.category}</span>{project.concept && <span className="concept-tag">CONCEPT</span>}</div>
                      <div className="project-title-row"><h3>{project.name}</h3><span className="project-arrow"><ArrowUpRight size={17} /></span></div>
                      <p>{project.description}</p>
                      <div className="project-stack">{project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}{project.stack.length > 4 && <span className="stack-more">+{project.stack.length - 4}</span>}</div>
                    </div>
                  </button>
                </article>
              ))}
            </div>
            {projects.length > 4 && (
              <div className="projects-actions">
                <button
                  className="button-quiet projects-toggle"
                  type="button"
                  aria-expanded={showAllProjects}
                  aria-controls="project-grid"
                  onClick={() => setShowAllProjects((showing) => !showing)}
                >
                  {showAllProjects ? 'Show fewer projects' : 'See more projects'}
                  <ChevronRight className="projects-toggle-chevron" size={16} />
                </button>
              </div>
            )}
            <div className="projects-footnote"><span className="mono">A WORKING NOTE</span><span>Open a project to view its GitHub link when available.</span></div>
          </div>
        </section>

        <section className="section capabilities-section" id="services">
          <div className="container capabilities-layout">
            <Reveal className="capabilities-intro">
              <span className="eyebrow">04 / Areas of focus</span>
              <h2 className="section-heading">What I Can Build</h2>
              <p className="section-intro">Areas I’m interested in contributing to as I continue learning and building.</p>
              <span className="not-services-note mono">CAPABILITIES · NOT FREELANCE SERVICE CLAIMS</span>
            </Reveal>
            <div className="capability-list">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return <Reveal className="capability-item" key={item.title}><span className="capability-index mono">0{index + 1}</span><span className="capability-icon"><Icon size={18} /></span><div><h3>{item.title}</h3><p>{item.note}</p></div><ArrowUpRight className="capability-arrow" size={16} /></Reveal>;
              })}
            </div>
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="container">
            <Reveal className="section-topline"><span className="eyebrow">05 / Learning journey</span><span className="topline-rule" /></Reveal>
            <div className="journey-heading"><h2 className="section-heading">My Journey</h2><p className="section-intro">No dates on a learning journey. Just the next thing to understand, and the next thing to build.</p></div>
            <div className="journey-track">
              {journey.map((item, index) => <Reveal className="journey-step" key={item.title}><span className="journey-number mono">0{index + 1}</span><div className="journey-node"><span /></div><div className="journey-step-copy"><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="container contact-layout">
            <Reveal className="contact-copy">
              <span className="eyebrow">06 / Get in touch</span>
              <h2 className="display">Let&apos;s Build<br /><span>Something Together</span></h2>
              <p>I'm always interested in connecting with developers, AI enthusiasts, and people working on innovative ideas. Feel free to reach out if you'd like to collaborate, discuss technology, or explore opportunities.</p>
              <div className="social-links">
                <a href="https://github.com/MirajPoudel18" target="_blank" rel="noreferrer"><Github size={17} /><span>GitHub</span><ExternalLink size={13} /></a>
                <a href="https://www.linkedin.com/in/miraj-poudel-198101295/" target="_blank" rel="noreferrer"><ArrowUpRight size={17} /><span>LinkedIn</span><ExternalLink size={13} /></a>
                <a href="https://www.kaggle.com/mirajpoudell" target="_blank" rel="noreferrer"><span className="social-brand-mark" aria-hidden="true">K</span><span>Kaggle · mirajpoudell</span><ExternalLink size={13} /></a>
                <a href="https://medium.com/@amazingmiraj842" target="_blank" rel="noreferrer"><span className="social-brand-mark" aria-hidden="true">M</span><span>Medium · @amazingmiraj842</span><ExternalLink size={13} /></a>
              </div>
              {contactEmail ? (
                <a className="email-placeholder" href={`mailto:${contactEmail}`}><Mail size={16} /><span>{contactEmail}</span></a>
              ) : (
                <button className="email-placeholder" type="button" disabled title="Add a public email address in the portfolio settings"><Mail size={16} /><span>Email address not configured</span><span className="unavailable-label mono">UNAVAILABLE</span></button>
              )}
            </Reveal>
            <Reveal className="contact-form-wrap">
              <div className="form-heading"><span className="mono">A NOTE FOR MIRAJ</span><span className="form-lock">EMAIL DRAFT</span></div>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label htmlFor="contact-name">Your name</label>
                <input className="input-field" id="contact-name" name="name" type="text" placeholder="How should I address you?" required />
                <label htmlFor="contact-email">Your email</label>
                <input className="input-field" id="contact-email" name="email" type="email" placeholder="you@example.com" required />
                <label htmlFor="contact-subject">Subject</label>
                <input className="input-field" id="contact-subject" name="subject" type="text" placeholder="What would you like to discuss?" required />
                <label htmlFor="contact-message">Your message</label>
                <textarea className="input-field" id="contact-message" name="message" rows={4} placeholder="What would you like to talk about?" required />
                <button className="button-primary form-submit" type="submit">Open email draft <ArrowRight size={16} /></button>
                <p className="form-disclaimer">Your email app will open with a prepared draft. Review it and press Send to deliver your message.</p>
                {formStatus && <p className="form-status" role="status"><span><MessageSquareText size={15} /></span>{formStatus}</p>}
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#top"><span className="wordmark-mark">MP</span><span>Designed &amp; Built by Miraj Poudel<span className="footer-period">.</span></span></a>
          <span className="footer-location mono">NEPAL · AI / ML / PYTHON</span>
          <div className="footer-socials">
            <a href="https://github.com/MirajPoudel18" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
            <a href="https://www.linkedin.com/in/miraj-poudel-198101295/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
            <a href="https://www.kaggle.com/mirajpoudell" target="_blank" rel="noreferrer" aria-label="Kaggle: mirajpoudell"><span className="footer-social-mark">K</span></a>
            <a href="https://medium.com/@amazingmiraj842" target="_blank" rel="noreferrer" aria-label="Medium: @amazingmiraj842"><span className="footer-social-mark">M</span></a>
          </div>
          <span className="footer-copyright">© {new Date().getFullYear()} Miraj Poudel</span>
          <a className="back-top" href="#top">Back to top <ChevronRight size={14} /></a>
        </div>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProject(null); }}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modal-top"><span className="mono">PROJECT / {activeProject.mark}</span><button type="button" aria-label="Close project details" onClick={() => setActiveProject(null)}><X size={19} /></button></div>
            <ProjectVisual type={activeProject.visual} mark={activeProject.mark} />
            <div className="modal-content">
              <div className="project-category-row"><span className="project-category">{activeProject.category}</span>{activeProject.concept && <span className="concept-tag">CONCEPT</span>}</div>
              <h2 id="modal-title">{activeProject.name}</h2>
              <p className="modal-description">{activeProject.details}</p>
              <span className="mono modal-label">TECHNOLOGIES / CONCEPTS</span>
              <div className="modal-stack">{activeProject.stack.map((item) => <span className="skill-chip" key={item}>{item}</span>)}</div>
              <div className="modal-links">
                {activeProject.repoUrl
                  ? <a href={activeProject.repoUrl} target="_blank" rel="noreferrer" className="button-quiet"><Github size={14} />View on GitHub <ExternalLink size={14} /></a>
                  : <button className="github-link-pending" type="button" disabled><Github size={14} />GitHub link pending</button>}
                {activeProject.demoUrl && <a href={activeProject.demoUrl} target="_blank" rel="noreferrer" className="button-primary">Open project <ArrowUpRight size={14} /></a>}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
