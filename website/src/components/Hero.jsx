import Button from "./Button";

/** Opening section: name, value statement, and primary actions. */
const Hero = () => {
  return (
    <section
      className="border-b border-line-soft pt-8 pb-8"
      id="top"
    >
      <div className="mx-auto w-full max-w-6xl px-2 md:px-4 desktop:px-6">
        <div className="mb-5 flex flex-wrap justify-between gap-2 border-b border-line-soft pb-2 font-mono text-xs tracking-[0.08em] text-ink-muted uppercase">
          <span>[ Portfolio & archive ] · India (Remote)</span>
          <span>Web developer & student · 2026</span>
        </div>
        <h1 className="mb-5 max-w-[18ch] text-5xl leading-tight tracking-[-0.04em] uppercase md:text-6xl desktop:text-8xl">
          Building for the web. Learning. Iterating.
        </h1>
        <div className="grid grid-cols-1 gap-4 desktop:grid-cols-[2fr_1fr] desktop:items-start">
          <p className="max-w-80 text-lg text-ink-muted">
            I&apos;m Aayush, a web developer and online BCA student at Shoolini
            University focused on React, JavaScript, and modern frontend
            development. I learn by building real projects and turning ideas
            into functional interfaces.
          </p>
          <div className="flex flex-col gap-1">
            <Button as="a" href="#projects">
              View selected work
              <span aria-hidden="true" className="material-symbols-outlined">
                arrow_downward
              </span>
            </Button>
            <div className="flex w-full flex-wrap gap-1">
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
        </div>
        <div className="mt-6 grid grid-cols-1 border border-line md:grid-cols-2 desktop:grid-cols-4">
          <div className="flex flex-col gap-1 border-b border-line p-3 last:border-b-0 md:border-r md:odd:border-r md:nth-[n+3]:border-b-0 desktop:border-b-0 desktop:border-r desktop:last:border-r-0">
            <span className="font-mono text-xs tracking-[0.08em] text-ink-muted uppercase">
              Status
            </span>
            <span className="text-md font-semibold">Open to opportunities</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-line p-3 last:border-b-0 md:border-r md:odd:border-r md:nth-[n+3]:border-b-0 desktop:border-b-0 desktop:border-r desktop:last:border-r-0">
            <span className="font-mono text-xs tracking-[0.08em] text-ink-muted uppercase">
              Education
            </span>
            <span className="text-md font-semibold">
              Online BCA, Shoolini University
            </span>
          </div>
          <div className="flex flex-col gap-1 border-b border-line p-3 last:border-b-0 md:border-r md:odd:border-r md:nth-[n+3]:border-b-0 desktop:border-b-0 desktop:border-r desktop:last:border-r-0">
            <span className="font-mono text-xs tracking-[0.08em] text-ink-muted uppercase">
              Focus
            </span>
            <span className="text-md font-semibold">
              React & modern frontend
            </span>
          </div>
          <div className="flex flex-col gap-1 border-b border-line p-3 last:border-b-0 md:border-r md:odd:border-r md:nth-[n+3]:border-b-0 desktop:border-b-0 desktop:border-r desktop:last:border-r-0">
            <span className="font-mono text-xs tracking-[0.08em] text-ink-muted uppercase">
              Path
            </span>
            <span className="text-md font-semibold">
              Practical projects & learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;