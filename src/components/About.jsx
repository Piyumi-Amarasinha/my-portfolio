import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="eyebrow">About</p>
          <h2 className="section-title text-4xl font-semibold text-slate-900">
            Learning, building, and growing through technology.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">{ABOUT_TEXT}</p>
          <div className="flex flex-wrap gap-3">
            <span className="accent-chip">User-focused</span>
            <span className="accent-chip">Product thinking</span>
            <span className="accent-chip">Clean architecture</span>
          </div>
          <a
            href="/Piyumi-Amarasingha-SE_CV.pdf"
            download="My_CV.pdf"
            className="inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 80 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6"
        >
          <img
            className="h-72 w-full rounded-2xl object-cover"
            src={aboutImg}
            alt="About"
          />
          <div className="mt-6 grid gap-4 text-sm text-slate-600">
            <div className="rounded-2xl bg-white px-4 py-4">
              I enjoy building full-stack experiences that feel fast, polished,
              and intuitive.
            </div>
            <div className="rounded-2xl bg-white px-4 py-4">
              Recent focus: mobile-first design systems, API performance, and
              team collaboration.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
