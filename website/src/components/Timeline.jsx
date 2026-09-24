import { timeline } from "../data/timeline";

/** Chronological milestones rendered from timeline data. */
const Timeline = () => {
  return (
    <section className="section" id="timeline">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">[ Milestones & progress ]</span>
            <h2 className="section-title">04 / Journey</h2>
          </div>
          <span className="section-aside">Chronology // 2025 – 2026</span>
        </div>
        <div className="timeline-list">
          {timeline.map((entry) => (
            <article className="timeline-item" key={entry.id}>
              <span className="timeline-date">{entry.date}</span>
              <div>
                <h3 className="timeline-title">{entry.title}</h3>
                <span className="timeline-org">{entry.organization}</span>
              </div>
              <p className="timeline-copy">{entry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
