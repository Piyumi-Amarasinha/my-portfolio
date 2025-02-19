import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-0.2">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-5 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaMedium />
      </div>
    </nav>
  );
};

export default Navbar;
