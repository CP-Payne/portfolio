import Navbar from "./Components/Navbar/Navbar";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import Home from "./Sections/Home/Home";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-[10vh]">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
