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
    <section id="home" className="section">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <motion.p
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="eyebrow"
          >
            Portfolio
          </motion.p>
          <motion.h1
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className="section-title text-5xl font-semibold text-slate-900 lg:text-6xl"
          >
            Piyumi Amarasingha
          </motion.h1>

          <motion.p
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.div
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="hero-card p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Availability
              </p>
              <p className="text-sm font-semibold text-slate-700">
                Open for new work
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <img
              src={profile}
              alt="Piyumi Amarasingha"
              className="h-72 w-72 rounded-[28px] object-cover shadow-[0_20px_40px_rgba(15,23,42,0.2)]"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-2xl bg-white px-4 py-3 text-slate-600">
              Frontend systems with React and React Native.
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 text-slate-600">
              API-first backend work with Node.js and Spring Boot.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
