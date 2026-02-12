import { useEffect, useRef, useState } from 'react'
import { profile, about, projects, skills } from './data/portfolio'
import './App.css'

const experience = [
  { role: 'Frontend Engineer', company: 'Mercanis', period: 'Feb 2026 – Present', description: ['Building core product features with SvelteKit, TypeScript, and Tailwind.', 'Improving and scaling a modular frontend architecture.', 'Collaborating through code reviews, pairing, and technical discussions.', 'Driving improvements in performance, accessibility, and developer experience.'], tags: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Vite', 'Jest', 'Playwright', 'Figma', 'Jira', 'GitLab', 'CI/CD', 'Sprint Planning'] },
  { role: 'Frontend Developer', company: 'BudnBed', period: 'Nov 2025 – Jan 2026', description: ['Translating the vision of a student-owned economy into clear, intuitive user interfaces.', 'Building trust-first UX for student-to-student stays and hangouts.', 'Developing and iterating on core product features from early concepts to production.', 'Collaborating closely with product and design in a fast-moving startup environment.', 'Focusing on usability, performance, and simplicity across the frontend.', 'Laying scalable foundations for growth while keeping the product human and accessible.'], tags: ['React', 'JavaScript', 'APIs', 'UX Design', 'Startup', 'Product Development', 'Design Collaboration', 'Scalable Frontend'] },
  { role: 'Junior Frontend Developer', company: 'LEAP Digital Marketing GmbH', period: 'Apr 2025 – Nov 2025', description: ['Developed frontend features using JavaScript, HTML, and CSS for large-scale e-commerce websites.', 'Built and executed A/B & multivariate tests using the Kameleoon experimentation platform.', 'Analyzed test results to identify UX improvements and measurable business impact.', 'Implemented tracking & personalization logic, improving user journeys and engagement.', 'Collaborated closely with UX designers, analysts, and CRO managers in an agile team.', 'Optimized performance and accessibility, ensuring fast and user-friendly experiences.', 'Debugged client-side issues and delivered stable, clean and maintainable code.'], tags: ['JavaScript', 'HTML', 'CSS', 'Kameleoon', 'E-Commerce', 'A/B Testing', 'Jira', 'Confluence'] },
  { role: 'Full-Stack Development Instructor', company: 'ReDI School of Digital Integration', period: 'Sep 2024 – Dec 2024', description: ['Taught Full-Stack Web Development (HTML, CSS, JavaScript, React) to women with forced migration backgrounds.', 'Empowered students by fostering technical skills and confidence.', 'Leveraged my journey from Sales to Full-Stack Development to mentor and inspire.', 'Contributed to bridging the digital skills gap and supporting refugee women\'s integration into tech.'], tags: ['Teaching', 'React', 'JavaScript', 'HTML', 'CSS', 'Mentoring', 'Full-Stack', 'Curriculum Design'] },
  { role: 'Software Developer', company: 'COLNEO GmbH', period: 'Aug 2024 – Oct 2024', description: ['Translated Figma designs into responsive, pixel-perfect interfaces.', 'Integrated REST APIs and ensured stable, efficient data flow.', 'Applied modern JavaScript best practices for cleaner, more maintainable code.'], tags: ['JavaScript', 'Figma', 'Vue'] },
  { role: 'Full Stack Developer', company: 'Freelance', period: 'Jan 2024 – Jul 2024', description: 'Freelance full-stack development projects across the stack.', tags: ['Full-Stack', 'JavaScript', 'React', 'Node.js', 'APIs', 'Git', 'Responsive Web'] },
  { role: 'Sales Support Associate', company: 'SoftwareOne', period: 'Apr 2023 – Sep 2023', description: ['Sales coordination: order processing, quote generation, and documentation with the sales team.', 'Used Microsoft Dynamics NAV (ERP) and ServiceNow for workflows and ticket management.', 'Primary point of contact for customers; maintained customer and sales data for decision-making.', 'Administrative support: calendar management, meeting coordination, sales reports.', 'Collaborated with marketing and logistics to meet customer needs.'], tags: ['Sales Coordination', 'ServiceNow', 'Microsoft Azure', 'CRM', 'B2B', 'Pre-Sales Support', 'Cloud Computing', 'SLA'] },
  { role: 'Sales Representative', company: 'Pathus Beteiligungsgesellschaft GmbH', period: 'Aug 2019 – Mar 2023', description: ['Customer engagement: product information, queries, and positive in-store experience.', 'Met and exceeded sales targets through effective sales techniques and upselling.', 'Visual merchandising and product displays aligned with promotions.', 'Inventory management: stock checks, restocking, and accurate levels.', 'Handled customer concerns promptly; collaborated with team and management on store operations.'], tags: ['Customer Service', 'Sales & Negotiation', 'Team Management', 'Problem Solving', 'Inventory Control', 'Visual Merchandising'] },
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
        <a href="#" className="site-name">{profile.name.toUpperCase()}</a>
        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-right">
          <span className="code-icon" aria-hidden="true">&lt;/&gt;</span>
          <div className="header-theme">
            <button type="button" className={`theme-btn theme-btn--header theme-btn--icon ${theme === 'dark' ? 'active' : ''}`} onClick={() => setTheme('dark')} aria-label="Dark mode">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            </button>
            <button type="button" className={`theme-btn theme-btn--header theme-btn--icon ${theme === 'light' ? 'active' : ''}`} onClick={() => setTheme('light')} aria-label="Light mode">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            </button>
          </div>
          <button type="button" className="theme-toggle" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb" />
            </span>
          </button>
        </div>
      </header>

      {/* Terminal hero */}
      <section className="hero-terminal">
        <div className="hero-terminal-inner">
          {profile.image && (
            <div className="hero-photo-wrap">
              <img src={profile.image} alt="" className="hero-photo" />
            </div>
          )}
          <div className="hero-terminal-content">
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
        <div className="skills-rows">
          {[0, 1].map((rowIndex) => {
            const perRow = Math.ceil(skills.length / 2);
            const rowSkills = skills.slice(rowIndex * perRow, (rowIndex + 1) * perRow);
            const direction = rowIndex % 2 === 0 ? 'left' : 'right';
            return (
              <div key={rowIndex} className="skills-row" aria-hidden="true">
                <div className={`skills-row-track skills-row-track--${direction}`}>
                  {[...rowSkills, ...rowSkills].map((skill, i) => (
                    <span key={i} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Connect */}
      <section className="section section-meta">
        <div className="meta-grid">
          <div id="contact" ref={contactRef} className="connect-section">
            <h2 className="section-title">Connect</h2>
            <div className="connect-links">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="connect-link" aria-label="LinkedIn">in</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="connect-link" aria-label="GitHub">gh</a>
            </div>
            {profile.phone && (
              <p className="contact-line">
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </p>
            )}
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
