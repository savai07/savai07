export default function Hero({ data }) {
  return (
    <section className="hero section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio 2026</p>
          <h1>
            Building modern apps with a <span>cloud and DevOps mindset.</span>
          </h1>
          <p className="hero-text">{data.about}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore Project
            </a>
            <a className="button button-secondary" href={data.github} target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="meta-label">Based in</span>
              <strong>{data.location}</strong>
            </div>
            <div>
              <span className="meta-label">Focus</span>
              <strong>{data.title}</strong>
            </div>
            <div>
              <span className="meta-label">Contact</span>
              <strong>{data.email}</strong>
            </div>
          </div>
        </div>

        <aside className="hero-card">
          <p className="card-kicker">Current Direction</p>
          <h2>{data.education.degree}</h2>
          <p>{data.education.focus}</p>
          <p className="hero-card-summary">{data.education.summary}</p>

          <div className="signal-list">
            {data.strengths.map((item) => (
              <div key={item} className="signal-item">
                <span className="signal-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
