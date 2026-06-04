import logo from "../assets/Piyumi.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-4 z-10 mb-10 rounded-full border border-white/40 bg-white/70 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img className="w-12" src={logo} alt="logo" />
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Piyumi Amarasingha
            </p>
            <p className="text-xs text-slate-500">Full Stack Developer</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a className="nav-pill" href="#about">
            About
          </a>
          <a className="nav-pill" href="#experience">
            Experience
          </a>
          <a className="nav-pill" href="#tech">
            Stack
          </a>
          <a className="nav-pill" href="#projects">
            Projects
          </a>
          <a className="nav-pill" href="#contact">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-3 text-xl text-slate-700">
          <a
            href="https://www.linkedin.com/in/piyumi-amarasingha-mad99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Piyumi-Amarasinha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://medium.com/@piyuminavoda792"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
