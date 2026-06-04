import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="eyebrow">Contact</p>
        <h2 className="section-title text-4xl font-semibold text-slate-900">
          Let&apos;s build something great!
        </h2>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="contact-card mx-auto mt-10 max-w-3xl p-8"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          Based in Sri Lanka
        </p>
        <div className="mt-6 grid gap-4 text-sm font-medium text-slate-700">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/80 p-2 text-slate-600">
              <FiMapPin />
            </span>
            <span>{CONTACT.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/80 p-2 text-slate-600">
              <FiPhone />
            </span>
            <a
              href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`}
              className="text-slate-700"
            >
              {CONTACT.phoneNo}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/80 p-2 text-slate-600">
              <FiMail />
            </span>
            <a href={`mailto:${CONTACT.email}`} className="text-slate-700">
              {CONTACT.email}
            </a>
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-slate-600">
          <b>Currently available.</b> <br />I am open to new opportunities and
          exciting projects. Whether you need a full-time engineer or a
          freelance consultant, let&apos;s talk.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
