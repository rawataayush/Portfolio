import { useState } from "react";
import Button from "./Button";

/** Site header: identity, in-page navigation, and contact CTA. */
const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 h-8 border-b border-line bg-bg">
      <div className="mx-auto flex h-8 w-full max-w-6xl items-center justify-between gap-2 px-2 md:px-4 desktop:px-6">
        <a
          className="text-lg font-bold tracking-[-0.03em] uppercase"
          href="#top"
        >
          Aayush Rawat
        </a>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-3 md:flex"
        >
          <a
            className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-muted transition-colors hover:text-ink focus-visible:text-ink"
            href="#about"
          >
            <span className="mr-1 font-mono">01</span>About
          </a>
          <a
            className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-muted transition-colors hover:text-ink focus-visible:text-ink"
            href="#projects"
          >
            <span className="mr-1 font-mono">02</span>Work
          </a>
          <a
            className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-muted transition-colors hover:text-ink focus-visible:text-ink"
            href="#skills"
          >
            <span className="mr-1 font-mono">03</span>Skills
          </a>
          <a
            className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-muted transition-colors hover:text-ink focus-visible:text-ink"
            href="#timeline"
          >
            <span className="mr-1 font-mono">04</span>Journey
          </a>
          <a
            className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-muted transition-colors hover:text-ink focus-visible:text-ink"
            href="#contact"
          >
            <span className="mr-1 font-mono">05</span>Contact
          </a>
        </nav>
        <Button as="a" className="hidden md:inline-flex" href="#contact">
          Get in touch
          <span aria-hidden="true" className="material-symbols-outlined">
            arrow_outward
          </span>
        </Button>
        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-5 w-5 cursor-pointer items-center justify-center border border-ink bg-transparent p-0 md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span aria-hidden="true" className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>
      {open ? (
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-2 border-b border-line bg-bg px-2 py-3 pb-4 md:hidden md:px-4 desktop:px-6"
          id="mobile-nav"
        >
          <a
            className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-muted transition-colors hover:text-ink focus-visible:text-ink"
            href="#about"
            onClick={closeMenu}
          >
            01 About
          </a>
          <a
            className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-muted transition-colors hover:text-ink focus-visible:text-ink"
            href="#projects"
            onClick={closeMenu}
          >
            02 Work
          </a>
          <a
            className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-muted transition-colors hover:text-ink focus-visible:text-ink"
            href="#skills"
            onClick={closeMenu}
          >
            03 Skills
          </a>
          <a
            className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-muted transition-colors hover:text-ink focus-visible:text-ink"
            href="#timeline"
            onClick={closeMenu}
          >
            04 Journey
          </a>
          <a
            className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-muted transition-colors hover:text-ink focus-visible:text-ink"
            href="#contact"
            onClick={closeMenu}
          >
            05 Contact
          </a>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;