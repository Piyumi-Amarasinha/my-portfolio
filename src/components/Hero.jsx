import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="relative border-b border-neutral-100 pb-12 lg:mb-40 bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-wrap items-center px-6 lg:px-20">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl lg:text-5xl font-semibold tracking-tight text-gray-900"
            >
              Piyumi Amarasingha
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-600 bg-clip-text text-4xl tracking-tight text-transparent font-semibold"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-gray-700"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-12">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              src={profile}
              alt="Piyumi Amarasingha"
              className="w-80 h-80 lg:w-120 lg:h-96 rounded-1.2xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
