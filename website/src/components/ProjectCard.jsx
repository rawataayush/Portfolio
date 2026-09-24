/** Single project tile: media, copy, stack, and outbound links. */
const ProjectCard = ({ project }) => {
  const liveAvailable = Boolean(project.live);

  return (
    <article className="project-card">
      <div className="project-media">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          width="1200"
          height="750"
        />
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tech-list">
          {project.tech.map((item) => (
            <li className="tech-chip" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <div className="project-links">
          <a
            className="btn btn-primary"
            href={project.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_outward
            </span>
          </a>
          <a
            className="btn btn-secondary"
            href={liveAvailable ? project.live : "#projects"}
            rel={liveAvailable ? "noreferrer" : undefined}
            target={liveAvailable ? "_blank" : undefined}
            aria-disabled={liveAvailable ? undefined : "true"}
            title={liveAvailable ? "Open live site" : "Live demo not published yet"}
          >
            Live
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_outward
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
