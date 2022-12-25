import Image from "next/image";
import Projects from "../data/projects.json";
export default function Project() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-start items-start md:items-center w-full py-20">
        <div className="flex flex-col justify-start items-start w-full">
          <h1 className="font-black text-4xl">Recent Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {Projects.map((project, index) => {
              return (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  className="bg-white shadow-lg rounded-lg mt-4 md:mt-2">
                  <Image
                    className="rounded-lg"
                    src={project.image}
                    height="200"
                    alt={project.name}
                    width="200"
                    style={{ width: "100%" }}
                  />
                  <div className="p-4 md:px-3 md:py-6">
                    <h1 className="font-bold text-xl">{project.name}</h1>
                    <p className="text-base">{project.desc}</p>
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
