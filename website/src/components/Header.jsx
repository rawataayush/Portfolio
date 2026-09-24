import { useState } from "react";

/** Site header: identity, in-page navigation, and contact CTA. */
const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#top">
          Aayush Rawat
        </a>
        <nav className="nav" aria-label="Primary">
          <a className="nav-link" href="#about">
            <span className="nav-index">01</span>About
          </a>
          <a className="nav-link" href="#projects">
            <span className="nav-index">02</span>Work
          </a>
          <a className="nav-link" href="#skills">
            <span className="nav-index">03</span>Skills
          </a>
          <a className="nav-link" href="#timeline">
            <span className="nav-index">04</span>Journey
          </a>
          <a className="nav-link" href="#contact">
            <span className="nav-index">05</span>Contact
          </a>
        </nav>
        <a className="btn btn-primary header-cta" href="#contact">
          Get in touch
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_outward
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>
      {open ? (
        <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile">
          <a className="nav-link" href="#about" onClick={closeMenu}>
            01 About
          </a>
          <a className="nav-link" href="#projects" onClick={closeMenu}>
            02 Work
          </a>
          <a className="nav-link" href="#skills" onClick={closeMenu}>
            03 Skills
          </a>
          <a className="nav-link" href="#timeline" onClick={closeMenu}>
            04 Journey
          </a>
          <a className="nav-link" href="#contact" onClick={closeMenu}>
            05 Contact
          </a>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
