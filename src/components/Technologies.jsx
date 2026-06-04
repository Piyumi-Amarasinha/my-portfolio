import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiJavascript, SiMysql, SiSpringboot } from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <section id="tech" className="section">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <p className="eyebrow">Toolbox</p>
        <h2 className="section-title text-4xl font-semibold text-slate-900">
          Technologies I enjoy working with
        </h2>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
        className="tech-marquee"
      >
        <div className="tech-track">
          {[
            {
              icon: <RiReactjsLine className="text-5xl text-cyan-400" />,
              name: "React.js",
            },
            {
              icon: <RiNextjsFill className="text-5xl text-cyan-400" />,
              name: "Next.js",
            },
            {
              icon: <FaJava className="text-5xl text-red-600" />,
              name: "Java",
            },
            {
              icon: <SiJavascript className="text-5xl text-yellow-400" />,
              name: "JavaScript",
            },
            {
              icon: <TbBrandReactNative className="text-5xl text-blue-500" />,
              name: "React Native",
            },
            {
              icon: <FaNodeJs className="text-5xl text-green-500" />,
              name: "Node.js",
            },
            {
              icon: <SiSpringboot className="text-5xl text-green-600" />,
              name: "Spring Boot",
            },
            {
              icon: <SiMongodb className="text-5xl text-green-500" />,
              name: "MongoDB",
            },
            {
              icon: <SiMysql className="text-5xl text-blue-600" />,
              name: "MySQL",
            },
          ]
            .concat([
              {
                icon: <RiReactjsLine className="text-5xl text-cyan-400" />,
                name: "React.js",
              },
              {
                icon: <RiReactjsLine className="text-5xl text-cyan-400" />,
                name: "Next.js",
              },
              {
                icon: <FaJava className="text-5xl text-red-600" />,
                name: "Java",
              },
              {
                icon: <SiJavascript className="text-5xl text-yellow-400" />,
                name: "JavaScript",
              },
              {
                icon: <TbBrandReactNative className="text-5xl text-blue-500" />,
                name: "React Native",
              },
              {
                icon: <FaNodeJs className="text-5xl text-green-500" />,
                name: "Node.js",
              },
              {
                icon: <SiSpringboot className="text-5xl text-green-600" />,
                name: "Spring Boot",
              },
              {
                icon: <SiMongodb className="text-5xl text-green-500" />,
                name: "MongoDB",
              },
              {
                icon: <SiMysql className="text-5xl text-blue-600" />,
                name: "MySQL",
              },
            ])
            .map((tech, index) => (
              <div key={index} className="tech-item">
                {tech.icon}
                <p className="text-base font-semibold text-slate-700">
                  {tech.name}
                </p>
              </div>
            ))}
        </div>
        <span className="tech-mask" aria-hidden="true"></span>
      </motion.div>
    </section>
  );
};

export default Technologies;
