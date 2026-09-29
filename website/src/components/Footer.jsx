/** Site footer with identity, social links, and back-to-top. */
const Footer = () => {
  return (
    <footer className="py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-2 md:flex-row md:items-center md:justify-between md:px-4 desktop:px-6">
        <div>
          <span className="text-lg font-bold tracking-[-0.03em] uppercase">
            Aayush Rawat
          </span>
          <span className="mt-1 block font-mono text-xs tracking-[0.06em] text-ink-muted uppercase">
            © 2026 Aayush Rawat — Online BCA student & frontend developer
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            className="font-mono text-xs tracking-[0.06em] text-ink-muted uppercase transition-colors hover:text-ink focus-visible:text-ink"
            href="https://github.com/rawataayush"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="font-mono text-xs tracking-[0.06em] text-ink-muted uppercase transition-colors hover:text-ink focus-visible:text-ink"
            href="https://linkedin.com/in/rawataayush"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="font-mono text-xs tracking-[0.06em] text-ink-muted uppercase transition-colors hover:text-ink focus-visible:text-ink"
            href="https://x.com/rawataayush_"
            rel="noreferrer"
            target="_blank"
          >
            X
          </a>
          <a
            className="font-mono text-xs tracking-[0.06em] text-ink-muted uppercase transition-colors hover:text-ink focus-visible:text-ink"
            href="#contact"
          >
            Contact
          </a>
          <a
            className="font-mono text-xs tracking-[0.06em] text-ink-muted uppercase transition-colors hover:text-ink focus-visible:text-ink"
            href="#top"
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;