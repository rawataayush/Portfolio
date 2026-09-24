import { skills } from "../data/skills";

/** Technical competencies grouped from the skills data object. */
const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">[ Technical stack ]</span>
            <h2 className="section-title">03 / Skills</h2>
          </div>
          <span className="section-aside">Practical competencies</span>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.id}>
              <div className="skill-group-header">
                <h3 className="skill-group-title">{group.title}</h3>
                <span className="skill-note">{group.note}</span>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li className="skill-item" key={item.name}>
                    <span>{item.name}</span>
                    <span className="skill-note">{item.detail}</span>
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
