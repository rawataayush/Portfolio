/** Opening section: name, value statement, and primary actions. */
const Hero = () => {
  return (
    <section className="section hero" id="top">
      <div className="container">
        <div className="hero-meta">
          <span>[ Portfolio & archive ] · India (Remote)</span>
          <span>Web developer & student · 2026</span>
        </div>
        <h1 className="hero-title">Building for the web. Learning. Iterating.</h1>
        <div className="hero-grid">
          <p className="hero-copy">
            I&apos;m Aayush, a web developer and online BCA student at Shoolini
            University focused on React, JavaScript, and modern frontend
            development. I learn by building real projects and turning ideas
            into functional interfaces.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View selected work
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_downward
              </span>
            </a>
            <div className="btn-row">
              <a
                className="btn btn-secondary"
                href="https://github.com/rawataayush"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_outward
                </span>
              </a>
              <a
                className="btn btn-secondary"
                href="https://linkedin.com/in/rawataayush"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="status-grid">
          <div className="status-cell">
            <span className="status-label">Status</span>
            <span className="status-value">Open to opportunities</span>
          </div>
          <div className="status-cell">
            <span className="status-label">Education</span>
            <span className="status-value">Online BCA, Shoolini University</span>
          </div>
          <div className="status-cell">
            <span className="status-label">Focus</span>
            <span className="status-value">React & modern frontend</span>
          </div>
          <div className="status-cell">
            <span className="status-label">Path</span>
            <span className="status-value">Practical projects & learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
