import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiJavascript, SiMysql, SiSpringboot } from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

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
        className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
      >
        {[
          {
            icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
            name: "React.js",
            duration: 2.5,
          },
          {
            icon: <FaJava className="text-7xl text-red-600" />,
            name: "Java",
            duration: 3,
          },
          {
            icon: <SiJavascript className="text-7xl text-yellow-400" />,
            name: "JavaScript",
            duration: 4,
          },
          {
            icon: <TbBrandReactNative className="text-7xl text-blue-500" />,
            name: "React Native",
            duration: 3.5,
          },
          {
            icon: <FaNodeJs className="text-7xl text-green-500" />,
            name: "Node.js",
            duration: 2,
          },
          {
            icon: <SiSpringboot className="text-7xl text-green-600" />,
            name: "Spring Boot",
            duration: 3.2,
          },
          {
            icon: <SiMongodb className="text-7xl text-green-500" />,
            name: "MongoDB",
            duration: 5,
          },
          {
            icon: <SiMysql className="text-7xl text-blue-600" />,
            name: "MySQL",
            duration: 4.5,
          },
        ].map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="glass-card flex flex-col items-center gap-2 rounded-2xl p-5 text-center"
          >
            {tech.icon}
            <p className="text-sm font-semibold text-slate-700">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
