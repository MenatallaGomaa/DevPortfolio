import { profile, about, experience, projects, skills } from './data/portfolio'
import './App.css'

function App() {
  return (
    <>
      <header className="hero">
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero-inner">
          <h1>{profile.name}</h1>
          <p className="tagline">{profile.tagline}</p>
          {profile.location && <p className="location">{profile.location}</p>}
          <div className="hero-links">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          </div>
        </div>
      </header>

      <section id="about" aria-labelledby="about-heading">
        <h2 id="about-heading">{about.headline}</h2>
        {about.paragraphs.map((p, i) => (
          <p key={i} className="about-p">{p}</p>
        ))}
      </section>

      <section id="experience" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        <ul className="experience-list">
          {experience.map((job, i) => (
            <li key={i} className="experience-item">
              <div className="experience-header">
                <h3>{job.role}</h3>
                <span className="company">{job.company}</span>
                <span className="period">{job.period}</span>
              </div>
              <p className="experience-desc">{job.description}</p>
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

      <section id="projects" aria-labelledby="projects-heading">
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

      <section id="skills" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="contact" aria-labelledby="contact-heading">
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
