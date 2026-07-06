export default function Contact({ data }) {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-shell panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s connect on opportunities in cloud, DevOps, and web development.</h2>
            <p className="contact-text">
              I&apos;m interested in learning-focused roles, collaborative builds, and projects where I can keep growing
              as an engineer.
            </p>
          </div>

          <div className="contact-list">
            <a href={`mailto:${data.email}`}>{data.email}</a>
            <a href={`tel:${data.phone.replace(/\s+/g, "")}`}>{data.phone}</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={data.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
