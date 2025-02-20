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
    <div className="relative border-b border-neutral-100 pb-12 lg:mb-40 bg-gradient-to-b from-white to-gray-50">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
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
            className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            {tech.icon}
            <p className="mt-2 text-lg font-semibold text-neutral-800">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
