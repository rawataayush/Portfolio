import Button from "./Button";

/** Single project tile: media, copy, stack, and outbound links. */
const ProjectCard = ({ project }) => {
  const liveAvailable = Boolean(project.live);

  return (
    <article className="flex min-w-0 flex-col border border-line bg-bg">
      <div className="aspect-16/10 overflow-hidden border-b border-line bg-bg-muted">
        <img
          alt={`${project.title} preview`}
          className="h-full w-full object-cover"
          height="750"
          loading="lazy"
          src={project.image}
          width="1200"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <h3 className="text-xl leading-snug tracking-[-0.02em] uppercase">
          {project.title}
        </h3>
        <p className="text-md text-ink-muted">{project.description}</p>
        <ul className="flex flex-wrap gap-1">
          {project.tech.map((item) => (
            <li
              className="border border-line px-1 py-0.5 font-mono text-xs tracking-[0.04em] uppercase"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-1 pt-1">
          <Button
            as="a"
            grow
            href={project.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
            <span aria-hidden="true" className="material-symbols-outlined">
              arrow_outward
            </span>
          </Button>
          <Button
            aria-disabled={liveAvailable ? undefined : "true"}
            as="a"
            grow
            href={liveAvailable ? project.live : "#projects"}
            rel={liveAvailable ? "noreferrer" : undefined}
            target={liveAvailable ? "_blank" : undefined}
            title={liveAvailable ? "Open live site" : "Live demo not published yet"}
            variant="secondary"
          >
            Live
            <span aria-hidden="true" className="material-symbols-outlined">
              arrow_outward
            </span>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;