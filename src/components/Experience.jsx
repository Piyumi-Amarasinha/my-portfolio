import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="eyebrow">Career Journey</p>
        <h2 className="section-title text-4xl font-semibold text-slate-900">
          Experience that speaks volumes.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
          A story of professional growth from curious student to a passionate
          software developer building modern, responsive applications.
        </p>
      </motion.div>

      <div className="timeline mt-12 grid gap-8">
        {EXPERIENCES.map((item, index) => (
          <motion.article
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="timeline-dot" aria-hidden="true"></span>
            <div className="grid lg:grid-cols-2 lg:gap-16">
              <div
                className={`glass-card w-full p-6 lg:p-8 ${
                  index % 2 === 0
                    ? "lg:col-start-1 lg:justify-self-end lg:pr-6"
                    : "lg:col-start-2 lg:justify-self-start lg:pl-6"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      {item.year}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">
                      {item.role}
                    </h3>
                    <p className="text-sm text-slate-500">{item.company}</p>
                  </div>
                  <span className="milestone-badge">
                    {item.milestone ? (
                      <img
                        src={item.milestone}
                        alt={`${item.company} milestone`}
                        className="milestone-image"
                      />
                    ) : (
                      <span className="milestone-fallback">
                        {item.company?.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="accent-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
