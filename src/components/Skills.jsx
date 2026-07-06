export default function Skills({ data }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Tools that support both application development and deployment.</h2>
        </div>

        <div className="skill-groups">
          {data.skillGroups.map((group) => (
            <article key={group.title} className="panel skill-group">
              <h3>{group.title}</h3>
              <div className="chip-wrap">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
