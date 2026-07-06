export default function Projects({ data }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Project</p>
          <h2>A full-stack build that connects interface, logic, and workflow.</h2>
        </div>

        <div className="project-card panel">
          <div className="project-visual" aria-hidden="true">
            <div className="window-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="route-flow">
              <div className="route-pill">Search</div>
              <div className="route-line" />
              <div className="route-pill">Book</div>
              <div className="route-line" />
              <div className="route-pill">Track</div>
            </div>
          </div>

          <div className="project-copy">
            <p className="card-kicker">Featured Build</p>
            <h3>{data.projects[0].title}</h3>
            <p>{data.projects[0].description}</p>
            <p className="project-impact">{data.projects[0].impact}</p>

            <div className="chip-wrap">
              {data.projects[0].tech.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <a className="button button-primary" href={data.projects[0].github} target="_blank" rel="noreferrer">
                View Repository
              </a>
              <a className="button button-secondary" href={data.github} target="_blank" rel="noreferrer">
                More on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
