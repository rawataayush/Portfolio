import { skills } from "../data/skills";

/** Technical competencies grouped from the skills data object. */
const Skills = () => {
  return (
    <section className="border-b border-line-soft py-8" id="skills">
      <div className="mx-auto w-full max-w-6xl px-2 md:px-4 desktop:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b border-line pb-3">
          <div>
            <span className="mb-1 block font-mono text-xs tracking-[0.08em] text-ink-muted uppercase">
              [ Technical stack ]
            </span>
            <h2 className="text-3xl leading-tight tracking-[-0.03em] uppercase">
              03 / Skills
            </h2>
          </div>
          <span className="max-w-96 font-mono text-xs tracking-[0.06em] text-ink-muted uppercase">
            Practical competencies
          </span>
        </div>
        <div className="grid grid-cols-1 border border-line md:grid-cols-2 desktop:grid-cols-3">
          {skills.map((group) => (
            <div
              className="border-b border-line p-3 last:border-b-0 md:border-r md:nth-[2n]:border-r-0 md:nth-[3n]:border-r-0 md:nth-last-[-n+2]:border-b-0 desktop:border-b-0 desktop:nth-[2n]:border-r desktop:nth-[3n]:border-r-0"
              key={group.id}
            >
              <div className="mb-3 flex justify-between gap-2 border-b border-line-soft pb-2">
                <h3 className="text-xs tracking-[0.08em] uppercase">
                  {group.title}
                </h3>
                <span className="text-xs text-ink-muted uppercase">
                  {group.note}
                </span>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li
                    className="flex justify-between gap-2 py-1 font-mono text-sm"
                    key={item.name}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-ink-muted uppercase">
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;