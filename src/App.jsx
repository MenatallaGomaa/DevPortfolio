import { useEffect, useRef, useState } from 'react'
import { profile, about, projects, skills } from './data/portfolio'
import './App.css'

const experience = [
  { role: 'Frontend Engineer', company: 'Mercanis', period: 'Feb 2026 – Present', description: ['Building core product features with SvelteKit, TypeScript, and Tailwind.', 'Improving and scaling a modular frontend architecture.', 'Collaborating through code reviews, pairing, and technical discussions.', 'Driving improvements in performance, accessibility, and developer experience.'], tags: ['SvelteKit', 'TypeScript', 'Tailwind', 'Jira'] },
  { role: 'Frontend Developer', company: 'BudnBed', period: 'Nov 2025 – Jan 2026', description: ['Translating the vision of a student-owned economy into clear, intuitive user interfaces.', 'Building trust-first UX for student-to-student stays and hangouts.', 'Developing and iterating on core product features from early concepts to production.', 'Collaborating closely with product and design in a fast-moving startup environment.', 'Focusing on usability, performance, and simplicity across the frontend.', 'Laying scalable foundations for growth while keeping the product human and accessible.'], tags: ['Front-End Development', 'APIs', 'UX', 'Startup'] },
  { role: 'Junior Frontend Developer', company: 'LEAP Digital Marketing GmbH', period: 'Apr 2025 – Nov 2025', description: ['Developed frontend features using JavaScript, HTML, and CSS for large-scale e-commerce websites.', 'Built and executed A/B & multivariate tests using the Kameleoon experimentation platform.', 'Analyzed test results to identify UX improvements and measurable business impact.', 'Implemented tracking & personalization logic, improving user journeys and engagement.', 'Collaborated closely with UX designers, analysts, and CRO managers in an agile team.', 'Optimized performance and accessibility, ensuring fast and user-friendly experiences.', 'Debugged client-side issues and delivered stable, clean and maintainable code.'], tags: ['JavaScript', 'HTML & CSS', 'A/B Testing', 'Kameleoon', 'Agile'] },
  { role: 'Full-Stack Development Instructor', company: 'ReDI School of Digital Integration', period: 'Sep 2024 – Dec 2024', description: ['Taught Full-Stack Web Development (HTML, CSS, JavaScript, React) to women with forced migration backgrounds.', 'Empowered students by fostering technical skills and confidence.', 'Leveraged my journey from Sales to Full-Stack Development to mentor and inspire.', 'Contributed to bridging the digital skills gap and supporting refugee women\'s integration into tech.'], tags: ['Teaching', 'React', 'JavaScript', 'Mentoring'] },
  { role: 'Software Developer', company: 'COLNEO GmbH', period: 'Aug 2024 – Oct 2024', description: ['Translated Figma designs into responsive, pixel-perfect interfaces.', 'Integrated REST APIs and ensured stable, efficient data flow.', 'Applied modern JavaScript best practices for cleaner, more maintainable code.'], tags: ['JavaScript', 'Figma', 'REST APIs'] },
  { role: 'Full Stack Developer', company: 'Freelance', period: 'Jan 2024 – Jul 2024', description: 'Freelance full-stack development projects across the stack.', tags: ['Full-Stack', 'JavaScript', 'React'] },
  { role: 'Sales Support Associate', company: 'SoftwareOne', period: 'Apr 2023 – Sep 2023', description: 'Sales coordination, order processing, quote generation. Used Microsoft Dynamics NAV and ServiceNow. Customer inquiries, data management, administrative support.', tags: ['Sales Coordination', 'CRM', 'ServiceNow', 'B2B'] },
  { role: 'Sales Representative', company: 'Pathus Beteiligungsgesellschaft GmbH', period: 'Aug 2019 – Mar 2023', description: 'Customer engagement, sales targets, visual merchandising, inventory management, team collaboration.', tags: ['Customer Service', 'Sales', 'Team Collaboration'] },
]

