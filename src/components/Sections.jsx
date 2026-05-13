import Job from './Job'
import Tag from './Tag'

export function Experience({ jobs }) {
  return (
    <section className="section" id="experience">
      <h2 className="section-head">Experience</h2>
      {jobs.map((job, i) => <Job key={i} job={job} />)}
    </section>
  )
}

export function Education({ entries }) {
  return (
    <section className="section" id="education">
      <h2 className="section-head">Education</h2>
      {entries.map((ed, i) => (
        <div className="edu" key={i}>
          <div className="edu-year">{ed.dates}</div>
          <div>
            <div className="edu-degree">{ed.degree}</div>
            <div className="edu-school">{ed.school} · {ed.location}</div>
            {ed.honors && <span className="edu-honors">{ed.honors}</span>}
            {ed.notes?.map((n, j) => (
              <p className="edu-note" key={j}>{n}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export function Skills({ groups }) {
  return (
    <section className="section" id="skills">
      <h2 className="section-head">Technical Skills</h2>
      <div className="skills-grid">
        {groups.map((g, i) => (
          <div key={i}>
            <div className="skill-group-name">{g.category}</div>
            <div className="skill-list">
              {g.items.map(item => <Tag key={item} label={item} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const IconDL = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

export function Clearance({ text, location, fullName }) {
  const year = new Date().getFullYear()
  return (
    <section className="section" id="clearance">
      <h2 className="section-head">Clearance</h2>
      <span className="clearance-badge">{text}</span>
      <div className="footer">
        &copy; {year} {fullName} &nbsp;&middot;&nbsp; {location} &nbsp;&middot;&nbsp; Open to opportunities
      </div>
    </section>
  )
}
