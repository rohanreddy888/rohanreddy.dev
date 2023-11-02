import Image from "next/legacy/image";
import GitHubCalendar from "react-github-calendar";
import { Tweet } from "react-tweet";
import Github from "./../../components/Github";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-8">
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

            <div className="hidden md:block">
              <Tweet id="1696152387113939409" />
            </div>
            <h2 className="mt-12 text-4xl font-black">Strong Suits 💪 </h2>
            <ul className="flex flex-col mt-4 space-y-2 text-xl list-disc list-inside md:mt-2">
              <li>Leadership</li>
              <li>Self-driven</li>
              <li>Quick learner</li>
              <li>Team player</li>
            </ul>
            <h2 className="mt-12 text-4xl font-black">Tech Stack 💻</h2>
            <ul className="flex flex-col mt-4 space-y-2 text-xl list-disc list-inside md:mt-2">
              <li>NextJS</li>
              <li>ReactJS</li>
              <li>TailwindCSS</li>
            </ul>
            <h2 className="mt-12 text-4xl font-black">Achievement 🏆</h2>
            <ul className="flex flex-col mt-4 space-y-2 text-xl list-disc list-inside md:mt-2">
              <li>ETHIndia 22 - Winner LiFi Track 🥉</li>
              <li>NEO APAC Hackathon Bangalore Edition 23 - Winner 🥇</li>
            </ul>

            <Github />
          </div>
        </div>
      </div>
    </>
  );
}
