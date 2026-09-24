/** Site footer with identity, social links, and back-to-top. */
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <span className="footer-name">Aayush Rawat</span>
          <span className="footer-meta">
            © 2026 Aayush Rawat — Online BCA student & frontend developer
          </span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/rawataayush" rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/rawataayush" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href="https://x.com/rawataayush_" rel="noreferrer" target="_blank">
            X
          </a>
          <a href="#contact">Contact</a>
          <a href="#top">Top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;