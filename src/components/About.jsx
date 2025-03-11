import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative border-b border-neutral-100 pb-12 lg:mb-40 bg-gradient-to-b from-white to-gray-50">
      <h1 className="mt-16 mb-8 text-center text-5xl font-bold tracking-tight text-gray-900">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center px-6 lg:px-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 p-4"
        >
          <div className="flex justify-center">
            <img
              className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 w-72 h-auto"
              src={aboutImg}
              alt="About"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-2/3"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-4 max-w-xl py-6 text-lg leading-relaxed text-gray-700">
              {ABOUT_TEXT}
            </p>

            <a
              href="/public/Piyumi-Amarasingha-SE_CV.pdf"
              download="My_CV.pdf"
              className="mr-2 rounded bg-neutral-50 px-2 py-1 text-sm font-medium text-purple-900 shadow-md transition duration-300 hover:bg-black"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
