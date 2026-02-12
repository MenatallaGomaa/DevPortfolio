import { useEffect, useRef, useState } from 'react'
import { profile, about, education, projects, skills, certifications } from './data/portfolio'
import './App.css'

const experience = [
  { role: 'Frontend Engineer', company: 'Mercanis', period: 'Feb 2026 – Present', logo: '/companies/mercanis.png', description: ['Building core product features with SvelteKit, TypeScript, and Tailwind.', 'Improving and scaling a modular frontend architecture.', 'Collaborating through code reviews, pairing, and technical discussions.', 'Driving improvements in performance, accessibility, and developer experience.'], tags: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Vite', 'Jest', 'Playwright', 'Figma', 'Jira', 'GitLab', 'CI/CD', 'Sprint Planning'] },
  { role: 'Frontend Developer', company: 'BudnBed', period: 'Nov 2025 – Jan 2026', logo: '/companies/budnbed.png', description: ['Translating the vision of a student-owned economy into clear, intuitive user interfaces.', 'Building trust-first UX for student-to-student stays and hangouts.', 'Developing and iterating on core product features from early concepts to production.', 'Collaborating closely with product and design in a fast-moving startup environment.', 'Focusing on usability, performance, and simplicity across the frontend.', 'Laying scalable foundations for growth while keeping the product human and accessible.'], tags: ['React', 'JavaScript', 'APIs', 'UX Design', 'Startup', 'Product Development', 'Design Collaboration', 'Scalable Frontend'] },
  { role: 'Junior Frontend Developer', company: 'LEAP Digital Marketing GmbH', period: 'Apr 2025 – Jul 2025', logo: '/companies/leap.png', description: ['Developed frontend features using JavaScript, HTML, and CSS for large-scale e-commerce websites.', 'Built and executed A/B & multivariate tests using the Kameleoon experimentation platform.', 'Analyzed test results to identify UX improvements and measurable business impact.', 'Implemented tracking & personalization logic, improving user journeys and engagement.', 'Collaborated closely with UX designers, analysts, and CRO managers in an agile team.', 'Optimized performance and accessibility, ensuring fast and user-friendly experiences.', 'Debugged client-side issues and delivered stable, clean and maintainable code.'], tags: ['JavaScript', 'HTML', 'CSS', 'Kameleoon', 'E-Commerce', 'A/B Testing', 'Jira', 'Confluence'] },
  { role: 'Full-Stack Development Instructor', company: 'ReDI School of Digital Integration', period: 'Sep 2024 – Dec 2024', logo: '/companies/redi.png', description: ['Taught Full-Stack Web Development (HTML, CSS, JavaScript, React) to women with forced migration backgrounds.', 'Empowered students by fostering technical skills and confidence.', 'Leveraged my journey from Sales to Full-Stack Development to mentor and inspire.', 'Contributed to bridging the digital skills gap and supporting refugee women\'s integration into tech.'], tags: ['Teaching', 'React', 'JavaScript', 'HTML', 'CSS', 'Mentoring', 'Full-Stack', 'Curriculum Design'] },
  { role: 'Software Developer', company: 'COLNEO GmbH', period: 'Aug 2024 – Oct 2024', logo: '/companies/colneo.png', description: ['Translated Figma designs into responsive, pixel-perfect interfaces.', 'Integrated REST APIs and ensured stable, efficient data flow.', 'Applied modern JavaScript best practices for cleaner, more maintainable code.'], tags: ['JavaScript', 'Figma', 'Vue'] },
  { role: 'Full Stack Developer', company: 'Freelance', period: 'Jan 2024 – Jul 2024', logo: '/companies/freelance.png', description: 'Freelance full-stack development projects across the stack.', tags: ['Full-Stack', 'JavaScript', 'React', 'Node.js', 'APIs', 'Git', 'Responsive Web'] },
  { role: 'Sales Support Associate', company: 'SoftwareOne', period: 'Apr 2023 – Sep 2023', logo: '/companies/softwareone.png', description: ['Sales coordination: order processing, quote generation, and documentation with the sales team.', 'Used Microsoft Dynamics NAV (ERP) and ServiceNow for workflows and ticket management.', 'Primary point of contact for customers; maintained customer and sales data for decision-making.', 'Administrative support: calendar management, meeting coordination, sales reports.', 'Collaborated with marketing and logistics to meet customer needs.'], tags: ['Sales Coordination', 'ServiceNow', 'Microsoft Azure', 'CRM', 'B2B', 'Pre-Sales Support', 'Cloud Computing', 'SLA'] },
  { role: 'Sales Representative', company: 'Pathus Beteiligungsgesellschaft GmbH', period: 'Aug 2019 – Mar 2023', logo: '/companies/pathus.png', description: ['Customer engagement: product information, queries, and positive in-store experience.', 'Met and exceeded sales targets through effective sales techniques and upselling.', 'Visual merchandising and product displays aligned with promotions.', 'Inventory management: stock checks, restocking, and accurate levels.', 'Handled customer concerns promptly; collaborated with team and management on store operations.'], tags: ['Customer Service', 'Sales & Negotiation', 'Team Management', 'Problem Solving', 'Inventory Control', 'Visual Merchandising'] },
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
  const [navOpen, setNavOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const projectCardRefs = useRef([])
  const [aboutRef, aboutInView] = useInView()
  const [expRef, expInView] = useInView()
  const [educationRef, educationInView] = useInView()
  const [certificationsRef, certificationsInView] = useInView()
  const [projectsRef, projectsInView] = useInView()
  const [skillsRef, skillsInView] = useInView()
  const [contactRef, contactInView] = useInView()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setNavOpen(false)
  }

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      scrollTo(href.slice(1))
    }
  }

  const handleProjectKeyDown = (e, index) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const next = projectCardRefs.current[index + 1]
      if (next) next.focus()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prev = projectCardRefs.current[index - 1]
      if (prev) prev.focus()
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      const proj = projects[index]
      const url = proj.liveUrl || proj.link
      if (url) window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const nameSlug = profile.name.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="site-wrap">
      {/* Header */}
      <header className="site-header">
        <div className="header-left">
          <a href="#" className="site-name" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>{profile.name.toUpperCase()}</a>
          <button type="button" className="nav-toggle" onClick={() => setNavOpen(!navOpen)} aria-expanded={navOpen} aria-label="Toggle menu">
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
        <nav className={`site-nav ${navOpen ? 'open' : ''}`}>
          <a href="#about" onClick={handleNavClick}>About me</a>
          <a href="#experience" onClick={handleNavClick}>Experience</a>
          <a href="#education" onClick={handleNavClick}>Education</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#certifications" onClick={handleNavClick}>Certifications</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
        <div className="header-right">
          <span className="code-icon" aria-hidden="true">&lt;/&gt;</span>
          <button type="button" className="theme-toggle" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} aria-label="Toggle dark or light mode" title="Switch between dark and light mode">
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

      {/* About */}
      <section id="about" ref={aboutRef} className={`section section-reveal ${aboutInView ? 'in-view' : ''}`}>
        <h2 className="section-title">About me</h2>
        <div className="about-block">
          {about.lead && <p className="about-lead">{about.lead}</p>}
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about-p">{p}</p>
          ))}
          {about.skillsFocus && about.skillsFocus.length > 0 && (
            <div className="about-focus">
              <h3 className="about-focus-title">{about.skillsFocusTitle}</h3>
              <ul className="about-focus-list">
                {about.skillsFocus.map((item, i) => (
                  <li key={i} className="about-focus-item">
                    <span className="about-focus-icon" aria-hidden="true">{item.icon}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" ref={projectsRef} className={`section section-reveal ${projectsInView ? 'in-view' : ''}`}>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <article
              key={i}
              ref={(el) => { projectCardRefs.current[i] = el }}
              className="project-card"
              tabIndex={0}
              role="button"
              aria-label={`${proj.title}. Press Enter to open demo.`}
              onKeyDown={(e) => handleProjectKeyDown(e, i)}
            >
              <div className="project-card-image">
                <div className="project-card-placeholder" />
                {proj.image && (
                  <img
                    src={proj.image}
                    alt=""
                    className="project-card-img"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                )}
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

      {/* Experience */}
      <section id="experience" ref={expRef} className={`section section-reveal ${expInView ? 'in-view' : ''}`}>
        <h2 className="section-title">Experience</h2>
        <ul className="experience-list">
          {experience.map((job, i) => (
            <li key={i} className="experience-item">
              <div className="experience-header">
                {job.logo && (
                  <img src={job.logo} alt="" className="experience-logo" onError={(e) => { e.target.style.display = 'none'; }} />
                )}
                <div className="experience-header-text">
                  <h3>{job.role}</h3>
                  <span className="company">{job.company}</span>
                  <span className="period">{job.period}</span>
                </div>
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

      {/* Education */}
      <section id="education" ref={educationRef} className={`section section-reveal ${educationInView ? 'in-view' : ''}`}>
        <h2 className="section-title">Education</h2>
        <ul className="education-list">
          {education.map((entry, i) => (
            <li key={i} className="education-item">
              <div className="education-header">
                {entry.logo && (
                  <img src={entry.logo} alt="" className="education-logo" onError={(e) => { e.target.style.display = 'none'; }} />
                )}
                <div className="education-header-text">
                  <h3>{entry.program}</h3>
                  <span className="education-institution">{entry.institution}</span>
                  <span className="education-period">{entry.period}</span>
                </div>
              </div>
              {Array.isArray(entry.description) ? (
                entry.description.map((p, k) => <p key={k} className="education-desc">{p}</p>)
              ) : (
                <p className="education-desc">{entry.description}</p>
              )}
              {entry.tags?.length > 0 && (
                <div className="tags">
                  {entry.tags.map((tag, j) => <span key={j}>{tag}</span>)}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications */}
      <section id="certifications" ref={certificationsRef} className={`section section-reveal ${certificationsInView ? 'in-view' : ''}`}>
        <h2 className="section-title">Certifications</h2>
        <ul className="certifications-list">
          {certifications.map((cert, i) => (
            <li key={i} className="certification-item">
              <a href={`/certifications/${cert.file}`} target="_blank" rel="noopener noreferrer" className="certification-link">
                <span className="certification-title">{cert.title}</span>
                <span className="certification-download" aria-hidden="true">↗</span>
              </a>
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
          {showScrollTop && (
            <button
              type="button"
              className="scroll-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          )}
        </div>
      </section>

      {/* Footer bar */}
      <footer className="footer-bar">
        <span className="footer-icon" aria-hidden="true">◇</span>
        <p>Designed and built with care. Get in touch above.</p>
        <span className="footer-icon" aria-hidden="true">◇</span>
      </footer>
    </div>
  )
}

export default App
