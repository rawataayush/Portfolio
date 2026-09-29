import Button from "./Button";

/** Short value proposition and contact call-to-action. */
const About = () => {
  return (
    <section className="border-b border-line-soft py-8" id="about">
      <div className="mx-auto w-full max-w-6xl px-2 md:px-4 desktop:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b border-line pb-3">
          <div>
            <span className="mb-1 block font-mono text-xs tracking-[0.08em] text-ink-muted uppercase">
              [ Profile ]
            </span>
            <h2 className="text-3xl leading-tight tracking-[-0.03em] uppercase">
              01 / About
            </h2>
          </div>
          <span className="max-w-96 font-mono text-xs tracking-[0.06em] text-ink-muted uppercase">
            Background & practice
          </span>
        </div>
        <p className="mb-4 max-w-80 text-lg">
          I build practical React interfaces as an online BCA student at
          Shoolini University. I learn by shipping real projects, writing clean
          JavaScript, and turning ideas into usable, accessible web experiences.
        </p>
        <Button as="a" href="#contact">
          Let&apos;s work together
          <span aria-hidden="true" className="material-symbols-outlined">
            arrow_downward
          </span>
        </Button>
      </div>
    </section>
  );
};

export default About;