function useInView(options = {}) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  const { rootMargin = '0px 0px -80px 0px', threshold = 0.1 } = options
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin, threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])
  return [ref, inView]
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  const [aboutRef, aboutInView] = useInView()
  const [expRef, expInView] = useInView()
  const [projectsRef, projectsInView] = useInView()
  const [skillsRef, skillsInView] = useInView()
  const [contactRef, contactInView] = useInView()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const nameSlug = profile.name.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="site-wrap">
      {/* Header */}
      <header className="site-header">
        <a href="#" className="site-name">{profile.name.toUpperCase()}.</a>
        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-right">
          <span className="code-icon" aria-hidden="true">&lt;/&gt;</span>
          <button type="button" className="theme-toggle" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb" />
            </span>
          </button>
          <span className="fps-label">FPS: 60</span>
        </div>
      </header>

      {/* Terminal hero */}
      <section className="hero-terminal">
        <div className="hero-terminal-inner">
          <div className="terminal-block">
            <p className="terminal-command">
              <span className="terminal-prompt">&gt;</span> npx create-{nameSlug}-portfolio
            </p>
            <p className="terminal-output">{profile.tagline}</p>
            <p className="terminal-status">
              <span className="status-dot" />
              Available for work
            </p>
          </div>
          <div className="hero-ctas">
            <button type="button" className="btn btn-primary" onClick={() => scrollTo('skills')}>View My Stack</button>
            <a href={profile.cvUrl || `#contact`} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Download CV</a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" ref={projectsRef} className={`section section-reveal ${projectsInView ? 'in-view' : ''}`}>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <article key={i} className="project-card">
              <div className="project-card-image">
                <div className="project-card-placeholder" />
              </div>
              <div className="project-card-body">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="project-card-tags">
                  {proj.tags?.map((tag, j) => <span key={j}>{tag}</span>)}
                </div>
                <div className="project-card-links">
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">Code</a>
                  {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About (compact) */}
      <section id="about" ref={aboutRef} className={`section section-reveal ${aboutInView ? 'in-view' : ''}`}>
        <h2 className="section-title">About</h2>
        <div className="about-block">
          <p className="about-lead">Hi, I'm {profile.name.split(' ')[0]}</p>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about-p">{p}</p>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" ref={expRef} className={`section section-reveal ${expInView ? 'in-view' : ''}`}>
        <h2 className="section-title">Experience</h2>
        <ul className="experience-list">
          {experience.map((job, i) => (
            <li key={i} className="experience-item">
              <div className="experience-header">
                <h3>{job.role}</h3>
                <span className="company">{job.company}</span>
                <span className="period">{job.period}</span>
              </div>
              {Array.isArray(job.description) ? (
                <ul className="experience-bullets">
                  {job.description.map((line, k) => <li key={k}>{line}</li>)}
                </ul>
              ) : (
                <p className="experience-desc">{job.description}</p>
              )}
              {job.tags?.length > 0 && (
                <div className="tags">
                  {job.tags.map((tag, j) => <span key={j}>{tag}</span>)}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" ref={skillsRef} className={`section section-reveal ${skillsInView ? 'in-view' : ''}`}>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-pill">{skill}</div>
          ))}
        </div>
      </section>

      {/* Theme Switcher + Connect */}
      <section className="section section-meta">
        <div className="meta-grid">
          <div className="theme-section">
            <h2 className="section-title">Theme</h2>
            <div className="theme-buttons">
              <button type="button" className={`theme-btn ${theme === 'dark' ? 'active' : ''}`} onClick={() => setTheme('dark')}>Dark</button>
              <button type="button" className={`theme-btn ${theme === 'light' ? 'active' : ''}`} onClick={() => setTheme('light')}>Light</button>
            </div>
            <div className="matrix-mini" aria-hidden="true">
              <span>01001000 01101001</span>
              <span>00100000 01001001</span>
              <span>00100111 01101101</span>
            </div>
          </div>
          <div id="contact" ref={contactRef} className="connect-section">
            <h2 className="section-title">Connect</h2>
            <div className="connect-links">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="connect-link" aria-label="LinkedIn">in</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="connect-link" aria-label="GitHub">gh</a>
            </div>
            <p className="contact-email">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="footer-bar">
        <p>Hi! You're curious I like that.</p>
        <span className="footer-icon" aria-hidden="true">◇</span>
      </footer>
    </div>
  )
}

export default App
