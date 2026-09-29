import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

/** Selected work grid built from the shared project data. */
const Projects = () => {
  return (
    <section className="border-b border-line-soft py-8" id="projects">
      <div className="mx-auto w-full max-w-6xl px-2 md:px-4 desktop:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b border-line pb-3">
          <div>
            <span className="mb-1 block font-mono text-xs tracking-[0.08em] text-ink-muted uppercase">
              [ Work repository ]
            </span>
            <h2 className="text-3xl leading-tight tracking-[-0.03em] uppercase">
              02 / Selected work
            </h2>
          </div>
          <p className="max-w-96 font-mono text-xs tracking-[0.06em] text-ink-muted uppercase">
            Real web projects, hackathon work, and interface studies built with
            modern frontend tools.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 desktop:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;