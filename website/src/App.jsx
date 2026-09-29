import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-w-0">
      <a
        className="absolute -top-20 left-2 z-[51] bg-ink px-2 py-1 text-inverse focus:top-2"
        href="#projects"
      >
        Skip to work
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
