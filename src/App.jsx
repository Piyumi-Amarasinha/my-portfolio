import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="site-bg overflow-x-hidden antialiased">
      <div className="decor-layer" aria-hidden="true">
        <span className="blob blob-1"></span>
        <span className="blob blob-2"></span>
        <span className="blob blob-3"></span>
      </div>
      <div className="container mx-auto px-6 lg:px-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
