import { useState } from "react";
import Button from "./Button";

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
    <section className="border-b border-line-soft py-8" id="contact">
      <div className="mx-auto w-full max-w-6xl px-2 md:px-4 desktop:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b border-line pb-3">
          <div>
            <span className="mb-1 block font-mono text-xs tracking-[0.08em] text-ink-muted uppercase">
              [ Direct inquiry ]
            </span>
            <h2 className="text-3xl leading-tight tracking-[-0.03em] uppercase">
              05 / Contact
            </h2>
          </div>
          <span className="max-w-96 font-mono text-xs tracking-[0.06em] text-ink-muted uppercase">
            Get in touch
          </span>
        </div>
        <h3 className="mb-5 text-4xl leading-tight tracking-[-0.04em] uppercase desktop:text-6xl">
          Let&apos;s build something.
        </h3>
        <div className="grid grid-cols-1 gap-6 desktop:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-4 text-ink-muted">
              Open to collaboration, freelance projects, and web development
              opportunities. Reach out by email or use the form.
            </p>
            <span className="mb-1 block font-mono text-xs tracking-[0.08em] text-ink-muted uppercase">
              Direct email
            </span>
            <p className="text-xl font-semibold wrap-break-words">{email}</p>
            <div className="mt-2 mb-3 flex w-full flex-wrap gap-1">
              <Button as="a" grow href={`mailto:${email}`}>
                Email me
                <span aria-hidden="true" className="material-symbols-outlined">
                  arrow_outward
                </span>
              </Button>
              <Button
                grow
                onClick={handleCopy}
                type="button"
                variant="secondary"
              >
                {copied ? "Copied" : "Copy"}
                <span aria-hidden="true" className="material-symbols-outlined">
                  content_copy
                </span>
              </Button>
            </div>
            <div className="mt-2 flex w-full flex-wrap gap-1">
              <Button
                as="a"
                grow
                href="https://github.com/rawataayush"
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                GitHub
                <span aria-hidden="true" className="material-symbols-outlined">
                  arrow_outward
                </span>
              </Button>
              <Button
                as="a"
                grow
                href="https://linkedin.com/in/rawataayush"
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                LinkedIn
                <span aria-hidden="true" className="material-symbols-outlined">
                  arrow_outward
                </span>
              </Button>
            </div>
          </div>
          <form
            className="flex flex-col gap-3 border border-line p-3"
            onSubmit={handleSubmit}
          >
            <span className="block font-mono text-xs tracking-[0.08em] uppercase">
              [ Contact form ]
            </span>
            <div className="flex flex-col gap-1">
              <label
                className="font-mono text-xs tracking-[0.08em] text-ink-muted uppercase"
                htmlFor="name"
              >
                01 // Name
              </label>
              <input
                className="w-full border border-line bg-bg p-2 text-ink focus:outline focus:outline-ink focus:outline-offset-1"
                id="name"
                name="name"
                placeholder="Your name or company"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="font-mono text-xs tracking-[0.08em] text-ink-muted uppercase"
                htmlFor="email"
              >
                02 // Email
              </label>
              <input
                className="w-full border border-line bg-bg p-2 text-ink focus:outline focus:outline-ink focus:outline-offset-1"
                id="email"
                name="email"
                placeholder="name@example.com"
                required
                type="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="font-mono text-xs tracking-[0.08em] text-ink-muted uppercase"
                htmlFor="message"
              >
                03 // Message
              </label>
              <textarea
                className="w-full border border-line bg-bg p-2 text-ink focus:outline focus:outline-ink focus:outline-offset-1"
                id="message"
                name="message"
                placeholder="Describe your project, question, or opportunity..."
                required
                rows="4"
              />
            </div>
            {submitted ? (
              <p className="font-mono text-xs uppercase">
                Message logged — frontend form ready for backend integration.
              </p>
            ) : null}
            <Button type="submit">
              Send message
              <span aria-hidden="true" className="material-symbols-outlined">
                arrow_outward
              </span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;