import { useState } from "react";

/** Contact coordinates, social links, and a frontend-ready form. */
const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const email = "aayushrawat.dev@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">[ Direct inquiry ]</span>
            <h2 className="section-title">05 / Contact</h2>
          </div>
          <span className="section-aside">Get in touch</span>
        </div>
        <h3 className="contact-title">Let&apos;s build something.</h3>
        <div className="contact-grid">
          <div>
            <p className="contact-copy">
              Open to collaboration, freelance projects, and web development
              opportunities. Reach out by email or use the form.
            </p>
            <span className="eyebrow">Direct email</span>
            <p className="contact-email">{email}</p>
            <div className="btn-row">
              <a className="btn btn-primary" href={`mailto:${email}`}>
                Email me
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_outward
                </span>
              </a>
              <button className="btn btn-secondary" type="button" onClick={handleCopy}>
                {copied ? "Copied" : "Copy"}
                <span className="material-symbols-outlined" aria-hidden="true">
                  content_copy
                </span>
              </button>
            </div>
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
          <form className="contact-form" onSubmit={handleSubmit}>
            <span className="eyebrow">[ Contact form ]</span>
            <div className="field">
              <label htmlFor="name">01 // Name</label>
              <input id="name" name="name" placeholder="Your name or company" required type="text" />
            </div>
            <div className="field">
              <label htmlFor="email">02 // Email</label>
              <input id="email" name="email" placeholder="name@example.com" required type="email" />
            </div>
            <div className="field">
              <label htmlFor="message">03 // Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Describe your project, question, or opportunity..."
                required
                rows="4"
              />
            </div>
            {submitted ? (
              <p className="form-status">
                Message logged — frontend form ready for backend integration.
              </p>
            ) : null}
            <button className="btn btn-primary" type="submit">
              Send message
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_outward
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
