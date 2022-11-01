import Image from "next/image";
import Projects from "/app/data/projects.json";
export default function Project() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center w-full py-20">
        <div className="flex flex-col justify-start items-start w-full">
          <h1 className="font-black text-6xl lg:text-4xl">Recent Projects</h1>
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            {Projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-sm mt-4 lg:mt-2 w-full">
                  <Image
                    src={project.image}
                    height="200"
                    alt={project.name}
                    width="200"
                    style={{ width: "100%" }}
                  />
                  <div className="p-4 lg:p-2">
                    <h1 className="font-bold text-4xl lg:text-xl">
                      {project.name}
                    </h1>
                    <p className="text-2xl lg:text-base">{project.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
