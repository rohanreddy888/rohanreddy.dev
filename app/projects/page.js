import Image from "next/image";
import Projects from "../data/projects.json";
export default function Project() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center w-full py-20">
        <div className="flex flex-col justify-start items-start w-full">
          <h1 className="font-black text-6xl lg:text-4xl">Recent Projects</h1>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            {Projects.map((project, index) => {
              return (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  className="bg-white shadow-lg rounded-lg mt-4 lg:mt-2">
                  <Image
                    className="rounded-lg"
                    src={project.image}
                    height="200"
                    alt={project.name}
                    width="200"
                    style={{ width: "100%" }}
                  />
                  <div className="p-4 lg:px-3 lg:py-6">
                    <h1 className="font-bold text-4xl lg:text-xl">
                      {project.name}
                    </h1>
                    <p className="text-2xl lg:text-base">{project.desc}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
