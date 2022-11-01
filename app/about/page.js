import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="flex justify-start items-center w-full py-20">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-black text-6xl lg:text-4xl">About Me</h1>
            <p className="text-4xl lg:text-2xl mt-4 lg:mt-2">
              I'm a Frontend Developer with 7+ years of experience. Passionate
              about Designing & Web3 technology. Built 50+ websites and worked
              with various companies and teams both domestic and intenationally
              to build their technology and user experience.
            </p>
            <h1 className="font-black text-6xl lg:text-3xl mt-12">
              Strong Suits 💪{" "}
            </h1>
            <ul className="flex flex-col space-y-2 mt-4 lg:mt-2 list-disc text-4xl lg:text-xl ml-[2rem] lg:ml-[1rem]">
              <li>Leadership</li>
              <li>Self-driven</li>
              <li>Quick learner</li>
              <li>Team player</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
