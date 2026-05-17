import Tag from './Tag'
import ThemeToggle from './ThemeToggle';

const IconMail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
  </svg>
)
const IconPhone = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)
const IconPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconLI = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const IconDL = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

export default function Sidebar({ data, theme, onToggle }) {
  const { name, title, email, phone, location, linkedin, bio, resumePDF, hook } = data
  const b = name.lastNameBreak

  return (
    <aside className="sidebar">

      <div style={{ position: 'absolute', top: 5, right: 5 }}>
        <ThemeToggle theme={theme} onToggle={onToggle} />
      </div>

      <h1 className="sidebar-name">
        {name.first}<br />
        <em>{name.last.slice(0, b)}</em>{name.last.slice(b)}
      </h1>
      <p className="sidebar-title">{title}</p>

      {hook && <p className="sidebar-hook">{hook}</p>}

      <div className="divider" />

      <p className="bio" dangerouslySetInnerHTML={{ __html: bio }} />

      <div className="divider" />

      <div className="contacts">
        <a href={`mailto:${email}`} className="contact-item">
          <IconMail /> {email}
        </a>
        <span className="contact-item">
          <IconPhone /> {phone}
        </span>
        <span className="contact-item">
          <IconPin /> {location}
        </span>
        {linkedin && linkedin !== 'YOUR-LINKEDIN-HANDLE' && (
          <a href={`https://linkedin.com/in/${linkedin}`} className="contact-item" target="_blank" rel="noopener noreferrer">
            <IconLI /> linkedin.com/in/{linkedin}
          </a>
        )}
      </div>

      <div className="sidebar-availability">
        <span className="availability-dot" />
        Available for new roles
      </div>

      <a href={resumePDF} download className="dl-btn sidebar-dl">
        <IconDL /> Download Resume
      </a>

      <nav className="sidebar-nav" aria-label="Page sections">
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#clearance">Clearance</a>
      </nav>
    </aside>
  )
}
