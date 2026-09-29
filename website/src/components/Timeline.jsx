import { timeline } from "../data/timeline";

/** Chronological milestones rendered from timeline data. */
const Timeline = () => {
  return (
    <section className="border-b border-line-soft py-8" id="timeline">
      <div className="mx-auto w-full max-w-6xl px-2 md:px-4 desktop:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b border-line pb-3">
          <div>
            <span className="mb-1 block font-mono text-xs tracking-[0.08em] text-ink-muted uppercase">
              [ Milestones & progress ]
            </span>
            <h2 className="text-3xl leading-tight tracking-[-0.03em] uppercase">
              04 / Journey
            </h2>
          </div>
          <span className="max-w-96 font-mono text-xs tracking-[0.06em] text-ink-muted uppercase">
            Chronology // 2025 – 2026
          </span>
        </div>
        <div className="border border-line">
          {timeline.map((entry) => (
            <article
              className="grid grid-cols-1 gap-2 border-b border-line p-3 last:border-b-0 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)_minmax(0,1.6fr)] md:items-start md:gap-3"
              key={entry.id}
            >
              <span className="font-mono text-xs tracking-[0.08em] uppercase">
                {entry.date}
              </span>
              <div>
                <h3 className="text-lg tracking-[-0.02em] uppercase">
                  {entry.title}
                </h3>
                <span className="mt-1 block font-mono text-xs text-ink-muted uppercase">
                  {entry.organization}
                </span>
              </div>
              <p className="text-ink-muted">{entry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;