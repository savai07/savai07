export default function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="container footer-shell">
        <p>{data.name}</p>
        <p>{data.title}</p>
      </div>
    </footer>
  );
}
