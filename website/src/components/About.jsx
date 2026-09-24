/** Short value proposition and contact call-to-action. */
const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">[ Profile ]</span>
            <h2 className="section-title">01 / About</h2>
          </div>
          <span className="section-aside">Background & practice</span>
        </div>
        <p className="about-copy">
          I build practical React interfaces as an online BCA student at
          Shoolini University. I learn by shipping real projects, writing clean
          JavaScript, and turning ideas into usable, accessible web experiences.
        </p>
        <a className="btn btn-primary" href="#contact">
          Let&apos;s work together
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_downward
          </span>
        </a>
      </div>
    </section>
  );
};

export default About;
