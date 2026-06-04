import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title text-4xl font-semibold text-slate-900">
          Projects and experiments
        </h2>
      </motion.div>
      <div className="grid gap-8 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="project-card p-6"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="accent-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
