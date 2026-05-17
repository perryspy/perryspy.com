import Job from './Job';
import Tag from './Tag';

export function Experience({ jobs }) {
  return (
    <section className="section" id="experience">
      <h2 className="section-head">Experience</h2>
      {jobs.map((job, i) => (
        <Job key={i} job={job} />
      ))}
    </section>
  );
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
            <div className="edu-school">
              {ed.school} · {ed.location}
            </div>
            {ed.honors && <span className="edu-honors">{ed.honors}</span>}
            {ed.notes?.map((n, j) => (
              <p className="edu-note" key={j}>
                {n}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
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
              {g.items.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Clearance({ text, location, fullName }) {
  const year = new Date().getFullYear();
  return (
    <section className="section" id="clearance">
      <h2 className="section-head">Clearance</h2>
      <span className="clearance-badge">{text}</span>
      <div className="footer">
        &copy; {year} {fullName} &nbsp;&middot;&nbsp; {location}{' '}
        &nbsp;&middot;&nbsp; Open to opportunities
        <div style={{ marginTop: '0.5rem' }}>
          Built by me &nbsp;&middot;&nbsp;{' '}
          <a
            href="https://github.com/perryspy/perryspy.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--muted)', textDecoration: 'underline' }}
          >
            source on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
