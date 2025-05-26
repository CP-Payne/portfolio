import Navbar from "./Components/Navbar/Navbar";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import Home from "./Sections/Home/Home";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import SocialsDesktop from "./Sections/Socials/SocialsDesktop";
import SocialsMobile from "./Sections/Socials/SocialsMobile";

function App() {
  return (
    <>
      <Navbar />
      <main
        id="scroll-container"
        className="w-full pt-[10vh] bg-mainLightGray h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <SocialsDesktop />
        <SocialsMobile />
      </main>
    </>
  );
}

export default App;
