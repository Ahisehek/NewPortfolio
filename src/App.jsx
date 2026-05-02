import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Education from "./components/Education";
import CursorGlow from "./components/CursorGlow";
import Bg from "./components/Bg";
import Foot from "./components/Foot";

export default function App() {
  return (
    <>
      <div className="relative">

        {/* Background layers */}
        <Bg />
        <CursorGlow />

        {/* Content */}
        <div className="relative z-10 border  overflow-hidden">
          <Nav />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Foot />


        </div>

      </div>





    </>
  );
}