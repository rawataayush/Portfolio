import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
        <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
    <Footer />
    </>
  )
}
export default App;