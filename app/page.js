import Hero from "./hero/page";
import About from "./about/page";
import Footer from "./footer/page";
import Project from "./projects/page";
export default function Home() {
  return (
    <>
      <div className="min-h-screen" id="home">
        <Hero />
      </div>
      <div className="md:min-h-screen" id="about">
        <About />
      </div>
      <div className="md:min-h-screen" id="projects">
        <Project />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
