import Image from "next/legacy/image";
import Link from "next/link";
import Projects from "./data/projects.json";
export default function Project() {
  return (
    <>
      <div className="flex flex-col items-start justify-start w-full md:flex-row md:items-center">
        <div className="flex flex-col items-start justify-start w-full gap-4">
          <h2 className="text-4xl font-black">Recent Projects</h2>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {Projects.map((project, index) => {
              return (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  className="bg-white rounded-lg shadow-lg "
                >
                  <div>
                    <img
                      className="w-full h-48 rounded-lg md:h-96"
                      src={project.image}
                      alt={project.name}
                      height="600"
                      width="200"
                    />
                  </div>
                  <div className="p-4 md:px-3 md:py-6">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-base">{project.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center justify-center w-full h-full py-24 bg-white rounded-lg shadow-lg">
            <Link
              href="https://github.com/rohanreddy888"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center gap-4 text-lg font-semibold"
            >
              <h3 className="text-2xl">
                Check out GitHub <br /> for more projects
              </h3>
              <Image
                className="text-black"
                src={"/icons/Github.png"}
                width="40"
                height="40"
                alt="Github Icon"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
