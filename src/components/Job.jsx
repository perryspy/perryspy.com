import Tag from './Tag';

function Role({ role }) {
  return (
    <>
      <div className="job-subtitle">{role.label}</div>
      <ul className="job-bullets">
        {role.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {role.stack?.length > 0 && (
        <div className="job-stack">
          {role.stack.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      )}
    </>
  );
}

export default function Job({ job }) {
  return (
    <article className="job">
      <div className="job-meta">
        <div className="job-date">{job.dates}</div>
        <div>
          <h3 className="job-title">{job.title}</h3>
          <div className="job-company">
            {job.company} · {job.location}
          </div>
        </div>
      </div>

      <div className="job-body">
        {job.roles ? (
          job.roles.map((r, i) => <Role key={i} role={r} />)
        ) : (
          <>
            {job.bullets?.length > 0 && (
              <ul className="job-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
            {job.stack?.length > 0 && (
              <div className="job-stack">
                {job.stack.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </article>
  );
}
