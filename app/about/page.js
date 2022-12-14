import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="flex justify-start items-center w-full py-20">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-black text-6xl lg:text-4xl">About Me</h1>
            <p className="text-4xl lg:text-2xl mt-4 lg:mt-2">
              As a frontend developer and UI/UX designer, I have a passion for
              creating intuitive and engaging user experiences. With 7+ years of
              experience in the industry, I have built over 50 websites for
              various companies and teams, both domestic and international. My
              skills include HTML, CSS, JavaScript, and web3 technology, as well
              as a strong eye for design and an understanding of user behavior.
              In addition to my professional experience, I am also an active
              contributor to the open source community. I am constantly learning
              and staying up-to-date with the latest industry trends and
              technologies.
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
            <h1 className="font-black text-6xl lg:text-3xl mt-12">
              Tech Stack{" "}
            </h1>
            <ul className="flex flex-col space-y-2 mt-4 lg:mt-2 list-disc text-4xl lg:text-xl ml-[2rem] lg:ml-[1rem]">
              <li>NextJS</li>
              <li>ReactJS</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
