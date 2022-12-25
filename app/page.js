import Image from "next/image";
import About from "./about/page";
import Contact from "./contact/page";
import Project from "./projects/page";
export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex justify-start items-center h-screen">
          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center w-full">
            <h1 className="flex flex-col text-4xl font-bolder">
              Hola 👋{" "}
              <span className="text-3xl md:text-7xl font-black mt-4">
                I'm Rohan Reddy
              </span>{" "}
              <span className="text-xl md:text-3xl font-extralight mt-2">
                UI/UX Engineer & Web3 Entrepreneur
              </span>
            </h1>
            <div className="md:mb-0 mb-8 w-56 h-56 md:w-72 md:h-72">
              <Image
                className="shadow-lg rounded-full p-2 bg-white"
                src={"/picture.png"}
                width="350"
                height="350"
                alt="Rohan Reddy"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:min-h-screen" id="about">
        <About />
      </div>
      <div className="md:min-h-screen" id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
