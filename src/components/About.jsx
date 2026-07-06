export default function About({ data }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Focused on reliable systems and practical product building.</h2>
        </div>

        <div className="about-grid">
          <article className="panel">
            <p>{data.about}</p>
          </article>

          <article className="panel detail-panel">
            <div>
              <span className="meta-label">Degree</span>
              <strong>{data.education.degree}</strong>
            </div>
            <div>
              <span className="meta-label">Specialization</span>
              <strong>{data.education.focus}</strong>
            </div>
            <div>
              <span className="meta-label">Phone</span>
              <strong>{data.phone}</strong>
            </div>
            <div>
              <span className="meta-label">Location</span>
              <strong>{data.location}</strong>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
