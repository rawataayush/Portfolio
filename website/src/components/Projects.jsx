import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

/** Selected work grid built from the shared project data. */
const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">[ Work repository ]</span>
            <h2 className="section-title">02 / Selected work</h2>
          </div>
          <p className="section-aside">
            Real web projects, hackathon work, and interface studies built with
            modern frontend tools.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
