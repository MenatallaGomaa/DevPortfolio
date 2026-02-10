import { useEffect, useRef, useState } from 'react'
import { profile, about, projects, skills } from './data/portfolio'
import './App.css'

// Experience data inlined so the Experience section always shows current content (avoids cache issues)
const experience = [
  {
    role: 'Frontend Engineer',
    company: 'Mercanis',
    period: 'Feb 2026 – Present',
    description: [
      'Building core product features with SvelteKit, TypeScript, and Tailwind.',
      'Improving and scaling a modular frontend architecture.',
      'Collaborating through code reviews, pairing, and technical discussions.',
      'Driving improvements in performance, accessibility, and developer experience.',
    ],
    tags: ['SvelteKit', 'TypeScript', 'Tailwind', 'Jira'],
  },
  {
    role: 'Frontend Developer',
    company: 'BudnBed',
    period: 'Nov 2025 – Jan 2026',
    description: [
      'Translating the vision of a student-owned economy into clear, intuitive user interfaces.',
      'Building trust-first UX for student-to-student stays and hangouts.',
      'Developing and iterating on core product features from early concepts to production.',
      'Collaborating closely with product and design in a fast-moving startup environment.',
      'Focusing on usability, performance, and simplicity across the frontend.',
      'Laying scalable foundations for growth while keeping the product human and accessible.',
    ],
    tags: ['Front-End Development', 'APIs', 'UX', 'Startup'],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'LEAP Digital Marketing GmbH',
    period: 'Apr 2025 – Nov 2025',
    description: [
      'Developed frontend features using JavaScript, HTML, and CSS for large-scale e-commerce websites.',
      'Built and executed A/B & multivariate tests using the Kameleoon experimentation platform.',
      'Analyzed test results to identify UX improvements and measurable business impact.',
      'Implemented tracking & personalization logic, improving user journeys and engagement.',
      'Collaborated closely with UX designers, analysts, and CRO managers in an agile team.',
      'Optimized performance and accessibility, ensuring fast and user-friendly experiences.',
      'Debugged client-side issues and delivered stable, clean and maintainable code.',
    ],
    tags: ['JavaScript', 'HTML & CSS', 'A/B Testing', 'Kameleoon', 'Agile'],
  },
  {
    role: 'Full-Stack Development Instructor',
    company: 'ReDI School of Digital Integration',
    period: 'Sep 2024 – Dec 2024',
    description: [
      'Taught Full-Stack Web Development with a focus on frontend technologies (HTML, CSS, JavaScript, React) to women with forced migration backgrounds.',
      'Empowered students by fostering technical skills and confidence to help them transition into the tech industry.',
      'Leveraged my personal journey from Sales to Full-Stack Development to mentor and inspire students navigating their own career changes.',
      'Collaborated with a diverse community of volunteers to create a supportive and inclusive learning environment.',
      "Contributed to bridging the digital skills gap and supporting refugee women's integration into the tech workforce.",
    ],
    tags: ['Teaching', 'React', 'JavaScript', 'Mentoring'],
  },
  {
    role: 'Software Developer',
    company: 'COLNEO GmbH',
    period: 'Aug 2024 – Oct 2024',
    description: [
      'Translated Figma designs into responsive, pixel-perfect interfaces.',
      'Integrated REST APIs and ensured stable, efficient data flow.',
      'Applied modern JavaScript best practices for cleaner, more maintainable code.',
    ],
    tags: ['JavaScript', 'Figma', 'REST APIs'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: 'Jan 2024 – Jul 2024',
    description: 'Freelance full-stack development projects across the stack.',
    tags: ['Full-Stack', 'JavaScript', 'React'],
  },
  {
    role: 'Sales Support Associate',
    company: 'SoftwareOne',
    period: 'Apr 2023 – Sep 2023',
    description: 'Sales coordination with the sales team: order processing, quote generation, and documentation management. Used Microsoft Dynamics NAV (ERP) and ServiceNow for workflows and ticket management. Primary point of contact for customer inquiries, data management, and administrative support including calendar management, meeting coordination, and sales reports. Collaborated with marketing and logistics to meet customer needs.',
    tags: ['Sales Coordination', 'CRM', 'ServiceNow', 'Microsoft Dynamics', 'B2B'],
  },
  {
    role: 'Sales Representative',
    company: 'Pathus Beteiligungsgesellschaft GmbH',
    period: 'Aug 2019 – Mar 2023',
    description: 'Customer engagement, product information, and positive in-store experience. Met and exceeded sales targets through effective sales techniques and upselling. Contributed to visual merchandising, inventory management, and stock checks. Handled customer concerns and collaborated with team and management to achieve store goals.',
    tags: ['Customer Service', 'Sales', 'Team Collaboration', 'Problem Solving'],
  },
]

function useInView(options = {}) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  const { rootMargin = '0px 0px -80px 0px', threshold = 0.1 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin, threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return [ref, inView]
}

function App() {
  const [aboutRef, aboutInView] = useInView()
  const [expRef, expInView] = useInView()
  const [projectsRef, projectsInView] = useInView()
  const [skillsRef, skillsInView] = useInView()
  const [contactRef, contactInView] = useInView()

  return (
    <>
      <header className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <nav className="nav animate-in nav-in">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero-inner">
          <h1 className="animate-in hero-name">{profile.name}</h1>
          <p className="tagline animate-in hero-tagline">{profile.tagline}</p>
          {profile.location && <p className="location animate-in hero-location">{profile.location}</p>}
          <div className="hero-links animate-in hero-links-in">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          </div>
        </div>
      </header>

      <section id="about" ref={aboutRef} aria-labelledby="about-heading" className={`about-section section-reveal ${aboutInView ? 'in-view' : ''}`}>
        <div className="about-card">
          <div className="about-visual">
            {profile.image ? (
              <img src={profile.image} alt="" className="about-photo" />
            ) : (
              <div className="about-photo-placeholder" aria-hidden="true">
                <span className="about-initial">{profile.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
            )}
            <div className="about-accent-blob" aria-hidden="true" />
          </div>
          <div className="about-content">
            <p className="about-label">{about.headline}</p>
            <h2 id="about-heading" className="about-title">Hi, I'm {profile.name.split(' ')[0]}</h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="about-p">{p}</p>
            ))}
            <ul className="about-highlights" aria-label="What I focus on">
              <li>Clean code</li>
              <li>Thoughtful UX</li>
              <li>Shipping things that work</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" ref={expRef} aria-labelledby="experience-heading" className={`section-reveal ${expInView ? 'in-view' : ''}`}>
        <h2 id="experience-heading">Experience</h2>
        <ul className="experience-list">
          {experience.map((job, i) => (
            <li key={i} className="experience-item">
              <div className="experience-header">
                <h3>{job.role}</h3>
                <span className="company">{job.company}</span>
                <span className="period">{job.period}</span>
              </div>
              {Array.isArray(job.description) ? (
                <ul className="experience-desc experience-bullets">
                  {job.description.map((line, k) => (
                    <li key={k}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="experience-desc">{job.description}</p>
              )}
              {job.tags?.length > 0 && (
                <ul className="tags">
                  {job.tags.map((tag, j) => (
                    <li key={j}>{tag}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" ref={projectsRef} aria-labelledby="projects-heading" className={`section-reveal ${projectsInView ? 'in-view' : ''}`}>
        <h2 id="projects-heading">Projects</h2>
        <ul className="project-list">
          {projects.map((proj, i) => (
            <li key={i} className="project-card">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-links">
                <a href={proj.link} target="_blank" rel="noopener noreferrer">Code</a>
                {proj.liveUrl && (
                  <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
                )}
              </div>
              {proj.tags?.length > 0 && (
                <ul className="tags">
                  {proj.tags.map((tag, j) => (
                    <li key={j}>{tag}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section id="skills" ref={skillsRef} aria-labelledby="skills-heading" className={`section-reveal ${skillsInView ? 'in-view' : ''}`}>
        <h2 id="skills-heading">Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      <section id="contact" ref={contactRef} className={`contact section-reveal ${contactInView ? 'in-view' : ''}`} aria-labelledby="contact-heading">
        <h2 id="contact-heading">Get in touch</h2>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {profile.github && (
            <> · <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></>
          )}
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  )
}

export default App
