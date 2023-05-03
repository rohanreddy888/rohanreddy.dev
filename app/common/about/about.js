import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="flex items-center justify-start w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-4xl font-black">About Me</h2>
            <p className="mt-4 text-xl">
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
            <h2 className="mt-12 text-4xl font-black">Strong Suits 💪 </h2>
            <ul className="flex flex-col space-y-2 mt-4 md:mt-2 list-disc text-xl ml-[2rem] md:ml-[1rem]">
              <li>Leadership</li>
              <li>Self-driven</li>
              <li>Quick learner</li>
              <li>Team player</li>
            </ul>
            <h2 className="mt-12 text-4xl font-black">Tech Stack </h2>
            <ul className="flex flex-col space-y-2 mt-4 md:mt-2 list-disc text-xl ml-[2rem] md:ml-[1rem]">
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